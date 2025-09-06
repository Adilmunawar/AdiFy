
'use client';

import { useResumeStore } from '@/lib/store';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

const colors = [
    { name: 'Blue', value: '206 90% 54%' },
    { name: 'Green', value: '142 76% 36%' },
    { name: 'Purple', value: '262 82% 57%' },
    { name: 'Red', value: '0 72% 51%' },
    { name: 'Orange', value: '25 95% 53%' },
    { name: 'Gray', value: '215 14% 47%' },
];

export default function ThemeForm() {
  const { resume, setPrimaryColor } = useResumeStore();
  const { theme } = resume;

  return (
    <div className="space-y-4 pt-4">
        <div>
            <Label>Primary Color</Label>
            <RadioGroup 
                value={theme.primaryColor} 
                onValueChange={setPrimaryColor}
                className="flex flex-wrap gap-4 mt-2"
            >
                {colors.map((color) => (
                    <Label key={color.value} className="flex items-center gap-2 cursor-pointer">
                        <RadioGroupItem value={color.value} id={color.value} />
                        <span 
                            className="w-6 h-6 rounded-full" 
                            style={{ backgroundColor: `hsl(${color.value})` }}
                        />
                        <span>{color.name}</span>
                    </Label>
                ))}
            </RadioGroup>
        </div>
    </div>
  );
}
