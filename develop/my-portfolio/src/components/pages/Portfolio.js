import React from 'react';
import TypeWriter from 'typewriter-effect';
import portfolio1 from '../../assets/images/JATE.jpg'
import portfolio2 from '../../assets/images/AndrewsList.JPG'
import portfolio3 from '../../assets/images/socialmediaAPI.JPG'
import portfolio4 from '../../assets/images/notetaker.JPG'
import portfolio5 from '../../assets/images/WeatherDash.JPG'
import portfolio6 from '../../assets/images/readmegenerator.JPG'

export default function Portfolio() {
  return (
    <div className="hero-text typing top-10">
      <h1>
      <TypeWriter
        onInit={(typewriter) =>{
          typewriter.typeString(`My Portfolio`)
          .callFunction(()=>{
            console.log('Message typed out!');
          })
          .start();
        }}
        />
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <img className="h-auto max-w-full rounded-lg" src={portfolio1} alt="Progressive Web Application Text Editor"/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={portfolio2} alt="Andrew's List"/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={portfolio3} alt="Social Media API Demonstration"/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={portfolio4} alt="Note-Taker Application"/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={portfolio5} alt="Weather Dashboard"/>
    </div>
    <div>
        <img className="h-full max-w-full rounded-lg" src={portfolio6} alt="README Generator"/>
    </div>
      </div>
    </div>
  );
}
