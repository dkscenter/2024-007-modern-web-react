"use client"
import { useEffect, useState } from 'react';
import ProfileImage from '@/components/ProfileImage';
import ProfileTitle from '@/components/ProfileTitle';
import ProfileAbout from '@/components/ProfileAbout';
import ProfileSkills from '@/components/ProfileSkills';
import ProfileExperience from '@/components/ProfileExperience';
import ProfileContactInfo from '@/components/ProfileContactInfo';

import { useSession } from 'next-auth/react';
import { useProfile } from '@/context/ProfileContext';

const Profile = () => {
    const { profile, setProfile } = useProfile();
    let session: any = useSession();
   
    useEffect(()=>{
        if(session?.data?.user && session?.status === "authenticated") setProfile(session.data.user);
    },[session?.status])

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

export default Profile;
