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
  // initialize the state
  items: [
    {
      icon: "bed",
      description: "Beds",
      m2: 1.2,
    },
    {
      icon: "refrigerator",
      description: "Regrigerador",
      m2: 1,
    },
    {
      icon: "forniture",
      description: "Forniture",
      m2: 0.5,
    },
    {
      icon: "oven",
      description: "Oven",
      m2: 0.6,
    },
    {
      icon: "sofa",
      description: "Sofa",
      m2: 1.5,
    },
    {
      icon: "tv",
      description: "TV",
      m2: 0.25,
    },
    {
      icon: "washer-dryer",
      description: "Washer-dryer",
      m2: 0.5,
    },
    {
      icon: "dining",
      description: "Dining",
      m2: 2,
    },
    {
      icon: "desk",
      description: "Desk",
      m2: 0.75,
    },
    {
      icon: "wardrobe",
      description: "Wardrobe",
      m2: 3.2,
    },
  ],
  totalItems: 0,
  totalM2: 0,
  subtotal: 0,
  total: 0,
  dueToday50: 0,
  // initialize the state
}));

export { useStore };
