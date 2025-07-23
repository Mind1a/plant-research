import { useParams } from 'react-router';

import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { Plant } from '../types';
import API from './api';

const fetchPlantById = async (id: string): Promise<Plant | null> => {
  try {
    const res = await API.get<Plant[]>(`/plant/${id}`);

    return res.data.length > 0 ? res.data[0] : null;
  } catch (error) {
    console.error('Error fetching plant by ID:', error);

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
  });
};
