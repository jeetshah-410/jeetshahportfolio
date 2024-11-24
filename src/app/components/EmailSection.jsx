"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const GitHubIcon = "/icons8-github.svg";
  const LinkedinIcon = "/icons8-linkedin-30.svg";

  return (
    <section id="contact" className="flex flex-col items-center gap-4 py-8 px-4">
      <h5 className="text-lg sm:text-xl font-bold text-gray-200">Let us Connect</h5>

      {/* Social Icons */}
      <div className="socials flex gap-4">
        {/* GitHub Icon */}
        <Link href="https://github.com/jeetshah-410" target="_blank" rel="noopener noreferrer">
          <div className="icon-wrapper">
            <div className="icon-container">
              <Image src={GitHubIcon} alt="GitHub Icon" width={25} height={25} />
            </div>
          </div>
        </Link>
        {/* LinkedIn Icon */}
        <Link href="https://linkedin.com/in/jeet-shah-b2a845254" target="_blank" rel="noopener noreferrer">
          <div className="icon-wrapper">
            <div className="icon-container">
              <Image src={LinkedinIcon} alt="LinkedIn Icon" width={25} height={25} />
            </div>
          </div>
        </Link>
      </div>

      {/* Contact Info */}
      <div className="contact-info text-center">
        <p className="text-sm sm:text-base text-gray-200">
          <span className="font-bold">Email:</span> jeetshah4103@gmail.com
        </p>
        <p className="text-sm sm:text-base text-gray-200">
          <span className="font-bold">Phone:</span> +91 7822080576
        </p>
        <p className="text-sm sm:text-base text-gray-200">
          <span className="font-bold">City:</span> Pune, India
        </p>
      </div>

      {/* Styling */}
      <style jsx>{`
        .icon-wrapper {
          background: linear-gradient(to right, #2563eb, #14b8a6, #22c55e);
          padding: 3px;
          border-radius: 50%;
        }
        .icon-container {
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          transition: transform 0.2s ease-in-out;
        }
        .icon-wrapper:hover .icon-container {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default EmailSection;
