'use client';

import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';
import Image from 'next/image';

export function ModernTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex h-full text-sm bg-background">
        <div className="w-1/3 bg-gray-800 text-white p-8 flex flex-col">
            <div className="flex flex-col items-center text-center">
              {personalInfo.photoUrl && (
                  <div className="relative w-36 h-36 mb-6">
                      <Image
                          src={personalInfo.photoUrl}
                          alt={personalInfo.name}
                          className="rounded-full object-cover ring-4 ring-gray-700"
                          fill
                          data-ai-hint="profile photo"
                      />
                  </div>
              )}
              <header className="text-center mb-8">
                  <h1 className="text-3xl font-bold tracking-tight text-white">{personalInfo.name}</h1>
              </header>
            </div>
            
            <div className="space-y-8 w-full mt-auto">
                 {/* Contact Info */}
                <section>
                    <h2 className="text-base font-semibold tracking-widest uppercase text-gray-300">Contact</h2>
                    <Separator className="bg-gray-600 my-2" />
                    <div className="space-y-2 text-xs text-gray-300">
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-primary"/>
                            <span>{personalInfo.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-primary"/>
                            <span>{personalInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-primary"/>
                            <span>{personalInfo.address}</span>
                        </div>
                    </div>
                </section>

                 {/* Education */}
                <section>
                    <h2 className="text-base font-semibold tracking-widest uppercase text-gray-300">Education</h2>
                    <Separator className="bg-gray-600 my-2" />
                    <div className="space-y-4">
                        {education.map((edu) => (
                        <div key={edu.id}>
                            <h3 className="font-semibold text-sm text-white">{edu.school}</h3>
                            <p className="text-xs text-gray-300">{edu.degree}</p>
                            <p className="text-xs text-gray-400">{edu.graduationDate}</p>
                        </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="text-base font-semibold tracking-widest uppercase text-gray-300">Skills</h2>
                    <Separator className="bg-gray-600 my-2" />
                    <div className="flex flex-wrap gap-2 justify-start">
                        {skills.content.split(',').map(skill => skill.trim() && (
                          <span key={skill} className="bg-gray-700 text-gray-200 text-xs px-2.5 py-1 rounded">{skill.trim()}</span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
        <div className="w-2/3 p-8 flex flex-col bg-white overflow-y-auto">
            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-700 tracking-wide uppercase border-b-2 border-gray-200 pb-2 mb-4">Professional Summary</h2>
                <p className="text-sm text-gray-700 leading-relaxed">{summary.content}</p>
            </section>
            
            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-700 tracking-wide uppercase border-b-2 border-gray-200 pb-2 mb-4">Work Experience</h2>
                <div className="space-y-6">
                    {experience.map((exp) => (
                    <div key={exp.id}>
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-semibold text-base text-gray-800">{exp.jobTitle} at {exp.company}</h3>
                          <span className="text-xs text-gray-500 font-mono">{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{exp.location}</p>
                        <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-gray-700">
                          {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '')}</li>)}
                        </ul>
                    </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-700 tracking-wide uppercase border-b-2 border-gray-200 pb-2 mb-4">Projects</h2>
                <div className="space-y-5">
                    {projects.map((proj) => (
                    <div key={proj.id}>
                        <h3 className="font-semibold text-base text-gray-800">{proj.name}</h3>
                        <p className="text-sm text-gray-700">{proj.description}</p>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
  )
}
