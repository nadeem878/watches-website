import React from "react";
import Image from "next/image";

const Watches = () => {
  const watchData = [
    { id: 1, name: "Rolex", price: 150, description: "Luxury watch", image: "/rolex1.jpeg" },
    { id: 2, name: "Smart Watch Design", price: 300, description: "Smart Watch Design", image: "/smart_watch.jpg" },
    { id: 3, name: "Elegant Timepiece", price: 150, description: "Elegant Timepiece", image: "/watch3.jpeg" },
    { id: 4, name: "Bold and Rugged", price: 200, description: "Bold and Rugged", image: "/watch4.jpeg" },
    { id: 5, name: "Rolex", price: 150, description: "Luxury watch", image: "/watch5.jpeg" },
    { id: 6, name: "Rolex", price: 150, description: "Luxury watch", image: "/watch6.jpeg" },
  ];

  return (
    <div>
      <div className="watches">
        {watchData.map((watch) => (
          <div key={watch.id} className="watch-card">
            <Image src={watch.image} alt={watch.name} width={200} height={200} />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className="price">${watch.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
