'use client';

import { useResumeStore } from '@/lib/store';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DefaultTemplate } from './templates/default-template';
import { ModernTemplate } from './templates/modern-template';
import { ClassicTemplate } from './templates/classic-template';
import { cn } from '@/lib/utils';


type TemplateSwitcherProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

const templates = [
  { id: 'default', name: 'Default', component: DefaultTemplate },
  { id: 'modern', name: 'Modern', component: ModernTemplate },
  { id: 'classic', name: 'Classic', component: ClassicTemplate },
];

export default function TemplateSwitcher({ isOpen, onOpenChange }: TemplateSwitcherProps) {
  const { resume, setTemplate } = useResumeStore();

  const handleSelectTemplate = (templateId: string) => {
    setTemplate(templateId);
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Choose a Template</DialogTitle>
          <DialogDescription>
            Select a template to instantly update your resume's appearance.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
            {templates.map((template) => {
                const TemplateComponent = template.component;
                return (
                <div key={template.id} className="space-y-2">
                    <Card 
                        className={cn(
                            "cursor-pointer hover:border-primary transition-colors",
                            resume.template === template.id && "border-primary border-2"
                        )}
                        onClick={() => handleSelectTemplate(template.id)}
                    >
                    <CardContent className="p-0">
                        <div className="template-thumbnail">
                            <div className="w-[8.5in] h-[11in] bg-white">
                                <TemplateComponent resume={resume} />
                            </div>
                        </div>
                    </CardContent>
                    </Card>
                    <p className="text-center text-sm font-medium">{template.name}</p>
                </div>
                );
            })}
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
