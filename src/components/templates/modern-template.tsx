'use client';

import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeSchema } from '@/lib/schema';
import Image from 'next/image';

export function ModernTemplate({ resume }: { resume: ResumeSchema }) {
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <div className="flex h-full text-sm font-serif bg-white">
        <div className="w-1/3 bg-gray-50 p-6 flex flex-col items-center text-center">
            {personalInfo.photoUrl && (
                <div className="relative w-32 h-32 mb-6">
                    <Image
                        src={personalInfo.photoUrl}
                        alt={personalInfo.name}
                        className="rounded-full object-cover shadow-md"
                        fill
                        data-ai-hint="profile photo"
                    />
                </div>
            )}
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-800">{personalInfo.name}</h1>
            </header>
            
            <div className="space-y-6 w-full">
                 {/* Contact Info */}
                <section>
                    <h2 className="text-base font-bold text-gray-700 tracking-wide uppercase">Contact</h2>
                    <Separator className="bg-gray-300 my-2" />
                    <div className="space-y-2 text-xs text-gray-600">
                        <div className="flex items-center justify-center gap-2">
                            <Mail className="w-3 h-3"/>
                            <span>{personalInfo.email}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Phone className="w-3 h-3"/>
                            <span>{personalInfo.phone}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <MapPin className="w-3 h-3"/>
                            <span>{personalInfo.address}</span>
                        </div>
                    </div>
                </section>

                 {/* Education */}
                <section>
                    <h2 className="text-base font-bold text-gray-700 tracking-wide uppercase">Education</h2>
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
                    <h2 className="text-base font-bold text-gray-700 tracking-wide uppercase">Skills</h2>
                    <Separator className="bg-gray-300 my-2" />
                    <div className="flex flex-wrap gap-1.5 justify-center">
                        {skills.content.split(',').map(skill => skill.trim() && (
                        <span key={skill} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">{skill.trim()}</span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
        <div className="w-2/3 p-8 flex flex-col bg-white">
            <section className="mb-6">
                <h2 className="text-lg font-bold text-gray-700 tracking-wide uppercase border-b-2 border-gray-200 pb-1 mb-3">Professional Summary</h2>
                <p className="text-sm text-gray-700 leading-relaxed">{summary.content}</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-lg font-bold text-gray-700 tracking-wide uppercase border-b-2 border-gray-200 pb-1 mb-3">Work Experience</h2>
                <div className="space-y-4">
                    {experience.map((exp) => (
                    <div key={exp.id}>
                        <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold text-base">{exp.jobTitle} at {exp.company}</h3>
                        <span className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-1">{exp.location}</p>
                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                        {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '')}</li>)}
                        </ul>
                    </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-lg font-bold text-gray-700 tracking-wide uppercase border-b-2 border-gray-200 pb-1 mb-3">Projects</h2>
                <div className="space-y-3">
                    {projects.map((proj) => (
                    <div key={proj.id}>
                        <h3 className="font-semibold text-base">{proj.name}</h3>
                        <p className="text-sm text-gray-700">{proj.description}</p>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
  )
}
