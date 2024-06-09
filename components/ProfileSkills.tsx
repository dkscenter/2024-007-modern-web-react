import { useProfile } from '@/context/ProfileContext';

const ProfileSkills = () => {
  const { profile } = useProfile();
  if (!profile) return null;
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-900">Skills</h2>
      <ul className="mt-4 space-y-2 text-gray-700">
        {profile.bio.skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="inline-block w-3 h-3 mr-2 bg-indigo-500 rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSkills;
