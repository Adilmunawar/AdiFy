
'use client';

import React from 'react';
import { useResumeStore } from '@/lib/store';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import PersonalInfoForm from './forms/personal-info-form';
import SummaryForm from './forms/summary-form';
import ExperienceForm from './forms/experience-form';
import EducationForm from './forms/education-form';
import ProjectsForm from './forms/projects-form';
import SkillsForm from './forms/skills-form';
import { ScrollArea } from './ui/scroll-area';
import TemplateSwitcher from './template-switcher';
import ThemeForm from './forms/theme-form';

export default function ResumeForm() {
    const { isTemplateSwitcherOpen, setTemplateSwitcherOpen } = useResumeStore();

  return (
    <>
      <ScrollArea className="h-full no-print">
        <div className="p-4 md:p-8 space-y-8">
          <Accordion type="multiple" defaultValue={['personal-info']} className="w-full">
            <AccordionItem value="theme">
              <AccordionTrigger className="text-xl font-bold">Theme</AccordionTrigger>
              <AccordionContent>
                <ThemeForm />
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="personal-info">
              <AccordionTrigger className="text-xl font-bold">Personal Information</AccordionTrigger>
              <AccordionContent>
                <PersonalInfoForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="summary">
              <AccordionTrigger className="text-xl font-bold">Professional Summary</AccordionTrigger>
              <AccordionContent>
                <SummaryForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="experience">
              <AccordionTrigger className="text-xl font-bold">Work Experience</AccordionTrigger>
              <AccordionContent>
                <ExperienceForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education">
              <AccordionTrigger className="text-xl font-bold">Education</AccordionTrigger>
              <AccordionContent>
                <EducationForm />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="projects">
              <AccordionTrigger className="text-xl font-bold">Projects</AccordionTrigger>
              <AccordionContent>
                <ProjectsForm />
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="skills">
              <AccordionTrigger className="text-xl font-bold">Skills</AccordionTrigger>
              <AccordionContent>
                <SkillsForm />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
      <TemplateSwitcher isOpen={isTemplateSwitcherOpen} onOpenChange={setTemplateSwitcherOpen} />
    </>
  );
}
