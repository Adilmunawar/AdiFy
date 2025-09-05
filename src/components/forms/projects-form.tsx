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

export default function ProjectsForm() {
  const form = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'projects',
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
              name={`projects.${index}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Adigon" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`projects.${index}.description`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea placeholder="Describe your project..." className="pr-10" {...field} />
                      <AiRefineButton form={form} fieldName={`projects.${index}.description`} fieldValue={field.value} title="Refine Project Description"/>
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
        onClick={() => append({ id: crypto.randomUUID(), name: '', description: '' })}
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add Project
      </Button>
    </div>
  );
}
