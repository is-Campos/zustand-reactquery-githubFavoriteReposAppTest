import api from "../api/github";
import {useQuery} from '@tanstack/react-query'
import {Repository} from '../interfaces/repo'

// async function fetchRepos() {
//   const {data} = await api.get<Repository[]>('/users/is-Campos/repos');
//   return data;
// }

export function useFetchRepositories() {
  return useQuery({
    queryKey: ['repos'],
    queryFn: async() => {
      const {data} = await api.get<Repository[]>('/users/is-Campos/repos');
      return data;
    }
  })
}