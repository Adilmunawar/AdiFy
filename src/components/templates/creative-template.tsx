'use client';

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';
import Image from 'next/image';

export function CreativeTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex flex-col h-full bg-white text-gray-800 font-['Poppins',sans-serif]">
      <div className="flex-grow p-10">
        <header className="flex items-center justify-between mb-10">
            <div className="w-2/3">
                <h1 className="text-5xl font-extrabold text-blue-800 tracking-tight">{personalInfo.name}</h1>
                <p className="text-xl font-light text-gray-600 mt-2">Creative Technologist</p>
            </div>
          {personalInfo.photoUrl && (
              <div className="relative w-32 h-32">
                  <div className="absolute inset-0 bg-blue-200 -translate-x-2 translate-y-2 rounded-full"></div>
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

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4 space-y-8">
            <section>
              <h2 className="text-lg font-bold text-blue-800 uppercase tracking-wider mb-3">Contact</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{personalInfo.address}</span>
                </div>
              </div>
            </section>

            {education.length > 0 && (
                <section>
                <h2 className="text-lg font-bold text-blue-800 uppercase tracking-wider mb-3">Education</h2>
                <div className="space-y-4">
                    {education.map((edu) => (
                    <div key={edu.id}>
                        <h3 className="font-semibold text-base">{edu.school}</h3>
                        <p className="text-sm text-gray-600">{edu.degree}</p>
                        <p className="text-xs text-gray-500">{edu.graduationDate}</p>
                    </div>
                    ))}
                </div>
                </section>
            )}

            {skills.content && (
              <section>
                <h2 className="text-lg font-bold text-blue-800 uppercase tracking-wider mb-3">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.content.split(',').map(skill => skill.trim() && (
                    <span key={skill} className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{skill.trim()}</span>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="col-span-8 space-y-8">
             {summary.content && (
                <section>
                <p className="text-base text-gray-700 leading-relaxed italic">{summary.content}</p>
              </section>
             )}

            {experience.length > 0 && (
                <section>
                <h2 className="text-lg font-bold text-blue-800 uppercase tracking-wider mb-4">Experience</h2>
                <div className="space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.id} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-bold text-base">{exp.jobTitle}</h3>
                           <span className="text-xs text-gray-500 font-medium">{exp.startDate} - {exp.endDate}</span>
                        </div>
                         <p className="font-semibold text-gray-700 text-sm">{exp.company}</p>
                         <ul className="mt-2 list-disc list-inside text-sm space-y-1 text-gray-600">
                          {exp.description.split('\n').map((line, i) => line.trim() && <li key={i} className="list-none">{line.replace(/^- /, '• ')}</li>)}
                        </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {projects.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-blue-800 uppercase tracking-wider mb-4">Projects</h2>
                <div className="space-y-5">
                  {projects.map((proj) => (
                    <div key={proj.id}>
                      <h3 className="font-bold text-base">{proj.name}</h3>
                      <p className="text-sm text-gray-600">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
      <footer className="bg-blue-800 p-2 mt-auto">
        <div className="w-full h-2 bg-blue-200"></div>
      </footer>
    </div>
  )
}
