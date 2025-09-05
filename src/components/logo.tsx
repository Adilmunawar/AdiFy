import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  textClassName?: string;
  iconClassName?: string;
};

export default function Logo({ className, textClassName, iconClassName }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <FileText className={cn("h-6 w-6 text-primary", iconClassName)} />
      <span className={cn("font-bold text-xl text-primary", textClassName)}>
        Adify
      </span>
    </div>
  );
}
