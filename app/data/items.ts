// Shared item definitions without secrets
export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
}

// Items data - shared between frontend and backend
export const ITEMS: Item[] = [
  {
    id: 'ice_cream',
    name: 'Мороженко 🍦',
    description: 'Вкусное виртуальное мороженое',
    price: 100,
    icon: '🍦'
  },
  {
    id: 'cookie',
    name: 'Печенье 🍪',
    description: 'Полезное виртульное печенье',
    price: 300,
    icon: '🍪'
  },
  {
    id: 'hamburger',
    name: 'Гамбургер 🍔',
    description: 'Сочный гамбургер',
    price: 500,
    icon: '🍔'
  }
];

// Helper function to get item by ID
export function getItemById(id: string): Item | undefined {
  return ITEMS.find(item => item.id === id);
} 