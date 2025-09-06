
'use client';

import type { ResumeSchema } from '@/lib/schema';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export function CorporateTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="p-8 bg-white h-full text-[10px] font-sans text-gray-800">
      <header className="flex items-center space-x-6 pb-6 border-b-2 border-gray-800 mb-6">
        {personalInfo.photoUrl && (
          <div className="relative w-28 h-28 rounded-md overflow-hidden">
            <Image
              src={personalInfo.photoUrl}
              alt={personalInfo.name}
              fill
              className="object-cover"
              data-ai-hint="profile photo"
            />
          </div>
        )}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-800">{personalInfo.name}</h1>
          <div className="flex flex-col gap-1 text-xs text-gray-600 mt-2">
            {personalInfo.email && <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span>{personalInfo.email}</span>
            </div>}
            {personalInfo.phone && <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>{personalInfo.phone}</span>
            </div>}
            {personalInfo.address && <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              <span>{personalInfo.address}</span>
            </div>}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-x-8">
        <div className="col-span-2 space-y-6">
          {summary.content && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Professional Profile</h2>
              <p className="text-xs leading-relaxed border-l-2 border-gray-300 pl-3">{summary.content}</p>
            </section>
          )}
          {experience.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Work Experience</h2>
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
        </div>
        <div className="col-span-1 space-y-6">
            {education.length > 0 && (
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Education</h2>
                    <div className="space-y-3">
                    {education.map((edu) => (
                        <div key={edu.id}>
                        <h3 className="font-semibold text-xs">{edu.degree}</h3>
                        <p className="text-[10px]">{edu.school}</p>
                        <p className="text-[9px] text-gray-500">{edu.location} | {edu.graduationDate}</p>
                        </div>
                    ))}
                    </div>
                </section>
            )}
            {skills.content && (
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-1.5">
                        {skills.content.split(',').map(skill => skill.trim() && (
                            <span key={skill} className="bg-gray-200 text-gray-700 text-[9px] px-2 py-1 rounded font-medium">{skill.trim()}</span>
                        ))}
                    </div>
                </section>
            )}
            {projects.length > 0 && (
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Projects</h2>
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
    </div>
  );
}
