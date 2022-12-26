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
  tax: number;
  total: number;
  dueToday50: number;
  addItem: (description: string, quantity: number) => void;
}

const useStore = create<ItemsState>((set) => ({
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
  tax: 0,
  total: 0,
  dueToday50: 0,
  // function that is called when the <Button>+</Button is pressed
  addItem: (description: string, quantity: number) => {
    set((state) => ({
      items: state.items?.map((item) =>
        item.description === description
          ? ({ ...item, quantity: quantity + 1 } as Item)
          : item
      ),
      totalItems: state.totalItems + 1,
      totalM2:
        Math.round(
          (state.totalM2 +
            state.items.filter((item) => item.description === description)[0]
              .m2) *
            100
        ) / 100,
      subtotal:
        state.subtotal +
        state.items.filter((item) => item.description === description)[0].m2 *
          200,
      tax:
        state.tax +
        state.items.filter((item) => item.description === description)[0].m2 *
          200 *
          0.16,
      total:
        state.total +
        (state.items.filter((item) => item.description === description)[0].m2 *
          200 +
          state.items.filter((item) => item.description === description)[0].m2 *
            200 *
            0.16),
      dueToday50:
        state.dueToday50 +
        (state.items.filter((item) => item.description === description)[0].m2 *
          200 +
          state.items.filter((item) => item.description === description)[0].m2 *
            200 *
            0.16) *
          0.5,
    }));
  },
}));

export { useStore };
