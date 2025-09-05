'use client';

import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';

export function DefaultTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex flex-col h-full p-8 sm:p-12 bg-white text-gray-800 font-sans">
        {/* Header */}
        <header className="flex items-center gap-8">
          {personalInfo.photoUrl && (
            <div className="relative w-28 h-28 shrink-0">
                <Image
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    className="rounded-full object-cover"
                    fill
                    data-ai-hint="profile photo"
                />
            </div>
          )}
          <div className='flex-grow'>
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground">{personalInfo.name}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground mt-2 text-xs">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3 h-3"/>
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3 h-3"/>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3"/>
                <span>{personalInfo.address}</span>
              </div>
            </div>
          </div>
        </header>

        <Separator className="my-6" />

        <div className="grid grid-cols-12 gap-x-8 gap-y-6 flex-1">
          <div className="col-span-12 space-y-6">
            {/* Summary */}
            <section>
              <h2 className="text-lg font-bold text-accent-foreground tracking-wide uppercase">Summary</h2>
              <Separator className="bg-accent my-2 h-[2px]" />
              <p className="text-sm">{summary.content}</p>
            </section>
          </div>
          <div className="col-span-8 space-y-6">
             {/* Experience */}
            <section>
              <h2 className="text-lg font-bold text-accent-foreground tracking-wide uppercase">Work Experience</h2>
              <Separator className="bg-accent my-2 h-[2px]" />
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-semibold text-base">{exp.jobTitle}</h3>
                      <span className="text-xs text-muted-foreground">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-muted-foreground">
                      <p className='font-medium'>{exp.company}</p>
                      <p className="text-xs">{exp.location}</p>
                    </div>
                    <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                      {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '')}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            {/* Projects */}
            <section>
              <h2 className="text-lg font-bold text-accent-foreground tracking-wide uppercase">Projects</h2>
              <Separator className="bg-accent my-2 h-[2px]" />
              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <h3 className="font-semibold text-base">{proj.name}</h3>
                    <p className="text-sm">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          <div className="col-span-4 space-y-6">
            {/* Education */}
            <section>
              <h2 className="text-lg font-bold text-accent-foreground tracking-wide uppercase">Education</h2>
              <Separator className="bg-accent my-2 h-[2px]" />
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-semibold text-base">{edu.school}</h3>
                    <p className="text-muted-foreground text-sm">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">{edu.graduationDate}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-lg font-bold text-accent-foreground tracking-wide uppercase">Skills</h2>
              <Separator className="bg-accent my-2 h-[2px]" />
              <div className="flex flex-wrap gap-2">
                {skills.content.split(',').map(skill => skill.trim() && (
                  <span key={skill} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full">{skill.trim()}</span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
  )
}
