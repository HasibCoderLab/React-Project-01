// Card.jsx
import React from 'react'

const Card = ({ title, description }) => {
  return (
    <div className="w-[200px] h-[300px] bg-amber-950 rounded-lg p-4 shadow-lg flex flex-col justify-between">
      <h2 className="text-white font-bold text-lg">{title}</h2>
      <p className="text-white text-sm mt-2">{description}</p>
    </div>
  )
}

export default Card
