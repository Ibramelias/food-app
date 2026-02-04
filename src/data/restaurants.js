// Image URL per item (picsum gives consistent images per seed)
export const getItemImage = (restId, itemId) => `https://picsum.photos/seed/food-${restId}-${itemId}/400/300`;

export const restaurants = [
  {
    id: '1',
    name: "La Bella Cucina",
    cuisine: "Italian",
    description: "Authentic Italian dishes made with love",
    image: "🍝",
    menu: [
      { id: 1, name: "Margherita Pizza", price: "$14", priceNum: 14, description: "Fresh mozzarella, tomato, basil", calories: 850 },
      { id: 2, name: "Spaghetti Carbonara", price: "$16", priceNum: 16, description: "Creamy bacon and egg pasta", calories: 720 },
      { id: 3, name: "Risotto ai Funghi", price: "$18", priceNum: 18, description: "Creamy mushroom risotto", calories: 680 },
      { id: 4, name: "Tiramisu", price: "$8", priceNum: 8, description: "Classic Italian dessert", calories: 420 },
      { id: 5, name: "Lasagna Bolognese", price: "$17", priceNum: 17, description: "Layered pasta with meat sauce", calories: 780 },
    ],
  },
  {
    id: '2',
    name: "Sakura Sushi",
    cuisine: "Japanese",
    description: "Fresh sushi and traditional Japanese cuisine",
    image: "🍣",
    menu: [
      { id: 1, name: "Salmon Nigiri (6 pcs)", price: "$12", priceNum: 12, description: "Fresh Atlantic salmon", calories: 320 },
      { id: 2, name: "Dragon Roll", price: "$16", priceNum: 16, description: "Eel, cucumber, avocado", calories: 450 },
      { id: 3, name: "Miso Soup", price: "$4", priceNum: 4, description: "Traditional tofu miso", calories: 80 },
      { id: 4, name: "Edamame", price: "$5", priceNum: 5, description: "Steamed salted soybeans", calories: 120 },
      { id: 5, name: "Tempura Udon", price: "$14", priceNum: 14, description: "Crispy tempura with udon noodles", calories: 520 },
    ],
  },
  {
    id: '3',
    name: "Taco Fiesta",
    cuisine: "Mexican",
    description: "Bold flavors and handcrafted tacos",
    image: "🌮",
    menu: [
      { id: 1, name: "Beef Tacos (3)", price: "$10", priceNum: 10, description: "Seasoned beef, cilantro, lime", calories: 480 },
      { id: 2, name: "Guacamole & Chips", price: "$8", priceNum: 8, description: "Fresh avocado, house-made chips", calories: 520 },
      { id: 3, name: "Chicken Quesadilla", price: "$12", priceNum: 12, description: "Melted cheese, grilled chicken", calories: 620 },
      { id: 4, name: "Carnitas Burrito", price: "$14", priceNum: 14, description: "Slow-cooked pork, rice, beans", calories: 890 },
      { id: 5, name: "Churros", price: "$6", priceNum: 6, description: "Cinnamon sugar, chocolate dip", calories: 340 },
    ],
  },
  {
    id: '4',
    name: "The Burger Joint",
    cuisine: "American",
    description: "Gourmet burgers and hand-cut fries",
    image: "🍔",
    menu: [
      { id: 1, name: "Classic Cheeseburger", price: "$12", priceNum: 12, description: "Beef patty, cheddar, lettuce, tomato", calories: 720 },
      { id: 2, name: "Bacon BBQ Burger", price: "$15", priceNum: 15, description: "Smoked bacon, BBQ sauce, onion rings", calories: 980 },
      { id: 3, name: "Veggie Burger", price: "$11", priceNum: 11, description: "Black bean patty, avocado", calories: 420 },
      { id: 4, name: "Loaded Fries", price: "$8", priceNum: 8, description: "Cheese, bacon, jalapeños", calories: 650 },
      { id: 5, name: "Milkshake", price: "$6", priceNum: 6, description: "Chocolate, vanilla, or strawberry", calories: 480 },
    ],
  },
  {
    id: '5',
    name: "Spice Route",
    cuisine: "Indian",
    description: "Aromatic curries and tandoori delights",
    image: "🍛",
    menu: [
      { id: 1, name: "Butter Chicken", price: "$15", priceNum: 15, description: "Creamy tomato curry", calories: 580 },
      { id: 2, name: "Lamb Biryani", price: "$18", priceNum: 18, description: "Fragrant rice, tender lamb", calories: 720 },
      { id: 3, name: "Samosas (4)", price: "$7", priceNum: 7, description: "Spiced potato, pea filling", calories: 380 },
      { id: 4, name: "Garlic Naan", price: "$4", priceNum: 4, description: "Fresh tandoor bread", calories: 220 },
      { id: 5, name: "Mango Lassi", price: "$5", priceNum: 5, description: "Sweet yogurt drink", calories: 180 },
    ],
  },
];
