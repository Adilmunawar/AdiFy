
import { z } from 'zod';

export const personalInfoSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
  photoUrl: z.string().optional(),
});

export const summarySchema = z.object({
  content: z.string(),
});

export const experienceSchema = z.object({
  id: z.string(),
  jobTitle: z.string().min(1, 'Job title is required'),
  company: z.string().min(1, 'Company name is required'),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
});

export const educationSchema = z.object({
  id: z.string(),
  degree: z.string().min(1, 'Degree is required'),
  school: z.string().min(1, 'School name is required'),
  location: z.string(),
  graduationDate: z.string(),
});

export const projectSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Project name is required'),
  description: z.string(),
});

export const skillsSchema = z.object({
  content: z.string(),
});

export const themeSchema = z.object({
  primaryColor: z.string(),
});

export const resumeSchema = z.object({
  template: z.string(),
  theme: themeSchema,
  personalInfo: personalInfoSchema,
  summary: summarySchema,
  experience: z.array(experienceSchema),
  education: z.array(educationSchema),
  projects: z.array(projectSchema),
  skills: skillsSchema,
});

export type ResumeSchema = z.infer<typeof resumeSchema>;
