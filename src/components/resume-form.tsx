'use client';

import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDebouncedCallback } from 'use-debounce';

import { resumeSchema, type ResumeSchema } from '@/lib/schema';
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

export default function ResumeForm({ children }: { children: React.ReactNode }) {
  const { resume, updateResume } = useResumeStore();

  const methods = useForm<ResumeSchema>({
    resolver: zodResolver(resumeSchema),
    defaultValues: resume,
  });

  const watchedData = methods.watch();

  const debouncedUpdate = useDebouncedCallback((data: ResumeSchema) => {
    updateResume(data);
  }, 500);

  useEffect(() => {
    debouncedUpdate(watchedData);
  }, [watchedData, debouncedUpdate]);
  
  // Sync form with store if it changes from outside (e.g. reset, template change)
  useEffect(() => {
    methods.reset(resume);
  }, [resume, methods]);

  return (
    <FormProvider {...methods}>
      <ScrollArea className="h-full no-print">
        <form className="p-4 md:p-8 space-y-8">
          <Accordion type="multiple" defaultValue={['personal-info']} className="w-full">
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
        </form>
      </ScrollArea>
      {children}
    </FormProvider>
  );
}
