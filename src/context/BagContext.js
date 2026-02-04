import { createContext, useContext, useState } from 'react';

const BagContext = createContext(null);

export function BagProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToBag = (item, restaurant, quantity = 1, customizations = '') => {
    setItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.item.id === item.id &&
          i.restaurant.id === restaurant.id &&
          i.customizations === customizations
      );
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { item, restaurant, quantity, customizations }];
    });
  };

  const updateQuantity = (index, delta) => {
    setItems((prev) => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        updated.splice(index, 1);
      } else {
        updated[index] = { ...updated[index], quantity: newQty };
      }
      return updated;
    });
  };

  const removeFromBag = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const clearBag = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce(
    (sum, i) => sum + i.item.priceNum * i.quantity,
    0
  );

  return (
    <BagContext.Provider
      value={{
        items,
        addToBag,
        updateQuantity,
        removeFromBag,
        clearBag,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </BagContext.Provider>
  );
}

export function useBag() {
  const ctx = useContext(BagContext);
  if (!ctx) throw new Error('useBag must be used within BagProvider');
  return ctx;
}
