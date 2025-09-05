'use client';

import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';
import Image from 'next/image';

export function ModernTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex h-full text-xs bg-background">
        <div className="w-1/3 bg-gray-800 text-white p-6 flex flex-col">
            <div className="flex flex-col items-center text-center">
              {personalInfo.photoUrl && (
                  <div className="relative w-32 h-32 mb-4">
                      <Image
                          src={personalInfo.photoUrl}
                          alt={personalInfo.name}
                          className="rounded-full object-cover ring-4 ring-primary"
                          fill
                          data-ai-hint="profile photo"
                      />
                  </div>
              )}
              <header className="mb-6">
                  <h1 className="text-2xl font-bold tracking-tight text-white">{personalInfo.name}</h1>
              </header>
            </div>
            
            <div className="space-y-6 w-full mt-auto">
                <section>
                    <h2 className="text-xs font-semibold tracking-widest uppercase text-primary">Contact</h2>
                    <Separator className="bg-primary/50 my-1.5" />
                    <div className="space-y-2 text-[11px] text-gray-300">
                        {personalInfo.email && <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 text-primary shrink-0"/>
                            <span className="break-all">{personalInfo.email}</span>
                        </div>}
                        {personalInfo.phone && <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 text-primary shrink-0"/>
                            <span>{personalInfo.phone}</span>
                        </div>}
                        {personalInfo.address && <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-primary shrink-0"/>
                            <span>{personalInfo.address}</span>
                        </div>}
                    </div>
                </section>

                {education.length > 0 && <section>
                    <h2 className="text-xs font-semibold tracking-widest uppercase text-primary">Education</h2>
                    <Separator className="bg-primary/50 my-1.5" />
                    <div className="space-y-3">
                        {education.map((edu) => (
                        <div key={edu.id}>
                            <h3 className="font-semibold text-sm text-white">{edu.school}</h3>
                            <p className="text-[11px] text-gray-300">{edu.degree}</p>
                            <p className="text-[10px] text-gray-400">{edu.graduationDate}</p>
                        </div>
                        ))}
                    </div>
                </section>}

                {skills.content && <section>
                    <h2 className="text-xs font-semibold tracking-widest uppercase text-primary">Skills</h2>
                    <Separator className="bg-primary/50 my-1.5" />
                    <div className="flex flex-wrap gap-1.5">
                        {skills.content.split(',').map(skill => skill.trim() && (
                          <span key={skill} className="bg-gray-700 text-gray-200 text-[10px] px-2 py-0.5 rounded">{skill.trim()}</span>
                        ))}
                    </div>
                </section>}
            </div>
        </div>
        <div className="w-2/3 p-8 flex flex-col bg-white overflow-y-auto">
            {summary.content && <section className="mb-6">
                <h2 className="text-lg font-bold text-gray-700 tracking-wide uppercase border-b-2 border-primary/50 pb-1.5 mb-3">Professional Summary</h2>
                <p className="text-xs text-gray-700 leading-relaxed">{summary.content}</p>
            </section>}
            
            {experience.length > 0 && <section className="mb-6">
                <h2 className="text-lg font-bold text-gray-700 tracking-wide uppercase border-b-2 border-primary/50 pb-1.5 mb-3">Work Experience</h2>
                <div className="space-y-5">
                    {experience.map((exp) => (
                    <div key={exp.id}>
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-semibold text-sm text-gray-800">{exp.jobTitle} at {exp.company}</h3>
                          <span className="text-[10px] text-gray-500 font-mono">{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-1.5">{exp.location}</p>
                        <ul className="list-disc list-outside ml-3.5 text-xs space-y-1 text-gray-700 marker:text-primary">
                          {exp.description.split('\n').filter(line => line.trim()).map((line, i) => <li key={i}>{line.replace(/^- /, '')}</li>)}
                        </ul>
                    </div>
                    ))}
                </div>
            </section>}

            {projects.length > 0 && <section>
                <h2 className="text-lg font-bold text-gray-700 tracking-wide uppercase border-b-2 border-primary/50 pb-1.5 mb-3">Projects</h2>
                <div className="space-y-4">
                    {projects.map((proj) => (
                    <div key={proj.id}>
                        <h3 className="font-semibold text-sm text-gray-800">{proj.name}</h3>
                        <p className="text-xs text-gray-700">{proj.description}</p>
                    </div>
                    ))}
                </div>
            </section>}
        </div>
    </div>
  )
}
