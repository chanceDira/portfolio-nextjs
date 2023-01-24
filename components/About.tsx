import { Icon } from '@iconify/react'
import React from 'react'

function About() {
  return (
    <div className=' flex min-h-screen flex-col w-9/12 justify-center items-center'>

<div className=' text-4xl font-bold mb-20'>About <span className=' text-gray-600'>me</span></div>

      <div className='flex flex-row justify-center items-center'>
        <div className=' text-[#886451] w-2/3 text-xl pr-32 text-justify '>
        <span className='text-gray-600'>I am a Software Engineer with a love of collaborating with great minds in achieving realistic solutions. I graduated from the University of Rwanda - College of Science and Technology in 2022 with a bachelor's degree in Software Engineering. I have experience in working with startup and intermediate businesses in Tech. I attended Andela, a program that identifies and develops African developers to become the best software engineers. 
        I worked on the Andela Rwanda internal product, My responsibility in my team was front-end development, 
        back-end development, testing coverage, resolving conflict, and code reviews.</span>
<br></br>
<br></br>
<span className=' text-sm '>
My skills include:

- ReactJs
- NextJs
- React Native
- Tailwind
- Bootstrap
- Typescript
- NodeJs
- GraphQL
- HTML5 & CSS3
- Stripe
- Socket.io
- Apollo Server
- Figma & UI/UX Design
- MongoDB
- PostgreSQL
- MySQL
- API integration
- REST APIs
- Heroku, Netlify, and Firebase
- Git, Github, Gitlab, Trello, and Jira</span>
        </div>

        <div className='w-30'>
            <img
                className=' w-full h-40'
                src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1668021997/ChanceDira3_cwdxum.png'
                alt='image'
            />
        </div>
        </div>
      
        
    </div>
  )
}

export default About