import React from 'react';
import logo  from './assets/bilkulPakkaWalaLogo.jpg';
import "./App.css"
import banner from "./assets/neaoun.svg"
import team from "./assets/teamFr.png"
const HeroButton = ({ text, bgColor, link }) => {
  const colorClasses = {
    purple: "bg-purple",
    skyblue: "bg-skyblue",
    orange: "bg-orange",
  };

  const colorClass = colorClasses[bgColor] || "bg-secondary";
  return (
    <a
      href={link}
      className={`${colorClass} text-primary px-4 py-2 rounded-full font-black text-2xl md:text-xl text-center`}
    >
      {text}
    </a>
  );
};


const App = () => {
  return (<div className="upper">
    
      <>
      <div className="flex flex-col md:flex-row lg:flex-row h-screen">
      <div className={` flex-1 flex items-center justify-center p-16`}>
        <img src={logo} alt="Logo" className=" h-full" />
      </div>

      <div className=" flex-1 flex flex-col items-center justify-center p-16">
      <img src={banner} alt="" class="w-full md:w-3/4" />
      <img
          src={team}
          alt=""
          class="mt-8"
        />
        <div className="flex  mt-12 md:mt-18 flex-col gap-6 md:flex-row">
          <HeroButton text="Become an Investor!" bgColor="purple" link="/" />
          <div className="border border-[#000000]/[0.2] w-3/4 mx-auto md:w-0.5 md:h-12 h-0.5"></div>
          <HeroButton text="Register Now!"  bgColor="skyblue" link="/" />
          <div className="border border-[#000000]/[0.2] w-3/4 mx-auto md:w-0.5 md:h-12 h-0.5"></div>
          <HeroButton text="Career Opportunities" bgColor="orange" link="/" />
        </div>
      </div>
    </div>
      </>
  </div>
  );
};

export default App;