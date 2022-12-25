import create from "zustand";

interface Item {
  icon: string;
  description: string;
  m2: number;
}

interface ItemsState {
  items: Item[];
  totalItems: number;
  totalM2: number;
  subtotal: number;
  total: number;
  dueToday50: number;
}

const useStore = create<ItemsState>((_set) => ({
  items: [],
  totalItems: 0,
  totalM2: 0,
  subtotal: 0,
  total: 0,
  dueToday50: 0,
}));

export { useStore };
