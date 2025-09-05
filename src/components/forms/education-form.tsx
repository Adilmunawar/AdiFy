
'use client';

import { useResumeStore } from '@/lib/store';
import { PlusCircle, Trash2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function EducationForm() {
  const { resume, updateResume } = useResumeStore();
  const { education } = resume;

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    updateResume({ ...resume, education: newEducation });
  };

  const addEducation = () => {
    const newEducation = [...education, { id: uuidv4(), degree: '', school: '', location: '', graduationDate: '' }];
    updateResume({ ...resume, education: newEducation });
  };

  const removeEducation = (index: number) => {
    const newEducation = education.filter((_, i) => i !== index);
    updateResume({ ...resume, education: newEducation });
  };

  return (
    <div className="space-y-4 pt-4">
      {education.map((item, index) => (
        <Card key={item.id} className="relative">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
            onClick={() => removeEducation(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <CardContent className="pt-6 space-y-4">
            <div>
              <Label htmlFor={`education.${index}.degree`}>Degree / Certificate</Label>
              <Input
                id={`education.${index}.degree`}
                name="degree"
                placeholder="M.S. in Computer Science"
                value={item.degree}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div>
              <Label htmlFor={`education.${index}.school`}>School / University</Label>
              <Input
                id={`education.${index}.school`}
                name="school"
                placeholder="Stanford University"
                value={item.school}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`education.${index}.location`}>Location</Label>
                <Input
                  id={`education.${index}.location`}
                  name="location"
                  placeholder="Stanford, CA"
                  value={item.location}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div>
                <Label htmlFor={`education.${index}.graduationDate`}>Graduation Date</Label>
                <Input
                  id={`education.${index}.graduationDate`}
                  name="graduationDate"
                  placeholder="Jun 2019"
                  value={item.graduationDate}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addEducation}
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add Education
      </Button>
    </div>
  );
}
