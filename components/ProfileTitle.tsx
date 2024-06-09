import { useProfile } from '@/context/ProfileContext';

const ProfileTitle = () => {
  const { profile } = useProfile();
  if (!profile) return null;
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-3xl font-bold text-gray-900">{`${profile.firstname} ${profile.lastname} (${profile.nickname})`}</h1>
      <p className="text-lg text-gray-700">{profile.role}</p>
    </div>
  );
};

export default ProfileTitle;
