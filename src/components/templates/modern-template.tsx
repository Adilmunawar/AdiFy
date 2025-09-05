'use client';

import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';

export function ModernTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex h-full text-sm">
        <div className="w-1/3 bg-gray-100 p-8 flex flex-col">
            <header className="text-left mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-800">{personalInfo.name}</h1>
            </header>
            
            <div className="space-y-6">
                 {/* Contact Info */}
                <section>
                    <h2 className="text-lg font-bold text-gray-700 tracking-wide uppercase">Contact</h2>
                    <Separator className="bg-gray-300 my-2" />
                    <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 text-gray-600"/>
                            <span>{personalInfo.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 text-gray-600"/>
                            <span>{personalInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-gray-600"/>
                            <span>{personalInfo.address}</span>
                        </div>
                    </div>
                </section>

                 {/* Education */}
                <section>
                    <h2 className="text-lg font-bold text-gray-700 tracking-wide uppercase">Education</h2>
                    <Separator className="bg-gray-300 my-2" />
                    <div className="space-y-3">
                        {education.map((edu) => (
                        <div key={edu.id}>
                            <h3 className="font-semibold text-sm">{edu.school}</h3>
                            <p className="text-xs text-gray-600">{edu.degree}</p>
                            <p className="text-xs text-gray-500">{edu.graduationDate}</p>
                        </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="text-lg font-bold text-gray-700 tracking-wide uppercase">Skills</h2>
                    <Separator className="bg-gray-300 my-2" />
                    <div className="flex flex-wrap gap-1.5">
                        {skills.content.split(',').map(skill => skill.trim() && (
                        <span key={skill} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-sm">{skill.trim()}</span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
        <div className="w-2/3 p-8 flex flex-col bg-white">
            <section className="mb-6">
                <h2 className="text-lg font-bold text-gray-700 tracking-wide uppercase border-b-2 border-gray-300 pb-1 mb-3">Professional Summary</h2>
                <p className="text-xs">{summary.content}</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-lg font-bold text-gray-700 tracking-wide uppercase border-b-2 border-gray-300 pb-1 mb-3">Work Experience</h2>
                <div className="space-y-4">
                    {experience.map((exp) => (
                    <div key={exp.id}>
                        <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold text-sm">{exp.jobTitle} at {exp.company}</h3>
                        <span className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-1">{exp.location}</p>
                        <ul className="list-disc list-inside text-xs space-y-1">
                        {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '')}</li>)}
                        </ul>
                    </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-lg font-bold text-gray-700 tracking-wide uppercase border-b-2 border-gray-300 pb-1 mb-3">Projects</h2>
                <div className="space-y-3">
                    {projects.map((proj) => (
                    <div key={proj.id}>
                        <h3 className="font-semibold text-sm">{proj.name}</h3>
                        <p className="text-xs">{proj.description}</p>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
  )
}
