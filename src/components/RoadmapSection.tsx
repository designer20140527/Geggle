"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type PhaseProps = {
  title: string;
  subtitle: string;
  items: string[];
};

function Phase({ title, subtitle, items }: PhaseProps) {
  return (
    <div className="mb-16 relative">
      <div className="inline-block bg-[#00a3ff] text-[#0a1220] font-medium px-4 py-1 rounded-full mb-4">
        {title}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{subtitle}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300/90 flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00e6ca] mt-2 mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RoadmapSection() {
  const [dotPosition, setDotPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // 重要：确保初始位置为0
    setDotPosition(0);
    
    const handleScroll = () => {
      if (!rightContentRef.current || !sectionRef.current) return;
      
      // 获取section相对于视口的位置
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // 只有当section进入视图时才计算滚动
      if (sectionRect.top < viewportHeight && sectionRect.bottom > 0) {
        // 计算section已滚动的比例
        // 当section顶部刚进入视口底部时为0
        // 当section的Phase 3部分接近视口中央时为1
        let scrollProgress = 0;
        
        // section顶部到视口顶部的距离（负值表示已滚过）
        const topDistance = sectionRect.top;
        
        // 根据section在视口中的位置计算进度
        if (topDistance <= 0) {
          // Section顶部已经滚过视口顶部
          // 计算滚动过的距离占section高度的比例
          const scrolledDistance = Math.abs(topDistance);
          const sectionHeight = sectionRect.height;
          
          // 使用0.4作为系数减慢滚动速度
          scrollProgress = Math.min(scrolledDistance / (sectionHeight * 0.4), 1);
        }
        
        // 更新点的位置
        // 修改这里：减去点的高度，确保点不会超过灰色线的底部
        const maxPosition = contentHeight - 24; // 24px是点的高度加一点余量
        setDotPosition(maxPosition * scrollProgress);
      }
    };
    
    const updateHeights = () => {
      if (rightContentRef.current) {
        const height = rightContentRef.current.clientHeight;
        setContentHeight(height);
        
        // 设置左侧列与右侧内容等高，但在iPad和手机上要适应图片高度
        if (leftColumnRef.current) {
          // 在大屏幕上设置和内容相同高度，在iPad和手机上不设置高度（使其适应内容）
          const isIPadOrMobile = window.innerWidth <= 1024;
          if (!isIPadOrMobile) {
            leftColumnRef.current.style.height = `${height}px`;
          } else {
            leftColumnRef.current.style.height = 'auto';
          }
        }
      }
    };
    
    // 初始化
    updateHeights();
    
    // 使用requestAnimationFrame使滚动更流畅
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', scrollListener);
    window.addEventListener('resize', updateHeights);
    
    // 初始调用一次滚动处理
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('resize', updateHeights);
    };
  }, [contentHeight]);
  
  return (
    <section ref={sectionRef} className="py-28 pb-36 bg-[#0a1220]" id="roadmap">
      <div className="container max-w-[1300px] mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-16">
          Roadmap
        </h2>
        
        {/* 使用媒体查询确保iPad Pro（1024px）也使用iPad布局 */}
        <style jsx global>{`
          @media (max-width: 1024px) {
            .roadmap-layout {
              flex-direction: column;
            }
            .roadmap-image-col {
              width: 100%;
              margin-bottom: 2.5rem;
              height: auto !important;
            }
            .roadmap-timeline {
              display: none;
            }
            .roadmap-content-col {
              width: 100%;
            }
          }
        `}</style>
        
        <div className="roadmap-layout flex flex-col lg:flex-row items-start gap-16">
          {/* 左侧图片 - 45% */}
          <div ref={leftColumnRef} className="roadmap-image-col w-full lg:w-[45%] mb-10 lg:mb-0">
            <div className="lg:sticky lg:top-24">
              <Image 
                src="/images/image-2.png" 
                alt="Geggle Roadmap Visualization" 
                width={500}
                height={500}
                className="w-full md:w-3/5 lg:w-full h-auto rounded-xl object-cover mx-auto md:mx-auto lg:mx-0"
              />
            </div>
          </div>
          
          {/* 中间时间线 - 10% */}
          <div className="roadmap-timeline hidden lg:block lg:w-[10%]">
            <div className="lg:sticky lg:top-24">
              <div className="flex justify-center">
                <div 
                  className="w-px bg-gray-600/40 relative" 
                  style={{ height: `${contentHeight}px` }}
                >
                  <div 
                    className="h-20 w-px rounded-full bg-[radial-gradient(#00e6ca_30%,transparent_70%)] absolute"
                    style={{
                      top: `${dotPosition}px`,
                      transition: 'top 0.5s ease-out'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* 右侧路线图内容 - 45% */}
          <div className="roadmap-content-col w-full lg:w-[45%]" ref={rightContentRef}>
            <Phase 
              title="Phase 1"
              subtitle="Foundation and Token Launch"
              items={[
                "Launch $GEGGLE token",
                "Develop Crypto GPT integration",
                "Establish decentralized search infrastructure",
                "Launch Geggle Chain development",
                "Initial community building"
              ]}
            />
            
            <Phase 
              title="Phase 2"
              subtitle="Geggle Chain Integration and Community Engagement"
              items={[
                "Expand Geggle Chain nodes globally",
                "Launch staking for node operators and search contributors",
                "Enable on-chain search result verification",
                "Develop user-friendly interfaces for Geggle Chain search functions"
              ]}
            />
            
            <Phase 
              title="Phase 3"
              subtitle="Ecosystem Expansion"
              items={[
                "Expand Geggle Chain's content indexing capabilities",
                "Integrate with additional Web3 and blockchain platforms",
                "Broaden token utility within the Geggle ecosystem, with increased on-chain governance"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 