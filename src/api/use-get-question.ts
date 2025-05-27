const baseURL = import.meta.env.VITE_API_BASE_URL;
import { Question } from '../types';

export const fetchquestions = async (id: number): Promise<Question[]> => {
  const response = await fetch(`${baseURL}/questions/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch questions`);
  }

  return response.json();
};
