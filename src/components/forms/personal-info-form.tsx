'use client';

import { useResumeStore } from '@/lib/store';
import { Input } from '@/components/ui/input';
import { ImageUpload } from '@/components/image-upload';
import { Label } from '@/components/ui/label';

export default function PersonalInfoForm() {
  const { resume, updateResume } = useResumeStore();
  const { personalInfo } = resume;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateResume({
      ...resume,
      personalInfo: { ...personalInfo, [name]: value },
    });
  };

  const handlePhotoChange = (value: string) => {
    updateResume({
      ...resume,
      personalInfo: { ...personalInfo, photoUrl: value },
    });
  };

  return (
    <div className="space-y-4 pt-4">
        <div>
            <Label>Profile Photo</Label>
            <ImageUpload
              value={personalInfo.photoUrl || ''}
              onChange={handlePhotoChange}
            />
        </div>
      
        <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Adil Munawar"
              value={personalInfo.name}
              onChange={handleChange}
            />
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="adil.munawar@example.com"
              value={personalInfo.email}
              onChange={handleChange}
            />
        </div>
        <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+1 (123) 456-7890"
              value={personalInfo.phone}
              onChange={handleChange}
            />
        </div>
      </div>
        <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              placeholder="123 Tech Street, Silicon Valley, CA"
              value={personalInfo.address}
              onChange={handleChange}
            />
        </div>
    </div>
  );
}
