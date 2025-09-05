'use client';

import { useState } from 'react';
import { UploadCloud, X, LoaderCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
        setIsLoading(false);
        toast({ title: 'Image uploaded successfully' });
      };
      reader.onerror = () => {
        setIsLoading(false);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to read file.',
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    onChange('');
  };

  return (
    <div className="flex items-center gap-4">
      {value ? (
        <div className="relative">
          <Image
            src={value}
            alt="Profile Photo"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <button
            onClick={handleRemove}
            className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full p-1"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      ) : (
        <div
          className="w-20 h-20 rounded-full bg-muted flex items-center justify-center cursor-pointer"
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          {isLoading ? <LoaderCircle className="animate-spin" /> : <UploadCloud />}
        </div>
      )}
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        disabled={isLoading}
      />
    </div>
  );
}
