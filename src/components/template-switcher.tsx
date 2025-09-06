
'use client';

import { useResumeStore } from '@/lib/store';
import type { ResumeSchema } from '@/lib/schema';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { AdvancedTemplate } from './templates/advanced-template';
import { ModernTemplate } from './templates/modern-template';
import { ClassicTemplate } from './templates/classic-template';
import { ExecutiveTemplate } from './templates/executive-template';
import { CreativeTemplate } from './templates/creative-template';
import { MinimalistTemplate } from './templates/minimalist-template';
import { ProfessionalTemplate } from './templates/professional-template';
import { TechnicalTemplate } from './templates/technical-template';
import { CorporateTemplate } from './templates/corporate-template';
import { Creative2Template } from './templates/creative-2-template';

type TemplateSwitcherProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

const templates = [
  { id: 'default', name: 'Advanced', component: AdvancedTemplate },
  { id: 'modern', name: 'Modern', component: ModernTemplate },
  { id: 'classic', name: 'Classic', component: ClassicTemplate },
  { id: 'executive', name: 'Executive', component: ExecutiveTemplate },
  { id: 'creative', name: 'Creative', component: CreativeTemplate },
  { id: 'minimalist', name: 'Minimalist', component: MinimalistTemplate },
  { id: 'professional', name: 'Professional', component: ProfessionalTemplate },
  { id: 'technical', name: 'Technical', component: TechnicalTemplate },
  { id: 'corporate', name: 'Corporate', component: CorporateTemplate },
  { id: 'creative-2', name: 'Creative II', component: Creative2Template },
];

export default function TemplateSwitcher({ isOpen, onOpenChange }: TemplateSwitcherProps) {
  const { resume, setTemplate } = useResumeStore();

  const handleSelectTemplate = (templateId: string) => {
    setTemplate(templateId);
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl h-[90vh]">
        <DialogHeader>
          <DialogTitle>Choose a Template</DialogTitle>
          <DialogDescription>
            Select a template to instantly update your resume's appearance. Your current data is shown in the previews.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-1 pr-6">
            {templates.map((template) => {
                const TemplateComponent = template.component;
                return (
                <div key={template.id} className="space-y-2 group flex flex-col items-center">
                    <Card 
                        className={cn(
                            "cursor-pointer hover:border-primary transition-all duration-200 border-2 border-transparent group-hover:scale-105",
                            (resume.template === template.id || (template.id === 'default' && !resume.template)) && "border-primary ring-2 ring-primary"
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
