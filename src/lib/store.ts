import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { ResumeSchema } from './schema';
import { initialData } from './initial-data';

interface ResumeState {
  resume: ResumeSchema;
  isTemplateSwitcherOpen: boolean;
  updateResume: (resume: ResumeSchema) => void;
  setTemplate: (template: string) => void;
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
      setTemplateSwitcherOpen: (isOpen) => set({ isTemplateSwitcherOpen: isOpen }),
      resetResume: () => set({ resume: initialData }),
    }),
    {
      name: 'adify-resume-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
