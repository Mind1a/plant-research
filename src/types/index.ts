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

export type Question = {
  question: string;
  next_question_id: number;
  identified_plant_id: number | null;
};

export type QuestionButtonsProps = {
  backButton: () => void;
  resetButton: () => void;
};
