'use client';

import { useFormState } from 'react-dom';
import { register } from '@/app/register/actions';
import { useFormStatus } from 'react-dom';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

const initialState = {
  message: '',
  rawFormData: {
    username: ""
  }
};

export default function Signup() {
  const [state, formAction] = useFormState(register, initialState);
  const { pending } = useFormStatus();
  const [skills, setSkills] = useState(['']);
  const [experiences, setExperiences] = useState([
    { company: '', role: '', duration: '', projects: [{ name: '', description: '' }] }
  ]);

  useEffect(() => {
    if (state.success) {
      redirect('/login')
    }
  }, [state.success]);

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const addExperience = () => {
    setExperiences([...experiences, { company: '', role: '', duration: '', projects: [{ name: '', description: '' }] }]);
  };

  const handleExperienceChange = (index: number, key: string, value: string) => {
    const newExperiences = [...experiences];
    newExperiences[index] = { ...newExperiences[index], [key]: value };
    setExperiences(newExperiences);
  };

  const addProject = (experienceIndex: number) => {
    const newExperiences = [...experiences];
    newExperiences[experienceIndex].projects.push({ name: '', description: '' });
    setExperiences(newExperiences);
  };

  const handleProjectChange = (experienceIndex: number, projectIndex: number, key: string, value: string) => {
    const newExperiences = [...experiences];
    newExperiences[experienceIndex].projects[projectIndex] = { ...newExperiences[experienceIndex].projects[projectIndex], [key]: value };
    setExperiences(newExperiences);
  };

  return (
    <form action={formAction} className="max-w-4xl mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
      {state.message && (
        <div
          className={`mb-4 text-center px-4 py-2 rounded ${state.code === 'REGISTERED_USER' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
        >
          {state.message}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="firstname" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
        <input type="text" id="firstname" name="firstname" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="lastname" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
        <input type="text" id="lastname" name="lastname" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="nickname" className="block text-gray-700 text-sm font-bold mb-2">Nickname</label>
        <input type="text" id="nickname" name="nickname" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
        <input type="text" id="image" name="image" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="about" className="block text-gray-700 text-sm font-bold mb-2">About</label>
        <textarea id="about" name="about" className="mt-1 p-2 w-full border rounded-md"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Skills</label>
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => setSkills(skills.filter((_, i) => i !== index))}
                className="ml-2 text-red-500"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addSkill} className="mt-2 text-blue-500">Add Skill</button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Experience</label>
        {experiences.map((experience, expIndex) => (
          <div key={expIndex} className="mb-4 border p-4 rounded-md bg-gray-50">
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-1">Company</label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => handleExperienceChange(expIndex, 'company', e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-1">Role</label>
              <input
                type="text"
                value={experience.role}
                onChange={(e) => handleExperienceChange(expIndex, 'role', e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-1">Duration</label>
              <input
                type="text"
                value={experience.duration}
                onChange={(e) => handleExperienceChange(expIndex, 'duration', e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-1">Projects</label>
              {experience.projects.map((project, projIndex) => (
                <div key={projIndex} className="mb-2">
                  <label className="block text-gray-700 text-sm font-bold mb-1">Project Name</label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => handleProjectChange(expIndex, projIndex, 'name', e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  <label className="block text-gray-700 text-sm font-bold mb-1 mt-2">Project Description</label>
                  <textarea
                    value={project.description}
                    onChange={(e) => handleProjectChange(expIndex, projIndex, 'description', e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                  ></textarea>
                  {projIndex > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        const newExperiences = [...experiences];
                        newExperiences[expIndex].projects = newExperiences[expIndex].projects.filter((_, i) => i !== projIndex);
                        setExperiences(newExperiences);
                      }}
                      className="mt-1 text-red-500"
                    >
                      Remove Project
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={() => addProject(expIndex)} className="mt-2 text-blue-500">Add Project</button>
            </div>
            {expIndex > 0 && (
              <button
                type="button"
                onClick={() => setExperiences(experiences.filter((_, i) => i !== expIndex))}
                className="mt-1 text-red-500"
              >
                Remove Experience
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addExperience} className="mt-2 text-blue-500">Add Experience</button>
      </div>
      <div className="mb-4">
        <label htmlFor="contact_email" className="block text-gray-700 text-sm font-bold mb-2">Contact Email</label>
        <input type="email" id="contact_email" name="contact_email" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
        <input type="text" id="phone" name="phone" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="linkedin" className="block text-gray-700 text-sm font-bold mb-2">LinkedIn</label>
        <input type="text" id="linkedin" name="linkedin" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <button type="submit" disabled={pending} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Register
      </button>
    </form>
  );
}
