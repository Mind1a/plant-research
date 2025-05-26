import API from './api';

export const fetchquestions = async () => {
  const response = await fetch(`${API}/questions`);

  if (!response.ok) {
    throw new Error('Failed to fetch questions');
  }
  return response.json();
};
