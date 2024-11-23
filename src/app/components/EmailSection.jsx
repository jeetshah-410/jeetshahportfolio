import React from 'react'
import LinkedinIcon from "/public/images/icons8-linkedin-30.svg";
import GitHubIcon from "public/images/icons8-github.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-700 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4  -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'><h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I'm currently looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best to get back 
                to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="github.com/jeetshah-410">
                    <Image src={GitHubIcon} alt='GitHub Icon'></Image>
                </Link>
                <Link href="www.linkedin.com/in/jeet-shah-b2a845254">
                    <Image src={LinkedinIcon} alt='Linkedin Icon'></Image>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col gap-6'>
                <div className='mb-6'>
                    <label htmlFor="email" className='text-white block text-sm font-medium mb-2'>Your email</label>
                    <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] tetxt-gray-100 text-sm rounded-lg block w-full p-2.5' type="email" id='email' required placeholder='youremail@mail.com'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor="subject" className='text-white block text-sm font-medium mb-2'>Subject</label>
                    <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] tetxt-gray-100 text-sm rounded-lg block w-full p-2.5' type="text" id='subject' required placeholder='Just saying hi!'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor="message" className='text-white block text-sm font-medium mb-2'>Message</label>
                    <textarea name="message" id="message" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] tetxt-gray-100 text-sm rounded-lg block w-full p-2.5' required placeholder="Let's talk about..."></textarea>
                </div>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 hover:bg-slate-300 text-white">Submit</button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection