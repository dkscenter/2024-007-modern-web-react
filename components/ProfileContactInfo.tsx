import { useProfile } from '@/context/ProfileContext';

const ProfileContactInfo = () => {
  const { profile } = useProfile();
  if (!profile) return null;
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
      <p className="mt-4 text-gray-700">Email: {profile.bio.contact_information.email}</p>
      <p className="mt-2 text-gray-700">Phone: {profile.bio.contact_information.phone}</p>
      <p className="mt-2 text-gray-700">
        LinkedIn: <a href={profile.bio.contact_information.linkedin} className="text-blue-500">{profile.bio.contact_information.linkedin}</a>
      </p>
    </div>
  );
};

export default ProfileContactInfo;
