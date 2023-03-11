import React from "react";
import "../App.css";


function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Lucknow",
    },
    {
      id: 2,
      title: "Srinagar",
    },
    {
      id: 3,
      title: "Bengaluru",
    },
    {
      id: 4,
      title: "Bhopal",
    },
    {
      id: 5,
      title: "Delhi",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 Dnone">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium btn"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
      
    </div>
  );
}

export default TopButtons;
