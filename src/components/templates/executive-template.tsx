'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';
import Image from 'next/image';

export function ExecutiveTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex h-full text-sm bg-white font-['Lora',serif]">
      <div className="w-1/3 bg-gray-50 p-8 flex flex-col border-r border-gray-200">
        <div className="text-center mb-10">
          {personalInfo.photoUrl && (
              <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                      src={personalInfo.photoUrl}
                      alt={personalInfo.name}
                      className="rounded-full object-cover border-4 border-white shadow-lg"
                      fill
                      data-ai-hint="profile photo"
                  />
              </div>
          )}
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">{personalInfo.name}</h1>
          <p className="text-md text-gray-500 mt-1">Senior Executive</p>
        </div>
        
        <div className="space-y-8 mt-4">
            <section>
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4">About Me</h2>
                <p className="text-sm text-gray-700 leading-relaxed">{summary.content}</p>
            </section>
            
            <section>
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4">Contact</h2>
                <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-500"/>
                        <span>{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-500"/>
                        <span>{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-gray-500"/>
                        <span>{personalInfo.address}</span>
                    </div>
                </div>
            </section>

            {skills.content && (
              <section>
                  <h2 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-2 justify-start">
                      {skills.content.split(',').map(skill => skill.trim() && (
                        <span key={skill} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md font-medium">{skill.trim()}</span>
                      ))}
                  </div>
              </section>
            )}

            {education.length > 0 && (
              <section>
                  <h2 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4">Education</h2>
                  <div className="space-y-4">
                      {education.map((edu) => (
                      <div key={edu.id}>
                          <h3 className="font-semibold text-base text-gray-800">{edu.school}</h3>
                          <p className="text-sm text-gray-600">{edu.degree}</p>
                          <p className="text-xs text-gray-500">{edu.graduationDate}</p>
                      </div>
                      ))}
                  </div>
              </section>
            )}
        </div>
      </div>
      <div className="w-2/3 p-10 flex flex-col bg-white overflow-y-auto">
        {experience.length > 0 && (
          <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 tracking-wider border-b-2 border-gray-200 pb-3 mb-6">Work Experience</h2>
              <div className="space-y-8">
                  {experience.map((exp) => (
                  <div key={exp.id}>
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-lg text-gray-800">{exp.jobTitle}</h3>
                        <span className="text-sm text-gray-500 font-medium">{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <p className="font-semibold text-gray-600 text-base mb-2">{exp.company} | {exp.location}</p>
                      <ul className="list-disc list-outside ml-5 text-sm space-y-2 text-gray-700">
                        {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '')}</li>)}
                      </ul>
                  </div>
                  ))}
              </div>
          </section>
        )}

        {projects.length > 0 && (
          <section>
              <h2 className="text-2xl font-bold text-gray-800 tracking-wider border-b-2 border-gray-200 pb-3 mb-6">Key Projects</h2>
              <div className="space-y-6">
                  {projects.map((proj) => (
                  <div key={proj.id}>
                      <h3 className="font-bold text-lg text-gray-800">{proj.name}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{proj.description}</p>
                  </div>
                  ))}
              </div>
          </section>
        )}
      </div>
    </div>
  )
}
