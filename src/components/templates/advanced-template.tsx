
'use client';

import type { ResumeSchema } from '@/lib/schema';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export function AdvancedTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;
  const primaryColor = 'text-blue-600';

  return (
    <div className="flex h-full font-sans">
      {/* Left Column */}
      <div className="w-1/3 bg-gray-100 p-8 space-y-6">
        {personalInfo.photoUrl && (
          <div className="flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg">
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
          <h2 className={`text-sm font-bold uppercase tracking-wider ${primaryColor} mb-3`}>Contact</h2>
          <div className="space-y-2 text-[10px]">
            {personalInfo.email && <div className="flex items-start gap-2">
              <Mail className="w-3 h-3 text-gray-500 shrink-0 mt-0.5" />
              <span className="break-all">{personalInfo.email}</span>
            </div>}
            {personalInfo.phone && <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-gray-500 shrink-0" />
              <span>{personalInfo.phone}</span>
            </div>}
            {personalInfo.address && <div className="flex items-start gap-2">
              <MapPin className="w-3 h-3 text-gray-500 shrink-0 mt-0.5" />
              <span>{personalInfo.address}</span>
            </div>}
          </div>
        </section>

        {education.length > 0 && (
          <section>
            <h2 className={`text-sm font-bold uppercase tracking-wider ${primaryColor} mb-3`}>Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-semibold text-xs">{edu.degree}</h3>
                  <p className="text-[10px]">{edu.school}</p>
                  <p className="text-[9px] text-gray-500">{edu.location}</p>
                  <p className="text-[9px] text-gray-500">{edu.graduationDate}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.content && (
          <section>
            <h2 className={`text-sm font-bold uppercase tracking-wider ${primaryColor} mb-3`}>Skills</h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.content.split(',').map(skill => skill.trim() && (
                <span key={skill} className="bg-blue-100 text-blue-800 text-[9px] px-2 py-1 rounded-full font-medium">{skill.trim()}</span>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Right Column */}
      <div className="w-2/3 p-8 bg-white text-[10px] text-gray-700">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-800">{personalInfo.name}</h1>
        </header>

        {summary.content && (
          <section className="mb-6">
            <h2 className={`text-base font-bold uppercase tracking-wider ${primaryColor} border-b-2 border-blue-600 pb-1 mb-3`}>
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed">{summary.content}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mb-6">
            <h2 className={`text-base font-bold uppercase tracking-wider ${primaryColor} border-b-2 border-blue-600 pb-1 mb-3`}>
              Work Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-sm">{exp.jobTitle}</h3>
                    <p className="text-[9px] text-gray-500 font-mono">{exp.startDate} - {exp.endDate}</p>
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
            <h2 className={`text-base font-bold uppercase tracking-wider ${primaryColor} border-b-2 border-blue-600 pb-1 mb-3`}>
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

