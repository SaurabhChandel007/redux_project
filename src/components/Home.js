import React from "react";

const carSet = [
  { id: 1, name: "BMW", price: "200 $" },
  { id: 2, name: "Audi", price: "100 $" },
  { id: 3, name: "Ford", price: "20 $" },
  { id: 4, name: "Aulto", price: "50 $" },
];
const Home = () => { 
  return (
    <div>
      <h4>This is Home Component</h4>
      <div>Added to cart 0+</div>
      {carSet?.map((car) => {
        return (
          <div key={car.id}>
            <div>{car.name}</div>
            <div>{car.price}</div>
            <span>
              <button>Add to Cart</button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
