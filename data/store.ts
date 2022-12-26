import create from "zustand";

export interface Item {
  icon: string;
  description: string;
  quantity: number;
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
      quantity: 0,
      m2: 1.2,
    },
    {
      icon: "refrigerator",
      description: "Regrigerador",
      quantity: 0,
      m2: 1,
    },
    {
      icon: "furniture",
      description: "Forniture",
      quantity: 0,
      m2: 0.5,
    },
    {
      icon: "oven",
      description: "Oven",
      quantity: 0,
      m2: 0.6,
    },
    {
      icon: "sofa",
      description: "Sofa",
      quantity: 0,
      m2: 1.5,
    },
    {
      icon: "tv",
      description: "TV",
      quantity: 0,
      m2: 0.25,
    },
    {
      icon: "washer-dryer",
      description: "Washer-dryer",
      quantity: 0,
      m2: 0.5,
    },
    {
      icon: "dining",
      description: "Dining",
      quantity: 0,
      m2: 2,
    },
    {
      icon: "desk",
      description: "Desk",
      quantity: 0,
      m2: 0.75,
    },
    {
      icon: "wardrobe",
      description: "Wardrobe",
      quantity: 0,
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
