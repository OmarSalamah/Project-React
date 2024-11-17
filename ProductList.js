import React from "react";
import ProductCard from "./ProductCard";

const plants = [
  { id: 1, name: "Snake Plant", price: 20, thumbnail: "/snake.jpg", category: "Indoor" },
  { id: 2, name: "Aloe Vera", price: 15, thumbnail: "/aloe.jpg", category: "Indoor" },
  { id: 3, name: "Cactus", price: 10, thumbnail: "/cactus.jpg", category: "Outdoor" },
  { id: 4, name: "Palm", price: 25, thumbnail: "/palm.jpg", category: "Outdoor" },
  { id: 5, name: "Fern", price: 18, thumbnail: "/fern.jpg", category: "Indoor" },
  { id: 6, name: "Bonsai", price: 50, thumbnail: "/bonsai.jpg", category: "Outdoor" },
];

const ProductList = () => {
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div>
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;