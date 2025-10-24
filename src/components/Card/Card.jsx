import React from 'react'


const Hero = () => {
  return (
    <div className=" flex items-center justify-center bg-orange-700 mt-16 mb-16">
      <div className="flex flex-col sm:flex-row gap-8">
        <Card title="Card 1" description="Some description 1" />
        <Card title="Card 2" description="Some description 2" />
        <Card title="Card 3" description="Some description 3" />
      </div>
    </div>
  )
}

export default Hero
