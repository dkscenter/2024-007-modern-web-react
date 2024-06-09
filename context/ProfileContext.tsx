"use client"
import { Profile, ProfileContextProps } from '@/types/profile';
import { createContext, useContext, ReactNode, useState } from 'react';

const ProfileContext = createContext<ProfileContextProps | undefined | null>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Profile| null>(null);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
