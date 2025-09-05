'use client';

import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';
import Image from 'next/image';

export function ClassicTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex flex-col h-full p-8 bg-white text-gray-800 font-serif">
        <header className="text-center mb-6">
          {personalInfo.photoUrl && (
              <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                      src={personalInfo.photoUrl}
                      alt={personalInfo.name}
                      className="rounded-full object-cover"
                      fill
                      data-ai-hint="profile photo"
                  />
              </div>
          )}
          <h1 className="text-4xl font-bold tracking-wider">{personalInfo.name}</h1>
          <div className="flex items-center justify-center gap-x-6 text-gray-600 mt-2 text-xs">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-primary">
              <Mail className="w-3 h-3" />
              <span>{personalInfo.email}</span>
            </a>
            <div className="flex items-center gap-1.5">
               <Phone className="w-3 h-3" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
               <MapPin className="w-3 h-3" />
              <span>{personalInfo.address}</span>
            </div>
          </div>
        </header>

        <Separator className="mb-6 bg-gray-300" />

        <section className="mb-6">
          <h2 className="text-xl font-bold tracking-widest text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">Summary</h2>
          <p className="text-sm leading-relaxed">{summary.content}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold tracking-widest text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-semibold">{exp.jobTitle}, <span className="text-md font-normal italic text-gray-600">{exp.company}</span></h3>
                  <span className="text-sm text-gray-600 font-mono">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{exp.location}</p>
                <ul className="mt-1 list-disc list-inside text-sm space-y-1 text-gray-700">
                  {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '')}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold tracking-widest text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">Education</h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold">{edu.school}</h3>
                    <p className="text-md text-gray-600">{edu.degree}</p>
                </div>
                <p className="text-sm text-gray-600 font-mono text-right">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold tracking-widest text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">Projects</h2>
          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id}>
                <h3 className="text-lg font-semibold">{proj.name}</h3>
                <p className="text-sm">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-widest text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">Skills</h2>
          <p className="text-sm">{skills.content}</p>
        </section>
    </div>
  )
}
