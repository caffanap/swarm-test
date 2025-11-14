import { create } from "zustand";

export const useCategoryStore = create((set) => ({
    source: [],
    detail: null,
    reset: () => set({ source: [], detail: null }),
}))