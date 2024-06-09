'use server';

import { RegisterData } from "@/types/user";
import axios from 'axios';

export async function register(prevState: any, formData: FormData) {
  const skills: any[] = [];
  formData.forEach((value, key) => {
    if (key.startsWith('skills[')) {
      skills.push(value as string);
    }
  });

  const experiences: any[] = [];
  formData.forEach((value, key) => {
    const match = key.match(/^experiences\[(\d+)\]\.(.+)$/);
    if (match) {
      const index = parseInt(match[1], 10);
      const field = match[2];
      experiences[index] = experiences[index] || { company: '', role: '', duration: '', projects: [] };
      if (field.startsWith('projects[')) {
        const projectMatch = field.match(/^projects\[(\d+)\]\.(.+)$/);
        if (projectMatch) {
          const projectIndex = parseInt(projectMatch[1], 10);
          const projectField = projectMatch[2];
          experiences[index].projects[projectIndex] = experiences[index].projects[projectIndex] || { name: '', description: '' };
          experiences[index].projects[projectIndex][projectField] = value as string;
        }
      } else {
        experiences[index][field] = value as string;
      }
    }
  });

  const rawFormData: RegisterData = {
    username: formData.get('username') as string,
    password: formData.get('password') as string,
    firstname: formData.get('firstname') as string,
    lastname: formData.get('lastname') as string,
    nickname: formData.get('nickname') as string,
    email: formData.get('email') as string,
    image: formData.get('image') as string,
    bio: {
      about: formData.get('about') as string,
      skills,
      experience: experiences,
      contact_information: {
        email: formData.get('contact_email') as string,
        phone: formData.get('phone') as string,
        linkedin: formData.get('linkedin') as string,
      },
    },
  };

  try {
    const response = await axios.request({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://89534e29-0fce-4172-a8ff-cf55054fd53f.mock.pstmn.io/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(rawFormData),
    });
    return {
      ...response.data,
      rawFormData,
      success: response.data.code === 'REGISTERED_USER'
    };
  } catch (error: any) {
    return {
      ...error.response.data,
      rawFormData,
      success: false
    };
  }
}
