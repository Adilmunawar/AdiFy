
'use client';

import { useResumeStore } from '@/lib/store';
import { PlusCircle, Trash2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AiRefineButton from '../ai-refine-button';

export default function ProjectsForm() {
  const { resume, updateResume } = useResumeStore();
  const { projects } = resume;

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [name]: value };
    updateResume({ ...resume, projects: newProjects });
  };
  
  const setValue = (index: number, value: string) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], description: value };
    updateResume({ ...resume, projects: newProjects });
  }

  const addProject = () => {
    const newProjects = [...projects, { id: uuidv4(), name: '', description: '' }];
    updateResume({ ...resume, projects: newProjects });
  };

  const removeProject = (index: number) => {
    const newProjects = projects.filter((_, i) => i !== index);
    updateResume({ ...resume, projects: newProjects });
  };

  return (
    <div className="space-y-4 pt-4">
      {projects.map((item, index) => (
        <Card key={item.id} className="relative">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
            onClick={() => removeProject(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <CardContent className="pt-6 space-y-4">
            <div>
              <Label htmlFor={`projects.${index}.name`}>Project Name</Label>
              <Input
                id={`projects.${index}.name`}
                name="name"
                placeholder="Adigon"
                value={item.name}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div>
              <Label htmlFor={`projects.${index}.description`}>Description</Label>
              <div className="relative">
                <Textarea
                  id={`projects.${index}.description`}
                  name="description"
                  placeholder="Describe your project..."
                  className="pr-10"
                  value={item.description}
                  onChange={(e) => handleChange(index, e)}
                />
                <AiRefineButton
                  fieldName={`projects.${index}.description`}
                  fieldValue={item.description}
                  setValue={(value) => setValue(index, value)}
                  title="Refine Project Description"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addProject}
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add Project
      </Button>
    </div>
  );
}
