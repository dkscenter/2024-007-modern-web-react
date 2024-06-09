import { useProfile } from '@/context/ProfileContext';
import ProfileProjects from './ProfileProjects';

const ProfileExperience = () => {
  const { profile } = useProfile();
  if (!profile) return null;
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
      <div className="mt-4 space-y-6">
        {profile.bio.experience.map((experience, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
            <h3 className="text-xl font-bold text-gray-900">{experience.company}</h3>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Role:</span> {experience.role}
            </p>
            <p className="text-gray-700 mt-1">
              <span className="font-semibold">Duration:</span> {experience.duration}
            </p>
            <ProfileProjects projects={experience.projects} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileExperience;
