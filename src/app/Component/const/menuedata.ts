
export interface PriceListProps {
    category: string;
    img: string;
    price: string;
    name: string;
    description: string;
  }
  
  export const PriceList: PriceListProps[] = [
    {
      img: "/Chocolate_Icecream.png",
      price: "$18.90",
      name: "Chocolate Icecream",
      description: "Made with eggs, lettuce, salt, oil, and other ingredients.",
      category: "Desserts"
    },
    {
      img: "/Classic_Waffles.png",
      price: "$12.99",
      name: "Classic Waffles",
      description: "Made with eggs, lettuce, salt, oil, and other ingredients.",
      category: "Breakfast"
    },
    {
      img: "/Martinez_drink.png",
      price: "$7.25",
      name: "Martinez Cocktail",
      description: "Made with eggs, lettuce, salt, oil, and other ingredients.",
      category: "Drinks"
    },
    {
      img: "/Fried_Eggs.png",
      price: "$9.99",
      name: "Fried Egg",
      description: "Simple yet delicious fried eggs Made ingredients..",
      category: "Breakfast"
    },
    {
      img: "/Butterscotch_Cake.png",
      price: "$20.99",
      name: "Butterscotch Cake",
      description: "A rich and creamy butterscotch-flavored cake.",
      category: "Desserts"
    },
    {
      img: "/Mint_lemonade.png",
      price: "$5.89",
      name: "Mint Lemonade",
      description: "Made with eggs, lettuce, salt, oil, and other ingredients..",
      category: "Drinks"
    },
    {
      img: "/Cheese_Burger.png",
      price: "$12.55",
      name: "Cheese Burger",
      description: "Juicy cheeseburger with fresh lettuce and tomatoes.",
      category: "Main Dish"
    },
    {
      img: "/Hawaiian_Pizza.png",
      price: "$15.99",
      name: "Hawaiian Pizza",
      description: "Made with eggs, lettuce, salt, oil, and other ingredients.",
      category: "Main Dish"
    }
  ];
  