export interface Project {
    name: string;
    description: string;
}

export interface Experience {
    company: string;
    role: string;
    duration: string;
    projects: Project[];
}

export interface Bio {
    about: string;
    skills: string[];
    experience: Experience[];
    contact_information: {
        email: string;
        phone: string;
        linkedin: string;
    };
}

export interface Profile {
    id: string;
    image: string;
    username: string;
    firstname: string;
    lastname: string;
    nickname: string;
    email: string;
    role: string;
    bio: Bio;
}

export interface ProfileContextProps {
    profile: Profile | null;
    setProfile: (profile: Profile | null) => void;
}