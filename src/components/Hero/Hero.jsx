// Hero.jsx
import React from 'react'
import Card from '../Card/Card'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-sky-700 flex items-center justify-center'>
      <div className='flex gap-8'>
        <Card title="Card 1" description="Some description 1" />
        <Card title="Card 2" description="Some description 2" />
        <Card title="Card 3" description="Some description 3" />
      </div>
    </div>
  )
}

export default Hero
