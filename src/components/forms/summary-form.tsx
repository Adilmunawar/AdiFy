'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import AiRefineButton from '../ai-refine-button';

export default function SummaryForm() {
  const form = useFormContext();

  return (
    <div className="space-y-4 pt-4">
      <FormField
        control={form.control}
        name="summary.content"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Summary</FormLabel>
            <FormControl>
              <div className="relative">
                <Textarea
                  placeholder="Tell us about your professional background..."
                  className="min-h-[120px] pr-10"
                  {...field}
                />
                <AiRefineButton form={form} fieldName="summary.content" fieldValue={field.value} title="Refine Summary" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
