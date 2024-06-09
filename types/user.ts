export interface RegisterData {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  nickname: string;
  email: string;
  image: string;
  bio: {
    about: string;
    skills: string[];
    experience: {
      company: string;
      role: string;
      duration: string;
      projects: { name: string; description: string }[];
    }[];
    contact_information: {
      email: string;
      phone: string;
      linkedin: string;
    };
  };
}
