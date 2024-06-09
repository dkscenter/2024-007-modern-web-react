import { Project } from "@/types/profile";


const ProfileProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="mt-4">
      <h4 className="text-lg font-semibold text-gray-900 mt-4">Projects:</h4>
      <ul className="mt-2 space-y-2 text-gray-700">
        {projects.map((project, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-3 h-3 mr-2 mt-1 bg-indigo-500 rounded-full"></span>
            <div>
              <p className="font-semibold">{project.name}</p>
              <p>{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileProjects;
