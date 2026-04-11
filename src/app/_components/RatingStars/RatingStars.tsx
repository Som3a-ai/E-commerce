import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


export default function RatingStars({rating}: {rating : number} ) {
   const stars = [];

 
  const fullStars = Math.floor(rating);

  // decimal part
  const decimal = rating - fullStars;

  
  const hasHalfStar = decimal >= 0.5;

  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
  }

  // half star
  if (hasHalfStar && stars.length < 5) {
    stars.push(
      <FaStarHalfAlt key="half" className="text-yellow-400" />
    );
  }

  // empty stars
  while (stars.length < 5) {
    stars.push(
      <FaRegStar key={`empty-${stars.length}`} className="text-gray-300" />
    );
  }

  return <div className="flex">{stars}</div>;
};

