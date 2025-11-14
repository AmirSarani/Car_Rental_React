import { create } from "zustand";

type CarSearch = {
  Search: string;
  setSearch: (v: string) => void;
};

export const UseCarSearch = create<CarSearch>()((set) => ({
  Search: "",
  setSearch: (v) => set(() => ({ Search: v })),
}));
