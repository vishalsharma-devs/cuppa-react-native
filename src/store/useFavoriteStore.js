import { create } from "zustand";

export const useFavoriteStore = create((set) => ({
  favorites: [],
  toggleFavorite: (coffeeId) => {
    set((states) => ({
      favorites: states.favorites.includes(coffeeId)
        ? states.favorites.filter((id) => id !== coffeeId)
        : [...states.favorites, coffeeId],
    }));
  },
}));
