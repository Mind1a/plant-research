export type Navlink = {
  id: number;
  title: string;
  url: string;
};

export type ProjectAuthorType = {
  image: string;
  name: string;
  description: string;
};

export type TeamMember = {
  name: string;
  position: string;
  socialLinks?: {
    linkedin?: string;
    dribbble?: string;
    behance?: string;
    discord?: string;
  };
  team: 'Project Management' | 'Design Team' | 'Development Team';
};

export type Plant = {
  id: number;
  name: string;
  eng_name: string;
  lat_name: string;
  image: string;
};
