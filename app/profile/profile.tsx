"use client"
import { useEffect, useState } from 'react';
import { ProfileProvider, useProfile } from '@/context/ProfileContext';
import ProfileImage from '@/components/ProfileImage';
import ProfileTitle from '@/components/ProfileTitle';
import ProfileAbout from '@/components/ProfileAbout';
import ProfileSkills from '@/components/ProfileSkills';
import ProfileExperience from '@/components/ProfileExperience';
import ProfileContactInfo from '@/components/ProfileContactInfo';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { useSession, SessionProvider } from 'next-auth/react';

const Profile = () => {
    const { profile, setProfile } = useProfile();
    let session: any = useSession();
   
    useEffect(()=>{
        if(session?.data?.user && session?.status === "authenticated") setProfile(session.data.user);
    },[session?.status])

    if(!session?.data?.user && session?.status !== "loading") {
        window.location.href = "/login"
    }

    if (!profile) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-8">
                    <ProfileImage />
                    <ProfileTitle />
                    <ProfileAbout />
                    <ProfileSkills />
                    <ProfileExperience />
                    <ProfileContactInfo />
                </div>
            </div>
        </div>
    );
};

const ProfilePageWrapper = () => (
    <SessionProvider>
        <ProfileProvider>
            <Profile />
        </ProfileProvider>
    </SessionProvider>
);

export default ProfilePageWrapper;
