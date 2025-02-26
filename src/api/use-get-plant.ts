import { useParams } from 'react-router';
import API from './api';
import { useQuery } from '@tanstack/react-query';

const fetchPlantById = async (id: string) => {
  try {
    const res = await API.get(`/plant/${id}`);
    return res.data;
  } catch (error) {
    console.log('Error fetching plant by id', error);
    throw error;
  }
};

export const useGetPlant = () => {
  const { id } = useParams();
  return useQuery({
    queryKey: ['plant', id],
    queryFn: () => fetchPlantById(id as string),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
