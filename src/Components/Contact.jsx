import React from 'react'
import axios from 'axios';
const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [descriptionMessage, setDescriptionMessage] = React.useState('');
  const handleSubmit =async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('https://portfolio-backend-6-e6v0.onrender.com/api/contact', {
        name: e.target.name.value,
        email: e.target.email.value,
       descriptionMessage: e.target.descriptionMessage.value,
      });
      alert('Message sent successfully!');
      console.log('Contact form submitted successfully', response.data);

    }catch(err){
      console.error('Error submitting contact form', err);
    }
  }
  return (
    <div className='pt-16 pb-20 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text text-center font-bold'>Contact Me</h1>
        <hr className="border-t-4 border-cyan-400 w-24 sm:w-32 mx-auto my-3 shadow-lg shadow-cyan-500/30" />
        <p className='text-center text-gray-300 text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto'>
          Whether it’s an opportunity or a quick question, I’m just a message away. Let’s connect!
        </p>
        <div className='flex justify-center items-center w-full'>
          <form onSubmit={handleSubmit} className="w-full max-w-lg border-2 border-cyan-500/80 bg-gray-950 p-5 sm:p-8 rounded-2xl shadow-xl shadow-cyan-500/25">
            <h2 className='text-xl sm:text-2xl mb-6 text-center font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text'>Connect With Me</h2>
            <input type="text" placeholder="Your Name" onChange={(e)=>{setName(e.target.value)}} name="name" required className="bg-gray-900 border border-gray-700 text-white p-3 rounded-xl w-full mb-4 text-xs sm:text-sm focus:outline-none focus:border-cyan-400" />
            <input type="email" placeholder="Your Email" onChange={(e)=>{setEmail(e.target.value)}} name="email" required className="bg-gray-900 border border-gray-700 text-white p-3 rounded-xl w-full mb-4 text-xs sm:text-sm focus:outline-none focus:border-cyan-400" />
            <textarea placeholder="Your Message" onChange={(e)=>{setDescriptionMessage(e.target.value)}} name="descriptionMessage" required className="bg-gray-900 border border-gray-700 text-white p-3 rounded-xl w-full mb-6 text-xs sm:text-sm focus:outline-none focus:border-cyan-400" rows="4"></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-extrabold py-3 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-teal-400/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
    </div>
  )
}

export default Contact