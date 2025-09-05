import type { ResumeSchema } from './schema';

export const initialData: ResumeSchema = {
  personalInfo: {
    name: 'Adil Munawar',
    email: 'adil.munawar@example.com',
    phone: '+1 (123) 456-7890',
    address: '123 Tech Street, Silicon Valley, CA 94000',
  },
  summary: {
    content: 'Dynamic and results-oriented professional with a proven track record of success in project management and software development. Seeking to leverage expertise in AI and web technologies to drive innovation at a forward-thinking company.',
  },
  experience: [
    {
      id: crypto.randomUUID(),
      jobTitle: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      startDate: 'Jan 2020',
      endDate: 'Present',
      description: '- Led the development of a scalable e-commerce platform, resulting in a 30% increase in sales.\n- Mentored junior developers and conducted code reviews to ensure high-quality code.\n- Collaborated with cross-functional teams to define, design, and ship new features.',
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      graduationDate: 'Jun 2019',
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      name: 'Adigon',
      description: 'A machine learning project to predict stock market trends with 95% accuracy.',
    },
    {
      id: crypto.randomUUID(),
      name: 'Adinox',
      description: 'A full-stack web application for real-time collaborative document editing.',
    },
  ],
  skills: {
    content: 'JavaScript, TypeScript, React, Next.js, Node.js, Python, SQL, Docker, AWS',
  },
};
