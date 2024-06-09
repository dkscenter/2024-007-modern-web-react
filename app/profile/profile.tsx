"use client"
import { useEffect, useState } from 'react';
import ProfileImage from '@/components/ProfileImage';
import ProfileTitle from '@/components/ProfileTitle';
import ProfileAbout from '@/components/ProfileAbout';
import ProfileSkills from '@/components/ProfileSkills';
import ProfileExperience from '@/components/ProfileExperience';
import ProfileContactInfo from '@/components/ProfileContactInfo';

const Profile = () => {

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
