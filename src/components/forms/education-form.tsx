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

export default function EducationForm() {
  const form = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'education',
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
              name={`education.${index}.degree`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Degree / Certificate</FormLabel>
                  <FormControl>
                    <Input placeholder="M.S. in Computer Science" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name={`education.${index}.school`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School / University</FormLabel>
                  <FormControl>
                    <Input placeholder="Stanford University" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name={`education.${index}.location`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Stanford, CA" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`education.${index}.graduationDate`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Graduation Date</FormLabel>
                    <FormControl>
                      <Input placeholder="Jun 2019" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={() => append({ id: crypto.randomUUID(), degree: '', school: '', location: '', graduationDate: '' })}
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add Education
      </Button>
    </div>
  );
}
