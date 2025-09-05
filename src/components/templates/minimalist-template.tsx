'use client';

import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';

export function MinimalistTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex flex-col h-full p-12 bg-white text-gray-700 font-['Inter',sans-serif]">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tighter">{personalInfo.name}</h1>
          <div className="flex items-center justify-center gap-x-5 text-gray-500 mt-4 text-xs">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-primary">
              <span>{personalInfo.email}</span>
            </a>
            <span>&bull;</span>
            <div className="flex items-center gap-2">
              <span>{personalInfo.phone}</span>
            </div>
            <span>&bull;</span>
            <div className="flex items-center gap-2">
              <span>{personalInfo.address}</span>
            </div>
          </div>
        </header>

        {summary.content && (
          <section className="mb-8">
            <p className="text-sm text-center leading-relaxed max-w-3xl mx-auto">{summary.content}</p>
          </section>
        )}
        
        <Separator className="my-2 bg-gray-200" />
        
        <div className="grid grid-cols-12 gap-x-12 mt-8">
            <div className="col-span-8 space-y-10">
                {experience.length > 0 && (
                  <section>
                    <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-5">Experience</h2>
                    <div className="space-y-6">
                      {experience.map((exp) => (
                        <div key={exp.id}>
                          <div className="flex justify-between items-baseline">
                            <h3 className="text-base font-semibold text-gray-800">{exp.jobTitle}</h3>
                            <span className="text-xs text-gray-500 font-mono">{exp.startDate} - {exp.endDate}</span>
                          </div>
                           <div className="flex justify-between items-baseline">
                              <span className="text-sm font-medium text-gray-600">{exp.company}</span>
                              <p className="text-xs text-gray-400">{exp.location}</p>
                           </div>
                          <ul className="mt-2 text-xs space-y-1 text-gray-600">
                            {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '– ')}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                
                {projects.length > 0 && (
                  <section>
                    <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-5">Projects</h2>
                    <div className="space-y-5">
                      {projects.map((proj) => (
                        <div key={proj.id}>
                          <h3 className="text-base font-semibold text-gray-800">{proj.name}</h3>
                          <p className="text-xs text-gray-600">{proj.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
            </div>

            <div className="col-span-4 space-y-10">
                {education.length > 0 && (
                  <section>
                    <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-5">Education</h2>
                    <div className="space-y-4">
                      {education.map((edu) => (
                        <div key={edu.id}>
                          <h3 className="text-base font-semibold text-gray-800">{edu.school}</h3>
                          <p className="text-sm text-gray-600">{edu.degree}</p>
                          <p className="text-xs text-gray-500">{edu.graduationDate}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                
                {skills.content && (
                  <section>
                    <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-5">Skills</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">{skills.content}</p>
                  </section>
                )}
            </div>
        </div>

    </div>
  )
}
