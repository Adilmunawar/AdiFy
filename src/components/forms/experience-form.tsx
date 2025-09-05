'use client';

import { useFormContext, useFieldArray } from 'react-hook-form';
import { PlusCircle, Trash2 } from 'lucide-react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import AiRefineButton from '../ai-refine-button';

export default function ExperienceForm() {
  const form = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'experience',
  });

  return (
    <div className="space-y-4 pt-4">
      {fields.map((item, index) => (
        <Card key={item.id} className="relative">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
            onClick={() => remove(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <CardContent className="pt-6 space-y-4">
            <FormField
              control={form.control}
              name={`experience.${index}.jobTitle`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Senior Software Engineer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name={`experience.${index}.company`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Tech Solutions Inc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name={`experience.${index}.location`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="San Francisco, CA" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`experience.${index}.startDate`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input placeholder="Jan 2020" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`experience.${index}.endDate`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <Input placeholder="Present" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
             <FormField
                control={form.control}
                name={`experience.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Textarea placeholder="Describe your responsibilities and achievements..." className="min-h-[120px] pr-10" {...field} />
                        <AiRefineButton form={form} fieldName={`experience.${index}.description`} fieldValue={field.value} title="Refine Job Description"/>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={() => append({ id: crypto.randomUUID(), jobTitle: '', company: '', location: '', startDate: '', endDate: '', description: '' })}
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add Experience
      </Button>
    </div>
  );
}
