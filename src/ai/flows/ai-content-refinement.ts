'use server';

/**
 * @fileOverview An AI-powered content refinement tool for resumes.
 *
 * - refineContent - A function that refines resume content based on user input, targeted company, and role.
 * - RefineContentInput - The input type for the refineContent function.
 * - RefineContentOutput - The return type for the refineContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineContentInputSchema = z.object({
  resumeContent: z.string().describe('The current content of the resume section to be refined.'),
  targetedCompany: z.string().describe('The name of the company the resume is being targeted for.'),
  targetedRole: z.string().describe('The specific role the resume is being targeted for.'),
});
export type RefineContentInput = z.infer<typeof RefineContentInputSchema>;

const RefineContentOutputSchema = z.object({
  refinedContent: z.string().describe('The refined resume content with improved clarity, impact, and ATS compatibility.'),
});
export type RefineContentOutput = z.infer<typeof RefineContentOutputSchema>;

export async function refineContent(input: RefineContentInput): Promise<RefineContentOutput> {
  return refineContentFlow(input);
}

const refineContentPrompt = ai.definePrompt({
  name: 'refineContentPrompt',
  input: {schema: RefineContentInputSchema},
  output: {schema: RefineContentOutputSchema},
  prompt: `You are an AI resume expert. Your goal is to refine the user-provided resume content to enhance its clarity, impact, and ATS compatibility, tailored for the specified company and role.  You will decide when to include terms and phrases which may be most effective for various types of opportunities based on the user-supplied content, the targeted company, and the targeted role. Focus on making the content ATS compatible. Don't include any introductory or concluding statements.

Resume Content: {{{resumeContent}}}
Targeted Company: {{{targetedCompany}}}
Targeted Role: {{{targetedRole}}}

Refined Content:`,
});

const refineContentFlow = ai.defineFlow(
  {
    name: 'refineContentFlow',
    inputSchema: RefineContentInputSchema,
    outputSchema: RefineContentOutputSchema,
  },
  async input => {
    const {output} = await refineContentPrompt(input);
    return output!;
  }
);
