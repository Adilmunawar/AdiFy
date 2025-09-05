'use client';

import { useResumeStore } from '@/lib/store';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AiRefineButton from '../ai-refine-button';

export default function SummaryForm() {
  const { resume, updateResume } = useResumeStore();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateResume({ ...resume, summary: { content: e.target.value } });
  };
  
  const setValue = (value: string) => {
    updateResume({ ...resume, summary: { content: value } });
  }

  return (
    <div className="space-y-4 pt-4">
      <div>
        <Label htmlFor="summary-content">Summary</Label>
        <div className="relative">
          <Textarea
            id="summary-content"
            placeholder="Tell us about your professional background..."
            className="min-h-[120px] pr-10"
            value={resume.summary.content}
            onChange={handleChange}
          />
          <AiRefineButton
            fieldName="summary.content"
            fieldValue={resume.summary.content}
            setValue={setValue}
            title="Refine Summary"
          />
        </div>
      </div>
    </div>
  );
}
