'use client';

import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';

export function DefaultTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex flex-col h-full p-8 bg-white text-gray-800 font-sans text-xs">
        {/* Header */}
        <header className="flex items-center gap-6 mb-6">
          {personalInfo.photoUrl && (
            <div className="relative w-28 h-28 shrink-0">
                <Image
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    className="rounded-full object-cover border-4 border-gray-100 shadow-md"
                    fill
                    data-ai-hint="profile photo"
                />
            </div>
          )}
          <div className='flex-grow'>
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground">{personalInfo.name}</h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground mt-2 text-[11px]">
              {personalInfo.email && <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-primary">
                <Mail className="w-3 h-3"/>
                <span>{personalInfo.email}</span>
              </a>}
              {personalInfo.phone && <div className="flex items-center gap-1.5">
                <Phone className="w-3 h-3"/>
                <span>{personalInfo.phone}</span>
              </div>}
              {personalInfo.address && <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3"/>
                <span>{personalInfo.address}</span>
              </div>}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-x-8 gap-y-6 flex-1">
          <div className="col-span-12 space-y-4">
            {/* Summary */}
            {summary.content && <section>
              <h2 className="text-sm font-bold text-accent-foreground tracking-wide uppercase">Summary</h2>
              <Separator className="bg-accent my-1.5 h-[1.5px]" />
              <p className="text-xs leading-relaxed">{summary.content}</p>
            </section>}
          </div>
          <div className="col-span-8 space-y-6">
             {/* Experience */}
            {experience.length > 0 && <section>
              <h2 className="text-sm font-bold text-accent-foreground tracking-wide uppercase">Work Experience</h2>
              <Separator className="bg-accent my-1.5 h-[1.5px]" />
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-semibold text-sm">{exp.jobTitle}</h3>
                      <span className="text-[10px] text-muted-foreground">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-muted-foreground">
                      <p className='font-medium text-xs'>{exp.company}</p>
                      <p className="text-[10px]">{exp.location}</p>
                    </div>
                    <ul className="mt-1 list-disc list-inside text-xs space-y-1 marker:text-accent">
                      {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '')}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>}
            {/* Projects */}
            {projects.length > 0 && <section>
              <h2 className="text-sm font-bold text-accent-foreground tracking-wide uppercase">Projects</h2>
              <Separator className="bg-accent my-1.5 h-[1.5px]" />
              <div className="space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <h3 className="font-semibold text-sm">{proj.name}</h3>
                    <p className="text-xs">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>}
          </div>
          
          <div className="col-span-4 space-y-6">
            {/* Education */}
            {education.length > 0 && <section>
              <h2 className="text-sm font-bold text-accent-foreground tracking-wide uppercase">Education</h2>
              <Separator className="bg-accent my-1.5 h-[1.5px]" />
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-semibold text-sm">{edu.school}</h3>
                    <p className="text-muted-foreground text-xs">{edu.degree}</p>
                    <p className="text-[10px] text-muted-foreground">{edu.graduationDate}</p>
                  </div>
                ))}
              </div>
            </section>}

            {/* Skills */}
            {skills.content && <section>
              <h2 className="text-sm font-bold text-accent-foreground tracking-wide uppercase">Skills</h2>
              <Separator className="bg-accent my-1.5 h-[1.5px]" />
              <div className="flex flex-wrap gap-1.5">
                {skills.content.split(',').map(skill => skill.trim() && (
                  <span key={skill} className="bg-secondary text-secondary-foreground text-[10px] font-medium px-2 py-0.5 rounded">{skill.trim()}</span>
                ))}
              </div>
            </section>}
          </div>
        </div>
      </div>
  )
}
