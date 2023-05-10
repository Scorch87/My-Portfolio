import React from 'react';
import TypeWriter from 'typewriter-effect';

export default function Contact() {
  return (
    <div className="hero-text typing top-10">
      <h1>
        <TypeWriter
        onInit={(typewriter) =>{
          typewriter.typeString(`Contact Page`)
          .callFunction(()=>{
            console.log('Message typed out!');
          })
          .start();
        }}
        />
      </h1>
      
      
      <div class="mb-6">
        <label for="name-success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label>
        <input type="text" id="name-success" class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Your name here"/>
        <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Input appears to be valid!</p>
      </div>
      <div class="mb-6">
        <label for="email-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Your email</label>
        <input type="text" id="email-error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="Your email here"/>
        <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Invalid email address!</p>
      </div>
      
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send a note..."/>


    </div>
  );
}
