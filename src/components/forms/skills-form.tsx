'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

export default function SkillsForm() {
  const form = useFormContext();

  return (
    <div className="space-y-4 pt-4">
      <FormField
        control={form.control}
        name="skills.content"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Skills</FormLabel>
            <FormControl>
              <Textarea
                placeholder="JavaScript, React, Python..."
                className="min-h-[120px]"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Enter your skills, separated by commas.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
