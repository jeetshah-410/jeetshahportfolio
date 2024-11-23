"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Unreal Engine, Unity Engine</li>
        <li>C++, C#, Java, Python</li>
        <li>Blueprint Visual Scripting</li>
        <li>AI Behavior Trees and State Machines</li>
        <li>Level Design</li>
        <li>Gameplay Mechanics Design</li>
        <li>Physics and Animation Blending</li>
        <li>Optimization</li>
        <li>Multiplayer Deployment</li>
        <li>Mixed Reality</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>B.E. Computer Engineering</li>
        <li>International Institute of Information Technology, Pune</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>Unreal Engine 5 C++ Developer</li>
        <li>Gameplay Ability Systems</li>
        <li></li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Left side with Image */}
        <div>
          <Image
            src="/images/AboutMe.png"
            width={1000}
            height={1000}
            alt="Game developer's workstation setup with coding and level design software open"
          />
        </div>

        {/* Right side with Text, Tabs and Skills */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a dedicated game developer, I specialize in bringing game worlds to life through the art of programming and the intricacies of level design.
            {/* More text */}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}> Certifications </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>

      {/* This is the grey gradient block below the image */}
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 p-8">
        {tab === "skills" && (
          <div className="flex justify-center gap-8">
            {/* Example Logos, replace with your actual logo paths */}
            <Image src="/images/unreal-logo.png" alt="Unreal Engine Logo" width={40} height={40} />
            <Image src="/images/unity-logo.png" alt="Unity Engine Logo" width={40} height={40} />
            <Image src="/images/blender-logo.png" alt="Blender Logo" width={40} height={40} />
            <Image src="/images/cplusplus-logo.png" alt="C++ Logo" width={40} height={40} />
            <Image src="/images/csharp.png" alt="C# Logo" width={40} height={40} />
            <Image src="/images/python-logo.png" alt="Python Logo" width={40} height={40} />
            <Image src="/images/java.png" alt="Java Logo" width={40} height={40} />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
