import React, { createContext, useState, ReactNode } from 'react';

export interface Dish {
  image: string | undefined;
  id: string;
  name: string;
  description: string;
  category: 'Starter' | 'Main' | 'Dessert';
  price: number;
  isVegetarian?: boolean;
}

interface MenuContextProps {
  menuItems: Dish[];
  addDish: (dish: Dish) => void;
}

export const MenuContext = createContext<MenuContextProps>({
  menuItems: [],
  addDish: () => {},
});

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<Dish[]>([]);

  const addDish = (dish: Dish) => {
    setMenuItems((prev) => [...prev, dish]);
  };

  return (
    <MenuContext.Provider value={{ menuItems, addDish }}>
      {children}
    </MenuContext.Provider>
  );
};