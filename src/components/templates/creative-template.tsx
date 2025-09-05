'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';
import Image from 'next/image';

export function CreativeTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex flex-col h-full bg-white text-gray-800 font-['Poppins',sans-serif] text-xs">
      <div className="flex-grow p-8">
        <header className="flex items-center justify-between mb-8">
            <div className="w-2/3">
                <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight">{personalInfo.name}</h1>
                <p className="text-lg font-light text-gray-600 mt-1">Creative Technologist</p>
            </div>
          {personalInfo.photoUrl && (
              <div className="relative w-28 h-28 shrink-0">
                  <div className="absolute inset-0 bg-blue-200 -translate-x-1.5 translate-y-1.5 rounded-full"></div>
                  <Image
                      src={personalInfo.photoUrl}
                      alt={personalInfo.name}
                      className="rounded-full object-cover relative z-10 border-4 border-white"
                      fill
                      data-ai-hint="profile photo"
                  />
              </div>
          )}
        </header>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 space-y-6">
            <section>
              <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3">Contact</h2>
              <div className="space-y-2 text-xs">
                {personalInfo.email && <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3 text-blue-600 shrink-0" />
                  <span className="break-all">{personalInfo.email}</span>
                </div>}
                {personalInfo.phone && <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-blue-600 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>}
                {personalInfo.address && <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-blue-600 shrink-0" />
                  <span>{personalInfo.address}</span>
                </div>}
              </div>
            </section>

            {education.length > 0 && (
                <section>
                <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3">Education</h2>
                <div className="space-y-3">
                    {education.map((edu) => (
                    <div key={edu.id}>
                        <h3 className="font-semibold text-sm">{edu.school}</h3>
                        <p className="text-xs text-gray-600">{edu.degree}</p>
                        <p className="text-xs text-gray-500">{edu.graduationDate}</p>
                    </div>
                    ))}
                </div>
                </section>
            )}

            {skills.content && (
              <section>
                <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3">Skills</h2>
                <div className="flex flex-wrap gap-1.5">
                  {skills.content.split(',').map(skill => skill.trim() && (
                    <span key={skill} className="bg-blue-100 text-blue-800 text-[10px] font-semibold px-2.5 py-1 rounded-full">{skill.trim()}</span>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="col-span-8 space-y-6">
             {summary.content && (
                <section>
                <p className="text-sm text-gray-700 leading-relaxed italic">{summary.content}</p>
              </section>
             )}

            {experience.length > 0 && (
                <section>
                <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3">Experience</h2>
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.id} className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-blue-600 before:rounded-full">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-bold text-sm">{exp.jobTitle}</h3>
                           <span className="text-[10px] text-gray-500 font-medium">{exp.startDate} - {exp.endDate}</span>
                        </div>
                         <p className="font-semibold text-gray-700 text-xs">{exp.company}</p>
                         <ul className="mt-1 list-disc list-inside text-xs space-y-1 text-gray-600">
                          {exp.description.split('\n').filter(line => line.trim()).map((line, i) => <li key={i} className="list-none">{line.replace(/^- /, '• ')}</li>)}
                        </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {projects.length > 0 && (
              <section>
                <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3">Projects</h2>
                <div className="space-y-4">
                  {projects.map((proj) => (
                    <div key={proj.id}>
                      <h3 className="font-bold text-sm">{proj.name}</h3>
                      <p className="text-xs text-gray-600">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
      <footer className="bg-blue-800 p-1 mt-auto">
        <div className="w-full h-1.5 bg-blue-200"></div>
      </footer>
    </div>
  )
}
