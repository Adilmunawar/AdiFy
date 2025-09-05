import ResumeBuilder from '@/components/resume-builder';
import AppHeader from '@/components/app-header';

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <AppHeader />
      <ResumeBuilder />
    </div>
  );
}
