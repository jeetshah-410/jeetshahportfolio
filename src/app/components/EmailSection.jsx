"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const GitHubIcon = "/icons8-github.svg";
  const LinkedinIcon = "/icons8-linkedin-30.svg";

  return (
    <section id='contact' className="flex flex-col items-center gap-6 py-12">
      <h5 className="text-xl font-bold text-gray-200">Let's Connect</h5>

      {/* Social Icons */}
      <div className="socials flex gap-4">
        {/* GitHub Icon with Gradient Border */}
        <Link href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <div className="icon-wrapper">
            <div className="icon-container">
              <Image src={GitHubIcon} alt="GitHub Icon" width={30} height={30} />
            </div>
          </div>
        </Link>

        {/* LinkedIn Icon with Gradient Border */}
        <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <div className="icon-wrapper">
            <div className="icon-container">
              <Image src={LinkedinIcon} alt="LinkedIn Icon" width={30} height={30} />
            </div>
          </div>
        </Link>
      </div>

      {/* Contact Info */}
      <div className="contact-info text-center">
        <p className="text-gray-200">
          <span className="font-bold">Email:</span> jeetshah4103@gmail.com
        </p>
        <p className="text-gray-200">
          <span className="font-bold">Phone:</span> +91 7822080576
        </p>
        <p className="text-gray-200">
          <span className="font-bold">City:</span> Pune, India
        </p>
      </div>

      {/* Styling */}
      <style jsx>{`
        .icon-wrapper {
          background: linear-gradient(to right, #2563eb, #14b8a6, #22c55e); /* Gradient Border */
          padding: 3px; /* Space for the border */
          border-radius: 50%; /* Circular border */
        }

        .icon-container {
          background: white; /* White background for the icon */
          border-radius: 50%; /* Circular shape */
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          transition: transform 0.2s ease-in-out; /* Animation on hover */
        }

        .icon-wrapper:hover .icon-container {
          transform: scale(1.1); /* Slight zoom effect */
        }
      `}</style>
    </section>
  );
};

export default EmailSection;
