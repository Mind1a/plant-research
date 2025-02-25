import { useSearchParams } from 'react-router';
import API from './api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const fetchPlants = async (page: number, search: string, sort: string) => {
  try {
    const res = await API.get('/plant', {
      params: { page, search, sort },
    });
    return res.data;
  } catch (error) {
    console.error('fetchPlants Error:', error);
    return [];
  }
};

export const usePlants = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const search = searchParams.get('search') || '';
  const sort = searchParams.get('sort') || '';

  return useQuery({
    queryKey: ['plants', { page, search, sort }],
    queryFn: () => fetchPlants(page, search, sort),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
};
