'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';
import Image from 'next/image';

export function ExecutiveTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex h-full text-xs bg-white font-['Lora',serif]">
      <div className="w-1/3 bg-gray-50 p-6 flex flex-col border-r border-gray-200">
        <div className="text-center mb-8">
          {personalInfo.photoUrl && (
              <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                      src={personalInfo.photoUrl}
                      alt={personalInfo.name}
                      className="rounded-full object-cover border-4 border-white shadow-lg"
                      fill
                      data-ai-hint="profile photo"
                  />
              </div>
          )}
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">{personalInfo.name}</h1>
          <p className="text-sm text-gray-500 mt-1">Senior Executive</p>
        </div>
        
        <div className="space-y-6">
            {summary.content && <section>
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">About Me</h2>
                <p className="text-xs text-gray-700 leading-relaxed">{summary.content}</p>
            </section>}
            
            <section>
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Contact</h2>
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

            {skills.content && (
              <section>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Skills</h2>
                  <div className="flex flex-wrap gap-1.5">
                      {skills.content.split(',').map(skill => skill.trim() && (
                        <span key={skill} className="bg-gray-200 text-gray-700 text-[10px] px-2 py-1 rounded-md font-medium">{skill.trim()}</span>
                      ))}
                  </div>
              </section>
            )}

            {education.length > 0 && (
              <section>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Education</h2>
                  <div className="space-y-3">
                      {education.map((edu) => (
                      <div key={edu.id}>
                          <h3 className="font-semibold text-sm text-gray-800">{edu.school}</h3>
                          <p className="text-xs text-gray-600">{edu.degree}</p>
                          <p className="text-[10px] text-gray-500">{edu.graduationDate}</p>
                      </div>
                      ))}
                  </div>
              </section>
            )}
        </div>
      </div>
      <div className="w-2/3 p-8 flex flex-col bg-white overflow-y-auto">
        {experience.length > 0 && (
          <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 tracking-wider border-b-2 border-gray-200 pb-2 mb-4">Work Experience</h2>
              <div className="space-y-6">
                  {experience.map((exp) => (
                  <div key={exp.id}>
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-base text-gray-800">{exp.jobTitle}</h3>
                        <span className="text-xs text-gray-500 font-medium">{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <p className="font-semibold text-gray-600 text-sm mb-1.5">{exp.company} | {exp.location}</p>
                      <ul className="list-disc list-outside ml-4 text-xs space-y-1.5 text-gray-700">
                        {exp.description.split('\n').filter(line => line.trim()).map((line, i) => <li key={i}>{line.replace(/^- /, '')}</li>)}
                      </ul>
                  </div>
                  ))}
              </div>
          </section>
        )}

        {projects.length > 0 && (
          <section>
              <h2 className="text-xl font-bold text-gray-800 tracking-wider border-b-2 border-gray-200 pb-2 mb-4">Key Projects</h2>
              <div className="space-y-5">
                  {projects.map((proj) => (
                  <div key={proj.id}>
                      <h3 className="font-bold text-base text-gray-800">{proj.name}</h3>
                      <p className="text-xs text-gray-700 leading-relaxed">{proj.description}</p>
                  </div>
                  ))}
              </div>
          </section>
        )}
      </div>
    </div>
  )
}
