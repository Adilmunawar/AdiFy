'use client';

import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';
import Image from 'next/image';

export function ClassicTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex flex-col h-full p-10 bg-white text-gray-800 font-[Georgia,serif]">
        <header className="text-center mb-8">
          {personalInfo.photoUrl && (
              <div className="relative w-32 h-32 mx-auto mb-4 border-4 border-gray-300 rounded-full shadow-md overflow-hidden">
                  <Image
                      src={personalInfo.photoUrl}
                      alt={personalInfo.name}
                      className="object-cover"
                      fill
                      data-ai-hint="profile photo"
                  />
              </div>
          )}
          <h1 className="text-4xl font-bold tracking-wider mb-2">{personalInfo.name}</h1>
          <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-1 text-gray-600 mt-3 text-xs">
            {personalInfo.email && <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-primary">
              <Mail className="w-3 h-3" />
              <span>{personalInfo.email}</span>
            </a>}
            {personalInfo.phone && <div className="flex items-center gap-1.5">
               <Phone className="w-3 h-3" />
              <span>{personalInfo.phone}</span>
            </div>}
            {personalInfo.address && <div className="flex items-center gap-1.5">
               <MapPin className="w-3 h-3" />
              <span>{personalInfo.address}</span>
            </div>}
          </div>
        </header>

        <Separator className="mb-6 bg-gray-300 h-px" />

        {summary.content && (
          <section className="mb-6">
            <h2 className="text-lg font-bold tracking-[.2em] text-center text-gray-700 uppercase pb-2 mb-3 border-b-2 border-gray-300">Summary</h2>
            <p className="text-xs text-center leading-relaxed">{summary.content}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold tracking-[.2em] text-center text-gray-700 uppercase pb-2 mb-3 border-b-2 border-gray-300">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-base font-semibold">{exp.jobTitle}</h3>
                    <span className="text-xs text-gray-600 font-mono">{exp.startDate} - {exp.endDate}</span>
                  </div>
                   <div className="flex justify-between items-baseline mb-1">
                      <span className="text-sm font-normal italic text-gray-600">{exp.company}</span>
                      <p className="text-xs text-gray-500">{exp.location}</p>
                   </div>
                  <ul className="mt-1 list-disc list-inside text-xs space-y-1 text-gray-700">
                    {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '')}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold tracking-[.2em] text-center text-gray-700 uppercase pb-2 mb-3 border-b-2 border-gray-300">Education</h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                      <h3 className="text-base font-semibold">{edu.school}</h3>
                      <p className="text-sm text-gray-600">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600 font-mono">{edu.graduationDate}</p>
                    <p className="text-xs text-gray-500">{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold tracking-[.2em] text-center text-gray-700 uppercase pb-2 mb-3 border-b-2 border-gray-300">Projects</h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <h3 className="text-base font-semibold">{proj.name}</h3>
                  <p className="text-xs text-gray-700">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.content && (
          <section>
            <h2 className="text-lg font-bold tracking-[.2em] text-center text-gray-700 uppercase pb-2 mb-3 border-b-2 border-gray-300">Skills</h2>
            <p className="text-xs text-center leading-relaxed">{skills.content}</p>
          </section>
        )}
    </div>
  )
}
