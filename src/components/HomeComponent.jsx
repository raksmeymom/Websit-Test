import React from 'react'

const HomeComponent = () => {
  return (
    <div className="relative h-screen w-full">
      <img 
        src="https://i.pinimg.com/736x/b4/29/6e/b4296e026784fb0dd390b8900b6236f4.jpg" 
        alt="Background Image" 
        className="absolute inset-0 w-full h-full object-cover filter blur-sm" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Welcome to My Website!</h1>
        <p className="text-xl text-white mt-4 text-center">E-learning, or electronic learning, <br /> refers to using digital resources such as computers,<br /> tablets, smartphones, and the internet to access educational content  <br /> and engage in learning activities. <br /> It encompasses a variety of methods, tools, <br /> and platforms that allow individuals to learn at their own pace, from anywhere in the world.</p>
      </div>
    </div>
  )
}

export default HomeComponent
