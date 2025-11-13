import React, { createContext, useState, ReactNode } from 'react';

export type Course = 'Starter' | 'Main' | 'Dessert';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: Course;
  price: number;
  image: string;
  isVegetarian: boolean;
}

interface MenuContextProps {
  menuItems: MenuItem[];
  addDish: (dish: MenuItem) => void;
  removeDish: (id: string) => void;
}

export const MenuContext = createContext<MenuContextProps>({
  menuItems: [],
  addDish: () => {},
  removeDish: () => {},
});

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
  ]);

  const addDish = (dish: MenuItem) => {
    setMenuItems(prev => [...prev, dish]);
  };

  const removeDish = (id: string) => {
    setMenuItems(prev => prev.filter(dish => dish.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menuItems, addDish, removeDish }}>
      {children}
    </MenuContext.Provider>
  );
};