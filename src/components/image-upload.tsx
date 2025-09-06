
'use client';

import { useState, useRef } from 'react';
import { UploadCloud, X, LoaderCircle, Scissors } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import ReactCrop, {
  type Crop,
  centerCrop,
  makeAspectCrop,
  PixelCrop,
} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

async function getCroppedImg(
    image: HTMLImageElement,
    crop: PixelCrop,
  ): Promise<string> {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
  
    if (!ctx) {
      throw new Error('No 2d context');
    }
  
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';
  
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  
    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            if (!blob) {
                throw new Error('Canvas is empty');
            }
            resolve(URL.createObjectURL(blob));
        }, 'image/png');
    });
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const imgRef = useRef<HTMLImageElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || '')
      );
      reader.readAsDataURL(event.target.files[0]);
      setIsDialogOpen(true);
    }
  };

  const handleRemove = () => {
    onChange('');
  };
  
  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, 1));
  }
  
  async function handleCrop() {
    if (!imgRef.current || !completedCrop) {
      return;
    }
    const croppedImageObjectUrl = await getCroppedImg(imgRef.current, completedCrop);

    // Fetch the blob from the object URL
    const response = await fetch(croppedImageObjectUrl);
    const blob = await response.blob();

    // Convert blob to data URL
    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result as string);
      toast({ title: 'Image cropped and updated successfully' });
    };
    reader.readAsDataURL(blob);

    setIsDialogOpen(false);
  }

  return (
    <>
      <div className="flex items-center gap-4">
        {value ? (
          <div className="relative group">
            <Image
              src={value}
              alt="Profile Photo"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/20 hover:text-white"
                    onClick={() => {
                        setImgSrc(value);
                        setIsDialogOpen(true);
                    }}
                >
                    <Scissors className="h-4 w-4" />
                </Button>
                <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={handleRemove}
                    className="text-white hover:bg-white/20 hover:text-white"
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crop your photo</DialogTitle>
          </DialogHeader>
          {imgSrc && (
            <div className='flex justify-center'>
            <ReactCrop
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={1}
              circularCrop
            >
              <Image
                ref={imgRef}
                alt="Crop me"
                src={imgSrc}
                width={400}
                height={400}
                onLoad={onImageLoad}
                className='max-h-[60vh] object-contain'
              />
            </ReactCrop>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleCrop}>Crop Image</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
