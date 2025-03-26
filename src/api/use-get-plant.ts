import { useParams } from 'react-router';
import API from './api';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Plant } from '../types';

const fetchPlantById = async (id?: string): Promise<Plant | null> => {
  if (!id) return null;
  try {
    const { data } = await API.get<Plant>(`/plant/${id}`);
    return Array.isArray(data) ? data[0] || null : data;
  } catch (error) {
    console.error(`Error fetching plant with ID ${id}:`, error);
    throw error;
  }
};

export const useGetPlant = (): UseQueryResult<Plant | null, Error> => {
  const { id } = useParams<{ id: string }>();
  return useQuery<Plant | null, Error>({
    queryKey: ['plant', id],
    queryFn: () => fetchPlantById(id as string),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
