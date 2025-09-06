'use client';

import type { ResumeSchema } from '@/lib/schema';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export function ExecutiveTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="p-8 bg-white h-full text-[10px] font-sans text-gray-800">
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1 space-y-6">
          {personalInfo.photoUrl && (
            <div className="flex justify-center">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  data-ai-hint="profile photo"
                />
              </div>
            </div>
          )}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3 border-b pb-1">Contact</h2>
            <div className="space-y-2 text-[9.5px]">
              {personalInfo.phone && <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-gray-500 shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>}
              {personalInfo.email && <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-gray-500 shrink-0" />
                <span className="break-all">{personalInfo.email}</span>
              </div>}
              {personalInfo.address && <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-gray-500 shrink-0" />
                <span>{personalInfo.address}</span>
              </div>}
            </div>
          </section>

          {education.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3 border-b pb-1">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-semibold text-xs">{edu.degree}</h3>
                    <p className="text-[10px]">{edu.school}</p>
                    <p className="text-[9px] text-gray-500">{edu.graduationDate}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.content && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3 border-b pb-1">Skills</h2>
              <ul className="space-y-1 list-disc list-inside text-xs">
                {skills.content.split(',').map(skill => skill.trim() && <li key={skill}>{skill.trim()}</li>)}
              </ul>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800">{personalInfo.name}</h1>
          </header>

          {summary.content && (
            <section className="mb-6">
              <h2 className="text-base font-bold uppercase tracking-wider text-blue-700 border-b-2 border-blue-700 pb-1 mb-3">
                Professional Summary
              </h2>
              <p className="text-xs leading-relaxed">{summary.content}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section className="mb-6">
              <h2 className="text-base font-bold uppercase tracking-wider text-blue-700 border-b-2 border-blue-700 pb-1 mb-3">
                Work Experience
              </h2>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-semibold text-sm">{exp.jobTitle}</h3>
                      <span className="text-[9px] text-gray-500 font-mono">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <p className="font-medium text-xs text-gray-600 mb-1">{exp.company} | {exp.location}</p>
                    <ul className="list-disc list-outside ml-3.5 space-y-1 text-xs">
                      {exp.description.split('\n').filter(line => line.trim()).map((line, i) => <li key={i}>{line.replace(/^- /, '')}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h2 className="text-base font-bold uppercase tracking-wider text-blue-700 border-b-2 border-blue-700 pb-1 mb-3">
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
    </div>
  );
}
