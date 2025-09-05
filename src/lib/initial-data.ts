
import type { ResumeSchema } from './schema';

const getUUID = () => {
  if (typeof window !== 'undefined' && window.crypto) {
    return window.crypto.randomUUID();
  }
  // Fallback for non-browser environments
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export const initialData: ResumeSchema = {
  template: 'default',
  personalInfo: {
    name: 'Adil Munawar',
    email: 'adil.munawar@example.com',
    phone: '+1 (123) 456-7890',
    address: '123 Tech Street, Silicon Valley, CA 94000',
    photoUrl: 'https://picsum.photos/200/200',
  },
  summary: {
    content: 'Dynamic and results-oriented professional with a proven track record of success in project management and software development. Seeking to leverage expertise in AI and web technologies to drive innovation at a forward-thinking company.',
  },
  experience: [
    {
      id: getUUID(),
      jobTitle: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      startDate: 'Jan 2020',
      endDate: 'Present',
      description: '- Led the development of a scalable e-commerce platform, resulting in a 30% increase in sales.\n- Mentored junior developers and conducted code reviews to ensure high-quality code.\n- Collaborated with cross-functional teams to define, design, and ship new features.',
    },
     {
      id: getUUID(),
      jobTitle: 'Software Engineer',
      company: 'Innovate LLC',
      location: 'Austin, TX',
      startDate: 'Jun 2018',
      endDate: 'Dec 2019',
      description: '- Developed and maintained web applications using React and Node.js.\n- Contributed to the design and implementation of new features.\n- Worked in an Agile environment to deliver high-quality software.',
    }
  ],
  education: [
    {
      id: getUUID(),
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      graduationDate: 'Jun 2019',
    },
    {
      id: getUUID(),
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Texas at Austin',
      location: 'Austin, TX',
      graduationDate: 'May 2018',
    },
  ],
  projects: [
    {
      id: getUUID(),
      name: 'Adigon',
      description: 'A machine learning project to predict stock market trends with 95% accuracy.',
    },
    {
      id: getUUID(),
      name: 'Adinox',
      description: 'A full-stack web application for real-time collaborative document editing.',
    },
  ],
  skills: {
    content: 'JavaScript, TypeScript, React, Next.js, Node.js, Python, SQL, Docker, AWS, Terraform, Kubernetes, CI/CD',
  },
};
