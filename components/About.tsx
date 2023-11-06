import { Icon } from "@iconify/react";
import React from "react";
import Fade from 'react-reveal/Fade';


function About() {
  return (
    <div className=" flex min-h-screen flex-col w-11/12 md:w-9/12 justify-center items-center">
      <div className=" text-2xl md:text-4xl font-bold mb-20 mt-10 md:mt-2">
        About <span className=" text-gray-600">me</span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center">
      {/* <Fade left> */}
        <div className="w-30">
          <img
            className=" w-30 h-40"
            src="https://res.cloudinary.com/dlzsibwl6/image/upload/v1668021997/ChanceDira3_cwdxum.png"
            // src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674816415/chanceProfile-removebg-preview_velgyl.png'
            alt="image"
          />
        </div>
        {/* </Fade> */}

        {/* <Fade right> */}
        <div className=" text-[#886451] md:w-2/3 mx-2 md:mx-0 text-md mt-10 md:mt-0 md:text-xl md:pl-32 text-justify ">
          <span className="text-gray-600">
            I am a Software Engineer with a love of collaborating with great
            minds in achieving realistic solutions. I graduated from the
            University of Rwanda - College of Science and Technology in 2022
            with a bachelor's degree in Software Engineering. I have experience
            in working with startup and intermediate businesses in Tech. I
            attended Andela, a program that identifies and develops African
            developers to become the best software engineers. I worked on the
            Andela Rwanda internal product, My responsibility in my team was
            front-end development, back-end development, testing coverage,
            resolving conflict, and code reviews.
          </span>
          <br></br>
          <br></br>
          <span className=" text-sm ">
            My skills include: - ReactJs - NextJs - React Native - Tailwind -
            Bootstrap - Typescript - NodeJs - GraphQL - HTML5 & CSS3 - Stripe -
            Socket.io - Apollo Server - Java/Springbot - PHP/Laravel - Figma & UI/UX Design - MongoDB -
            PostgreSQL - MySQL - API integration - REST APIs - Heroku, Netlify,
            and Firebase - Git, Github, Gitlab, Trello, and Jira - web3.js -
            ether.js - Solidity - Truffle - Hardhat - Metamask - Rust
          </span>
        </div>
        {/* </Fade> */}
      </div>
    </div>
  );
}

export default About;
