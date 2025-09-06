'use client';

import type { ResumeSchema } from '@/lib/schema';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export function ProfessionalTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="p-8 bg-white h-full text-[10px] font-serif text-gray-800">
      <header className="text-center mb-8 border-b-2 border-gray-300 pb-4">
        <h1 className="text-4xl font-bold tracking-widest text-gray-800 uppercase">{personalInfo.name}</h1>
      </header>

      <div className="flex justify-center gap-4 text-xs text-gray-600 mb-8">
        {personalInfo.phone && <div className="flex items-center gap-2">
          <Phone className="w-3 h-3 text-gray-500 shrink-0" />
          <span>{personalInfo.phone}</span>
        </div>}
        <span className='text-gray-300'>|</span>
        {personalInfo.email && <div className="flex items-center gap-2">
          <Mail className="w-3 h-3 text-gray-500 shrink-0" />
          <span className="break-all">{personalInfo.email}</span>
        </div>}
        <span className='text-gray-300'>|</span>
        {personalInfo.address && <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-gray-500 shrink-0" />
          <span>{personalInfo.address}</span>
        </div>}
      </div>

      <div className="space-y-8">
        {summary.content && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b pb-1 mb-3">
              Summary
            </h2>
            <p className="text-xs leading-relaxed">{summary.content}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b pb-1 mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-sm">{exp.jobTitle}</h3>
                    <p className="font-medium text-xs text-gray-600">{exp.company}</p>
                  </div>
                  <div className="flex justify-between items-baseline mb-1">
                      <p className="text-xs text-gray-500">{exp.location}</p>
                      <p className="text-[9px] text-gray-500 font-mono">{exp.startDate} - {exp.endDate}</p>
                  </div>
                  <ul className="list-disc list-outside ml-3.5 space-y-1 text-xs">
                    {exp.description.split('\n').filter(line => line.trim()).map((line, i) => <li key={i}>{line.replace(/^- /, '')}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
        
        <div className="grid grid-cols-2 gap-8">
            {education.length > 0 && (
            <section>
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b pb-1 mb-3">
                Education
                </h2>
                <div className="space-y-3">
                {education.map((edu) => (
                    <div key={edu.id}>
                    <h3 className="font-semibold text-xs">{edu.degree}</h3>
                    <p className="text-[10px]">{edu.school} | {edu.location}</p>
                    <p className="text-[9px] text-gray-500">{edu.graduationDate}</p>
                    </div>
                ))}
                </div>
            </section>
            )}

            {skills.content && (
                <section>
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b pb-1 mb-3">
                    Skills
                </h2>
                <div className="flex flex-wrap gap-1.5">
                    {skills.content.split(',').map(skill => skill.trim() && (
                        <span key={skill} className="bg-gray-200 text-gray-700 text-[9px] px-2 py-1 rounded font-medium">{skill.trim()}</span>
                    ))}
                </div>
                </section>
            )}
        </div>


        {projects.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <h3 className="font-semibold text-sm">{proj.name}</h3>
                  <p className="text-xs">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
