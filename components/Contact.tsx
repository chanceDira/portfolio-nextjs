import React, { useState } from 'react'

function Contact() {

  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setTimeout(() => {
      setEmail('')
      setSubject('')
      setMessage('')
    }, 2000)
  }

  return (
    <div className='w-full flex md:min-h-screen flex-col justify-center items-center '>
    <div className=' text-2xl md:text-4xl font-bold'>Get in <span className=' text-gray-600'>touch</span></div>
    <div className='flex flex-col  w-full justify-center items-center my-4 md:my-20 md:px-24'>
        
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex flex-col'>
                <label>Email</label>
                <input 
                  type='text' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='mt-2 border-2 px-2 py-1 rounded-md outline-none focus:border-[#886451]' />
              </div>
              <div className=' flex flex-col'>
                <label>Subject</label>
                <input 
                  type='text'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)} 
                  className='mt-2 border-2 px-2 py-1 rounded-md outline-none focus:border-[#886451]' />
              </div>
            </div>
            <div className='flex flex-col mt-4'>
              <label>Message</label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='mt-2 h-40 border-2 p-2 rounded-md outline-none focus:border-[#886451]'></textarea>
            </div>
            <button type='submit' className=' bg-[#886451] hover:bg-[#B18974] text-white cursor-pointer w-20 mx-auto flex justify-center items-center p-2 rounded-md mt-4'>
              Send
            </button>
          </div>
        </form>

     
      
      
    </div>
</div>
  )
}

export default Contact