
'use client';

import type { ResumeSchema } from '@/lib/schema';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

export function TechnicalTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="p-8 bg-white h-full text-[10px] font-mono text-gray-800">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">{personalInfo.name}</h1>
        <div className="flex justify-center gap-x-4 gap-y-1 text-xs text-gray-600 mt-2 flex-wrap">
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
      </header>

      <div className="space-y-6">
        {summary.content && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Summary</h2>
            <p className="text-xs leading-relaxed">{summary.content}</p>
          </section>
        )}

        {skills.content && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Technical Skills</h2>
            <div className="text-xs leading-relaxed">
                {skills.content}
            </div>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-sm">{exp.jobTitle}</h3>
                    <span className="text-[9px] text-gray-500">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="font-medium text-xs text-gray-600">{exp.company}</p>
                    <p className="text-xs text-gray-500">{exp.location}</p>
                  </div>
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
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Projects</h2>
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

        {education.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Education</h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                   <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-sm">{edu.degree}</h3>
                    <p className="text-[9px] text-gray-500">{edu.graduationDate}</p>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <p className="font-medium text-xs text-gray-600">{edu.school}</p>
                    <p className="text-xs text-gray-500">{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
