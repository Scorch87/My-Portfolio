import React from 'react';
import TypeWriter from 'typewriter-effect';
import eli1 from '../../assets/images/wedding.jpg'
import eli2 from '../../assets/images/broncos.jpg'
import eli3 from '../../assets/images/family.jpg'

export default function About() {
  return (
    <div className="about-content">
      <h1><TypeWriter
              onInit={(typewriter) =>{
                typewriter.typeString(`A little bit about me:`)
                .callFunction(() =>{
                  console.log('Message typed out!');
                })
                // .pauseFor(2500)
                // typewriter.typeString(`\ntest test test`)
                //can look into deleting the text and restarting?
                .start();
              }}  
              />
        </h1>
      <p>
        <TypeWriter
              onInit={(typewriter) =>{
                typewriter.pasteString(`I'm an avid learner with a growth mindset. 
                I'm a first generation immigrant to the United States-- 
                born in Mexico and naturalized as a U.S. citizen. 
                My professional roots lie in education- 
                mentorship is a passion of mine and I'm inspired by helping others 
                realize their potential. Working in higher education at Benedictine College 
                re-ignited my convictions to pursue my craft in leadership and to share 
                the lessons with others. In keeping with my nature to seek out new challenges,
                 I'm branching out to transport my skillset into the technology sector. 
                 I'm equipped to provide short-term and strategic input to whatever team 
                 I belong to-- as a learner, follower, and a leader.`)
                .pauseFor(1000)
                 .callFunction(() =>{
                  console.log('Message typed out!');
                  
                })
                //can look into deleting the text and restarting?
                .start();
              }}  
              options={{
                typeSpeed:100
              }}
        />
      </p>
      <div className="grid grid-cols-3 grid-flow-col gap-4">
        <img className="object-cover rounded-full w-96 h-96" src={eli1} alt="Eli dressed in a gray suit"/>
        <img className="object-cover rounded-full w-96 h-96" src={eli2} alt="Eli and his wife wearing Denver Broncos jerseys"/>
        <img className="object-cover rounded-full w-96 h-96" src={eli3} alt="Eli and his wife who is holding their baby"/>

      </div>
    </div>
  );
}
