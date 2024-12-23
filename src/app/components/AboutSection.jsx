"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc ml-4">
        <li>Unreal Engine, Unity Engine</li>
        <li>C++, C#, Java, Python</li>
        <li>Blueprint Visual Scripting</li>
        <li>AI Behavior Trees and State Machines</li>
        <li>Level Design</li>
        <li>Gameplay Mechanics Design</li>
        <li>Physics and Animation Blending</li>
        <li>Multiplayer Deployment</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc ml-4">
        <li>B.E. Computer Engineering</li>
        <li>International Institute of Information Technology, Pune</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc ml-4">
        <li>Unreal Engine 5 C++ Developer</li>
        <li>Gameplay Ability Systems</li>
      </ul>
    ),
  },
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
                src="/Setup.jpg"
                width={1000}
                height={1000}
                alt="Game developer's workstation setup"
                className="mx-auto max-w-[80%]"
            />
        </div>

        {/* Right side with Text */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-sm sm:text-base">
            As a dedicated game developer, I specialize in bringing game worlds to life through the art of programming and the intricacies of level design.
            </p>
            <div className="flex flex-col sm:flex-row justify-start mt-8">
                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                    Skills
                </TabButton>
                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                    Education
                </TabButton>
                <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                    Certifications
                </TabButton>
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
    </div>

    {/* Logo Section */}
    <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 p-8">
        <div className="flex justify-center gap-4 sm:gap-8">
            {[
                { src: "/images/unreal-logo.png", alt: "Unreal Engine", tooltip: "Unreal Engine" },
                { src: "/images/unity-logo.png", alt: "Unity Engine", tooltip: "Unity Engine" },
                { src: "/images/blender-logo.png", alt: "Blender", tooltip: "Blender" },
                { src: "/images/cplusplus-logo.png", alt: "C++", tooltip: "C++" },
                { src: "/images/csharp.png", alt: "C#", tooltip: "C#" },
                { src: "/images/python-logo.png", alt: "Python", tooltip: "Python" },
            ].map(({ src, alt, tooltip }, index) => (
                <div key={index} className="relative group">
                    <Image src={src} alt={alt} width={40} height={40} />
                    <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {tooltip}
                    </span>
                </div>
            ))}
        </div>
    </div>
  </section>

  );
};

export default AboutSection;
