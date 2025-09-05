'use client';

import { useResumeStore } from '@/lib/store';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ResumePreview() {
  const { resume } = useResumeStore();
  const { personalInfo, summary, experience, education, projects, skills } = resume;

  return (
    <Card className="w-full max-w-[8.5in] aspect-[8.5/11] mx-auto shadow-2xl p-8 sm:p-12 text-sm">
      <div className="flex flex-col h-full">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground">{personalInfo.name}</h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground mt-2">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3 h-3"/>
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3"/>
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3"/>
              <span>{personalInfo.address}</span>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-6">
          <p className="text-center">{summary.content}</p>
        </section>

        <Separator className="my-6" />

        <div className="grid grid-cols-3 gap-8 flex-1">
          <div className="col-span-2 space-y-6">
             {/* Experience */}
            <section>
              <h2 className="text-xl font-bold text-accent-foreground tracking-wide">Work Experience</h2>
              <Separator className="bg-accent my-2" />
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-semibold">{exp.jobTitle}</h3>
                      <span className="text-xs text-muted-foreground">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-muted-foreground">
                      <p>{exp.company}</p>
                      <p className="text-xs">{exp.location}</p>
                    </div>
                    <ul className="mt-2 list-disc list-inside text-xs space-y-1">
                      {exp.description.split('\n').map((line, i) => line.trim() && <li key={i}>{line.replace(/^- /, '')}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            {/* Projects */}
            <section>
              <h2 className="text-xl font-bold text-accent-foreground tracking-wide">Projects</h2>
              <Separator className="bg-accent my-2" />
              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <h3 className="font-semibold">{proj.name}</h3>
                    <p className="text-xs">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          <div className="col-span-1 space-y-6">
            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-accent-foreground tracking-wide">Education</h2>
              <Separator className="bg-accent my-2" />
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-semibold">{edu.school}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">{edu.graduationDate}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xl font-bold text-accent-foreground tracking-wide">Skills</h2>
              <Separator className="bg-accent my-2" />
              <div className="flex flex-wrap gap-2">
                {skills.content.split(',').map(skill => skill.trim() && (
                  <span key={skill} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md">{skill.trim()}</span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Card>
  );
}
