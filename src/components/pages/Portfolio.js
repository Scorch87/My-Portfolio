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
        <h2>A Progressive Web Application: Text Editor</h2>
        <a href = "https://ancient-eyrie-07043.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img className="h-auto max-w-full rounded-lg" src={portfolio1} alt="Progressive Web Application Text Editor"/>
        </a>
        <a href = "https://github.com/Scorch87/Web-Based-Text-Editor" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
    </div>
    <div>
    <h2>AndrewsList: A Home Improvement Marketplace</h2>
      <a href = "https://andrews-list.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <img className="h-auto max-w-full rounded-lg" src={portfolio2} alt="Andrew's List"/>
      </a>
      <a href = "https://github.com/AMess33/AndrewsList" target="_blank" rel="noopener noreferrer">
          View on GitHub
      </a>
    </div>
    <div>
    <h2>NoSQL API Implementation: Social Media API</h2>
      <a href = "https://drive.google.com/file/d/15xoKITLN8gTCD2bxIBSBaca0NKN-2iPp/view" target="_blank" rel="noopener noreferrer">
        <img className="h-auto max-w-full rounded-lg" src={portfolio3} alt="Social Media API Demonstration"/>
      </a>
      <a href = "https://github.com/Scorch87/Social-Media-API" target="_blank" rel="noopener noreferrer">
          View on GitHub
      </a>
    </div>
    <div>
        <h2>ExpressJS Back End: Note Taker</h2>
        <img className="h-auto max-w-full rounded-lg" src={portfolio4} alt="Note-Taker Application"/>
      
      <a href = "https://github.com/Scorch87/Note-Taker" target="_blank" rel="noopener noreferrer">
          View on GitHub
      </a>
    </div>
    <div>
      <h2>Third-Party API Use- Weather Dashboard</h2>
      <a href = "https://scorch87.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
        <img className="h-auto max-w-full rounded-lg" src={portfolio5} alt="Weather Dashboard"/>
      </a>
      <a href = "https://github.com/Scorch87/Weather-Dashboard" target="_blank" rel="noopener noreferrer">
          View on GitHub
      </a>
    </div>
    <div>
      <h2>Command Line Interface Application: README Generator</h2>
      <a href = "https://drive.google.com/file/d/1hF6dGCxO6xh7wKsWTE48fBp3XXuVLbM-/view" target="_blank" rel="noopener noreferrer">
        <img className="h-80% max-w-full rounded-lg" src={portfolio6} alt="README Generator"/>
      </a>
      <a href = "https://github.com/Scorch87/Readme-Generator" target="_blank" rel="noopener noreferrer">
          View on GitHub
      </a>
    </div>
      </div>
    </div>
  );
}
