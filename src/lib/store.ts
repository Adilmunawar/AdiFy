
'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useDebounce } from 'use-debounce';
import type { ResumeSchema } from './schema';
import { initialData } from './initial-data';
import { useEffect, useState } from 'react';

interface ResumeState {
  resume: ResumeSchema;
  isTemplateSwitcherOpen: boolean;
  updateResume: (resume: ResumeSchema) => void;
  setTemplate: (template: string) => void;
  setPrimaryColor: (color: string) => void;
  setTemplateSwitcherOpen: (isOpen: boolean) => void;
  resetResume: () => void;
}

export const useResumeStore = create<ResumeState>()(
  persist(
    (set) => ({
      resume: initialData,
      isTemplateSwitcherOpen: false,
      updateResume: (resume) => set({ resume }),
      setTemplate: (template) => set((state) => ({ resume: { ...state.resume, template } })),
      setPrimaryColor: (color) => set((state) => ({ resume: { ...state.resume, theme: { ...state.resume.theme, primaryColor: color } } })),
      setTemplateSwitcherOpen: (isOpen) => set({ isTemplateSwitcherOpen: isOpen }),
      resetResume: () => set({ resume: initialData }),
    }),
    {
      name: 'adify-resume-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export const useDebouncedResumeStore = () => {
    const store = useResumeStore();
    const [debouncedResume] = useDebounce(store.resume, 300);

    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    if(!hydrated) {
        return {
            resume: initialData,
            isTemplateSwitcherOpen: false,
            updateResume: () => {},
            setTemplate: () => {},
            setPrimaryColor: () => {},
            setTemplateSwitcherOpen: () => {},
            resetResume: () => {},
        };
    }
  
    return {
      ...store,
      resume: debouncedResume,
    };
  };
