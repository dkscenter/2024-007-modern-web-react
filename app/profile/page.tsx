import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import ProfileComponent from './profile';

const ProfilePage = async () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4 flex items-center text-blue-600">
                <Link href={"/"}>
                    Home
                </Link>
                <ChevronRightIcon className="h-5 w-5 ml-2" />
                Profile
            </h1>
            <ProfileComponent />
        </div>
    );
};

export default ProfilePage;
