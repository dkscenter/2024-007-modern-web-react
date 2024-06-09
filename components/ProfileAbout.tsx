import { useProfile } from '@/context/ProfileContext';

const ProfileAbout = () => {
  const { profile } = useProfile();
  if (!profile) return null;
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-900">About</h2>
      <p className="mt-4 text-gray-700">{profile.bio.about}</p>
    </div>
  );
};

export default ProfileAbout;
