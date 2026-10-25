import { create } from "zustand";
export const useCartStore = create((set) => ({
  quantity: {},
  addItem: (coffeeId) => {
    set((state) => ({
      quantity: {
        ...state.quantity,
        [coffeeId]: (state.quantity[coffeeId] || 0) + 1,
      },
    }));
  },
  subtractItem: (coffeeId) => {
    set((state) => ({
      quantity: {
        ...state.quantity,
        [coffeeId]: Math.max(0, (state.quantity[coffeeId] || 0) - 1),
      },
    }));
  },
}));
