import React from 'react';
import homePage3 from '../../assets/images/home-page-3.jpg';
import TypeWriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="home-background flex flex-col flex-grow bg-cover bg-center" style={{backgroundImage: `url(${homePage3})`}}>
        <div className="hero-text typing absolute top-10 left-1/3 transform -translate-x-1 - translate-y-1/2">
          <h1>
            <span>
            <TypeWriter
              onInit={(typewriter) =>{
                typewriter.typeString(`Hi, I'm Eli Pruneda // Full Stack Developer`)
                .callFunction(() =>{
                  console.log('Message typed out!');
                })
                //can look into deleting the text and restarting?
                .start();
              }}  
              />
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

{/* <img src = {homePage3} alt="desktop computer displaying code on some IDE" /> */}
{/* <h1>Eli.</h1>
<p>"The attempt to develop a sense of humor and to see things in a humorous light is some kind of a trick learned while 
  mastering the art of living."</p> */}