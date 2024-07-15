import { Repository } from "../interfaces/repo"
import {useFavoriteReposStore} from '../store/favoriteRepos'

interface Props {
  repository: Repository,
  isFavorite: boolean
}


export const RepoCard = ({repository, isFavorite}:Props) => {

  const addToFavorite = useFavoriteReposStore(state => state.addFavoriteRepo);
  const removeFromFavorite = useFavoriteReposStore(state => state.removeFavoriteRepo);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorite(repository.id)
      return
    }

    addToFavorite(repository.id)
  }

  return (
    <div>
      <h1>{repository.name}</h1>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Dislike" : "Like"}
      </button>
    </div>
  )
}