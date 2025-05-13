"use client";

import React from 'react';
import Image from 'next/image';
import { MovingBorderBox } from './ui/moving-border-box';

// 定义highlight卡片组件
interface HighlightCardProps {
  iconSrc: string;
  title: string;
  description: string;
  iconAlt?: string;
}

function HighlightCard({ iconSrc, title, description, iconAlt = "Feature icon" }: HighlightCardProps) {
  return (
    <div className="bg-[#0c1827] rounded-xl p-8 flex flex-col h-full border border-gray-800/40">
      <div className="mb-6">
        <MovingBorderBox 
          containerClassName="inline-block mb-2" 
          className="p-0 overflow-hidden"
          borderClassName="h-14 w-14 bg-[radial-gradient(#00e6ca_30%,transparent_70%)] opacity-[0.7]"
          duration={5000}
          borderRadius="12px"
        >
          <div className="w-16 h-16 rounded-xl overflow-hidden">
            <Image 
              src={iconSrc} 
              alt={iconAlt} 
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
        </MovingBorderBox>
      </div>
      <h3 className="text-white text-xl font-medium mb-4">{title}</h3>
      <p className="text-gray-300/90 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function HighlightsSection() {
  return (
    <section className="py-28 bg-[#192130]">
      <div className="container max-w-[1300px] mx-auto px-4">
        {/* 使用媒体查询确保iPad Pro（1024px）也使用iPad布局 */}
        <style jsx global>{`
          @media (max-width: 1024px) {
            .highlights-layout {
              flex-direction: column;
            }
            .highlights-title {
              width: 100%;
              margin-bottom: 2.5rem;
            }
            .highlights-grid {
              width: 100%;
            }
          }
        `}</style>
        
        <div className="highlights-layout flex flex-col lg:flex-row gap-10">
          {/* 左侧标题 - 20% */}
          <div className="highlights-title w-full lg:w-1/5 mb-10 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-semibold text-white sticky top-24 text-center lg:text-left">
              Highlights
            </h2>
          </div>
          
          {/* 右侧卡片网格 - 80% */}
          <div className="highlights-grid w-full lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HighlightCard 
              iconSrc="/images/icon-1.png"
              iconAlt="Crypto-Focused Results Icon"
              title="Crypto-Focused Results"
              description="Geggle enhances search results by prioritizing blockchain and decentralized content. When users search for crypto-related topics, Geggle ensures the most relevant and authoritative sources are displayed first."
            />
            
            <HighlightCard 
              iconSrc="/images/icon-2.png"
              iconAlt="Powered by Crypto GPT Icon"
              title="Powered by Crypto GPT"
              description="Leveraging advanced machine learning models specifically designed for the crypto world, Crypto GPT filters, ranks, and refines search results based on decentralization values and Web3 principles."
            />
            
            <HighlightCard 
              iconSrc="/images/icon-3.png"
              iconAlt="Decentralized Model Icon"
              title="Decentralized Model"
              description="Geggle operates with a decentralized approach where users, content creators, and node operators participate in decision-making, promoting transparency and removing reliance on centralized entities."
            />
            
            <HighlightCard 
              iconSrc="/images/icon-4.png"
              iconAlt="Privacy-Centric Icon"
              title="Privacy-Centric"
              description="With user privacy at the forefront, Geggle eliminates traditional data collection practices, ensuring no personal data is harvested or tracked."
            />
            
            <HighlightCard 
              iconSrc="/images/icon-5.png"
              iconAlt="Incentivized Ecosystem Icon"
              title="Incentivized Ecosystem"
              description="Users and contributors can earn tokens by contributing to the ecosystem, whether through content curation, running nodes, or providing feedback on search improvements."
            />
            
            <HighlightCard 
              iconSrc="/images/icon-6.png"
              iconAlt="Geggle Chain Integration Icon"
              title="Geggle Chain Integration"
              description="Geggle Chain serves as a dedicated blockchain that indexes decentralized content, ensuring all search results are verified on-chain. This guarantees transparency, immutability, and credibility, making search results tamper-proof and highly reliable."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
