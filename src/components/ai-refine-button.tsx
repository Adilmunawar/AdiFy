'use client';

import { useState } from 'react';
import { Wand2, LoaderCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { refineContent, RefineContentInput } from '@/ai/flows/ai-content-refinement';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type AiRefineButtonProps = {
  fieldName: string;
  fieldValue: string;
  setValue: (value: string) => void;
  title?: string;
};

export default function AiRefineButton({ fieldName, fieldValue, setValue, title = "Refine with AI" }: AiRefineButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [refinedContent, setRefinedContent] = useState('');
  const [targetCompany, setTargetCompany] = useState('');
  const [targetRole, setTargetRole] = useState('');

  const { toast } = useToast();

  const handleRefine = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setRefinedContent('');
    try {
      const input: RefineContentInput = {
        resumeContent: fieldValue,
        targetedCompany: targetCompany,
        targetedRole: targetRole,
      };
      const result = await refineContent(input);
      setRefinedContent(result.refinedContent);
    } catch (error) {
      console.error('AI refinement failed:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to refine content. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAccept = () => {
    setValue(refinedContent);
    setIsOpen(false);
    setRefinedContent('');
  };
  
  const handleOpenChange = (open: boolean) => {
    if(!open) {
      setRefinedContent('');
    }
    setIsOpen(open);
  }

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="absolute top-0 right-0 text-muted-foreground hover:text-accent"
      >
        <Wand2 className="h-4 w-4" />
      </Button>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              Provide a target company and role to tailor your content.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleRefine} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="targetedCompany">Target Company</Label>
                <Input id="targetedCompany" value={targetCompany} onChange={(e) => setTargetCompany(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetedRole">Target Role</Label>
                <Input id="targetedRole" value={targetRole} onChange={(e) => setTargetRole(e.target.value)} required />
              </div>
            </div>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? <LoaderCircle className="animate-spin" /> : 'Generate Suggestions'}
            </Button>
          </form>

          {(isLoading || refinedContent) && <div className="mt-4 space-y-2">
            <Label>Suggested Content</Label>
            <div className="w-full p-3 min-h-[150px] rounded-md border bg-muted">
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <LoaderCircle className="animate-spin text-muted-foreground" />
                    </div>
                ) : (
                    <p className="text-sm">{refinedContent}</p>
                )}
            </div>
          </div>}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={handleAccept} disabled={!refinedContent || isLoading}>Accept</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
