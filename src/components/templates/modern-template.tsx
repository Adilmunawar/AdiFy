'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';
import Image from 'next/image';
import { Separator } from '../ui/separator';

export function ModernTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex h-full text-[10px] bg-white font-sans">
      {/* Left Column */}
      <div className="w-1/3 bg-gray-50 p-6 flex flex-col space-y-6">
        {personalInfo.photoUrl && (
          <div className="flex justify-center">
            <div className="relative w-28 h-28">
                <Image
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    className="rounded-full object-cover border-4 border-white shadow-md"
                    fill
                    data-ai-hint="profile photo"
                />
            </div>
          </div>
        )}
        
        <section>
            <h2 className="text-sm font-bold text-gray-700 tracking-wider uppercase mb-3">Contact</h2>
            <div className="space-y-2 text-xs text-gray-600">
                {personalInfo.email && <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 text-gray-500 shrink-0"/>
                    <span className="break-all">{personalInfo.email}</span>
                </div>}
                {personalInfo.phone && <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-gray-500 shrink-0"/>
                    <span>{personalInfo.phone}</span>
                </div>}
                {personalInfo.address && <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-gray-500 shrink-0"/>
                    <span>{personalInfo.address}</span>
                </div>}
            </div>
        </section>

        {education.length > 0 && (
          <section>
              <h2 className="text-sm font-bold text-gray-700 tracking-wider uppercase mb-3">Education</h2>
              <div className="space-y-4">
                  {education.map((edu) => (
                  <div key={edu.id}>
                      <h3 className="font-semibold text-xs text-gray-800">{edu.school}</h3>
                      <p className="text-[11px] text-gray-600">{edu.degree}</p>
                      <p className="text-[10px] text-gray-500">{edu.graduationDate}</p>
                  </div>
                  ))}
              </div>
          </section>
        )}

        {skills.content && (
          <section>
              <h2 className="text-sm font-bold text-gray-700 tracking-wider uppercase mb-3">Skills</h2>
              <div className="flex flex-wrap gap-1.5">
                  {skills.content.split(',').map(skill => skill.trim() && (
                    <span key={skill} className="bg-gray-200 text-gray-700 text-[9px] px-2 py-1 rounded-md font-medium">{skill.trim()}</span>
                  ))}
              </div>
          </section>
        )}
      </div>
      
      {/* Right Column */}
      <div className="w-2/3 p-8 flex flex-col bg-white">
        <header className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">{personalInfo.name}</h1>
        </header>

        {summary.content && <section className="mb-6">
            <h2 className="text-base font-bold text-gray-700 tracking-wider uppercase border-b-2 border-gray-200 pb-2 mb-3">Summary</h2>
            <p className="text-xs text-gray-700 leading-relaxed">{summary.content}</p>
        </section>}
        
        {experience.length > 0 && <section className="mb-6">
            <h2 className="text-base font-bold text-gray-700 tracking-wider uppercase border-b-2 border-gray-200 pb-2 mb-3">Experience</h2>
            <div className="space-y-5">
                {experience.map((exp) => (
                <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-semibold text-sm text-gray-800">{exp.jobTitle}</h3>
                      <span className="text-[10px] text-gray-500 font-mono">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <p className="font-medium text-xs text-gray-600 mb-1.5">{exp.company} | {exp.location}</p>
                    <ul className="list-disc list-outside ml-3.5 text-xs space-y-1 text-gray-600">
                      {exp.description.split('\n').filter(line => line.trim()).map((line, i) => <li key={i}>{line.replace(/^- /, '')}</li>)}
                    </ul>
                </div>
                ))}
            </div>
        </section>}

        {projects.length > 0 && <section>
            <h2 className="text-base font-bold text-gray-700 tracking-wider uppercase border-b-2 border-gray-200 pb-2 mb-3">Projects</h2>
            <div className="space-y-4">
                {projects.map((proj) => (
                <div key={proj.id}>
                    <h3 className="font-semibold text-sm text-gray-800">{proj.name}</h3>
                    <p className="text-xs text-gray-600">{proj.description}</p>
                </div>
                ))}
            </div>
        </section>}
      </div>
    </div>
  )
}
