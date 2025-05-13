"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type SocialIconProps = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

function SocialIcon({ name, href, icon }: SocialIconProps) {
  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-[#00e6ca]/20 transition-colors duration-300"
    >
      {icon}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0c1827] py-16 border-t border-gray-800/40">
      <div className="container max-w-[1300px] mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Image 
              src="/images/logo-transparent.png" 
              alt="Geggle Logo" 
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#tokenomics" className="text-gray-300 hover:text-white transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-gray-300 hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="flex gap-4">
            <SocialIcon 
              name="Twitter"
              href="https://x.com/Geggle_erc"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8641 10.3937L21.625 1.49998H19.7501L12.9946 9.21043L7.58542 1.49998H1.04169L9.24175 13.1744L1.04169 22.5H2.9167L10.1068 14.3578L15.8084 22.5H22.3522L13.8638 10.3937H13.8641ZM11.0816 13.2979L10.1612 12.0018L3.63983 2.8894H6.69011L11.924 10.2858L12.8444 11.5819L19.7502 21.2268H16.6999L11.0816 13.2983V13.2979Z" fill="currentColor" />
                </svg>
              }
            />
            <SocialIcon 
              name="Telegram"
              href="https://t.me/Geggle_Portal"
              icon={
                <Image 
                  src="/images/telegram.svg"
                  alt="Telegram"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-white invert"
                />
              }
            />
            <SocialIcon 
              name="Dextools"
              href="https://dextools.io"
              icon={
                <Image 
                  src="/images/dextools.svg"
                  alt="Dextools"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-white invert"
                />
              }
            />
            <SocialIcon 
              name="Dexscreener"
              href="https://dexscreener.com"
              icon={
                <Image 
                  src="/images/dexscreener.svg"
                  alt="Dexscreener"
                  width={20}
                  height={20}
                  className="w-5 h-5 text-white"
                />
              }
            />
          </div>
          
          <p className="mt-8 text-gray-400 text-sm">
            © {new Date().getFullYear()} Geggle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 