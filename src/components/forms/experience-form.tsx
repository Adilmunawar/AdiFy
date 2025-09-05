
'use client';

import { useResumeStore } from '@/lib/store';
import { PlusCircle, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AiRefineButton from '../ai-refine-button';
import type { experienceSchema } from '@/lib/schema';
import type { z } from 'zod';

type Experience = z.infer<typeof experienceSchema>;

const getUUID = () => {
    if (typeof window !== 'undefined' && window.crypto) {
      return window.crypto.randomUUID();
    }
    // Fallback for non-browser environments
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export default function ExperienceForm() {
  const { resume, updateResume } = useResumeStore();
  const { experience } = resume;

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newExperience = [...experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    updateResume({ ...resume, experience: newExperience });
  };
  
  const setValue = (index: number, value: string) => {
    const newExperience = [...experience];
    newExperience[index] = { ...newExperience[index], description: value };
    updateResume({ ...resume, experience: newExperience });
  }

  const addExperience = () => {
    const newExperience = [...experience, { id: getUUID(), jobTitle: '', company: '', location: '', startDate: '', endDate: '', description: '' }];
    updateResume({ ...resume, experience: newExperience });
  };

  const removeExperience = (index: number) => {
    const newExperience = experience.filter((_, i) => i !== index);
    updateResume({ ...resume, experience: newExperience });
  };

  return (
    <div className="space-y-4 pt-4">
      {experience.map((item, index) => (
        <Card key={item.id} className="relative">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
            onClick={() => removeExperience(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <CardContent className="pt-6 space-y-4">
            <div>
              <Label htmlFor={`experience.${index}.jobTitle`}>Job Title</Label>
              <Input
                id={`experience.${index}.jobTitle`}
                name="jobTitle"
                placeholder="Senior Software Engineer"
                value={item.jobTitle}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
             <div>
              <Label htmlFor={`experience.${index}.company`}>Company</Label>
              <Input
                id={`experience.${index}.company`}
                name="company"
                placeholder="Tech Solutions Inc."
                value={item.company}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor={`experience.${index}.location`}>Location</Label>
                <Input
                  id={`experience.${index}.location`}
                  name="location"
                  placeholder="San Francisco, CA"
                  value={item.location}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div>
                <Label htmlFor={`experience.${index}.startDate`}>Start Date</Label>
                <Input
                  id={`experience.${index}.startDate`}
                  name="startDate"
                  placeholder="Jan 2020"
                  value={item.startDate}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div>
                <Label htmlFor={`experience.${index}.endDate`}>End Date</Label>
                <Input
                  id={`experience.${index}.endDate`}
                  name="endDate"
                  placeholder="Present"
                  value={item.endDate}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor={`experience.${index}.description`}>Description</Label>
              <div className="relative">
                <Textarea
                  id={`experience.${index}.description`}
                  name="description"
                  placeholder="Describe your responsibilities and achievements..."
                  className="min-h-[120px] pr-10"
                  value={item.description}
                  onChange={(e) => handleChange(index, e)}
                />
                <AiRefineButton
                  fieldName={`experience.${index}.description`}
                  fieldValue={item.description}
                  setValue={(value) => setValue(index, value)}
                  title="Refine Job Description"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addExperience}
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add Experience
      </Button>
    </div>
  );
}
