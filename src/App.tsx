import "./App.css";
import { RepoCard } from "./components/RepoCard";
import { useFetchRepositories } from "./hooks/useRepos";
import {useFavoriteReposStore} from './store/favoriteRepos'

function App() {
  const { data, isLoading } = useFetchRepositories();
  const {favoriteReposIds} = useFavoriteReposStore()

  return <main>{<h1>{isLoading ? "Loading" : "My repositories"}</h1>}
  <div>
    {
      data?.map((repo) => (
        <RepoCard key={repo.id} repository={repo} isFavorite={favoriteReposIds.includes(repo.id)}/>
      ))
    }
  </div>
  </main>;
}

export default App;
