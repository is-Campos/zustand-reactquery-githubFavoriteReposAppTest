import { create } from "zustand";
import { persist } from 'zustand/middleware'

type favoriteResposState = {
  favoriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

export const useFavoriteReposStore = create(persist<favoriteResposState>(
  (set) => ({
    favoriteReposIds: [],
    addFavoriteRepo: (id: number) =>
      set((state) => ({ favoriteReposIds: [...state.favoriteReposIds, id] })),
    removeFavoriteRepo: (id: number) =>
      set((state) => ({
        favoriteReposIds: state.favoriteReposIds.filter(
          (repoId) => repoId !== id
        ),
      })),
  }), {
    name: 'favorite-repos'
  }
));
