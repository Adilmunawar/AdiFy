'use client';

import { Separator } from '@/components/ui/separator';
import type { ResumeSchema } from '@/lib/schema';

export function MinimalistTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex flex-col h-full p-10 bg-white text-gray-700 font-['Inter',sans-serif] text-xs">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-tighter text-gray-800">{personalInfo.name}</h1>
          <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1 text-gray-500 mt-3 text-[10px] uppercase tracking-widest">
            {personalInfo.email && <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">
              <span>{personalInfo.email}</span>
            </a>}
            {personalInfo.phone && <>
                <span className='text-gray-300'>&bull;</span>
                <div>{personalInfo.phone}</div>
            </>}
            {personalInfo.address && <>
                <span className='text-gray-300'>&bull;</span>
                <div>{personalInfo.address}</div>
            </>}
          </div>
        </header>

        {summary.content && (
          <section className="mb-6">
            <p className="text-xs text-center leading-relaxed max-w-3xl mx-auto">{summary.content}</p>
          </section>
        )}
        
        <Separator className="my-2 bg-gray-200" />
        
        <div className="grid grid-cols-12 gap-x-10 mt-6">
            <div className="col-span-8 space-y-8">
                {experience.length > 0 && (
                  <section>
                    <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">Experience</h2>
                    <div className="space-y-5">
                      {experience.map((exp) => (
                        <div key={exp.id}>
                          <div className="flex justify-between items-baseline">
                            <h3 className="text-sm font-semibold text-gray-800">{exp.jobTitle}</h3>
                            <span className="text-[10px] text-gray-500 font-mono">{exp.startDate} - {exp.endDate}</span>
                          </div>
                           <div className="flex justify-between items-baseline">
                              <span className="text-xs font-medium text-gray-600">{exp.company}</span>
                              <p className="text-[10px] text-gray-400">{exp.location}</p>
                           </div>
                          <ul className="mt-1.5 text-xs space-y-1 text-gray-600">
                            {exp.description.split('\n').filter(line => line.trim()).map((line, i) => <li key={i}>{line.replace(/^- /, '– ')}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                
                {projects.length > 0 && (
                  <section>
                    <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">Projects</h2>
                    <div className="space-y-4">
                      {projects.map((proj) => (
                        <div key={proj.id}>
                          <h3 className="text-sm font-semibold text-gray-800">{proj.name}</h3>
                          <p className="text-xs text-gray-600">{proj.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
            </div>

            <div className="col-span-4 space-y-8">
                {education.length > 0 && (
                  <section>
                    <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">Education</h2>
                    <div className="space-y-3">
                      {education.map((edu) => (
                        <div key={edu.id}>
                          <h3 className="text-sm font-semibold text-gray-800">{edu.school}</h3>
                          <p className="text-xs text-gray-600">{edu.degree}</p>
                          <p className="text-[10px] text-gray-500">{edu.graduationDate}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                
                {skills.content && (
                  <section>
                    <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">Skills</h2>
                    <p className="text-xs text-gray-600 leading-relaxed">{skills.content}</p>
                  </section>
                )}
            </div>
        </div>

    </div>
  )
}
