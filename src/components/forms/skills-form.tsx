'use client';

import { useResumeStore } from '@/lib/store';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function SkillsForm() {
  const { resume, updateResume } = useResumeStore();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateResume({ ...resume, skills: { content: e.target.value } });
  };

  return (
    <div className="space-y-4 pt-4">
      <div>
        <Label htmlFor="skills-content">Skills</Label>
        <Textarea
          id="skills-content"
          placeholder="JavaScript, React, Python..."
          className="min-h-[120px]"
          value={resume.skills.content}
          onChange={handleChange}
        />
        <p className="text-sm text-muted-foreground">
          Enter your skills, separated by commas.
        </p>
      </div>
    </div>
  );
}
