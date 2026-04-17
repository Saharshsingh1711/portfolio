"use client";

import React from 'react';
import { MessageCircle, Globe, Video, Image as ImageIcon } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero'; // Adjust the import path as needed

import { AnimatedText } from '@/components/ui/animated-underline-text-one';

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PRODUCT', href: '#' },
    { label: 'STORE', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ];

  const socialLinks = [
    { icon: MessageCircle, href: '#' },
    { icon: Globe, href: '#' },
    { icon: Video, href: '#' },
    { icon: ImageIcon, href: '#' },
  ];

  return (
    <MinimalistHero
      logoText="mnmlst."
      navLinks={navLinks}
      mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus."
      readMoreLink="#"
      imageSrc="/port-hero-image.jpeg"
      imageAlt="A portrait of a person in a black turtleneck, in profile."
      overlayText={{
        part1: 'less is',
        part2: (
          <AnimatedText 
            text="more." 
            as="span"
            textClassName="text-7xl font-extrabold text-foreground md:text-8xl lg:text-9xl"
            underlineClassName="text-indigo-500"
            className="inline-block"
          />
        ),
      }}
      socialLinks={socialLinks}
      locationText="Arlington Heights, IL"
    />
  );
};

export default MinimalistHeroDemo;
