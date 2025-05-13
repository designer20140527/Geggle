"use client";
import Link from 'next/link';
import Logo from './Logo';
import { MovingBorderBox } from './ui/moving-border-box';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* 视频背景 */}
      <video 
        className="video-background"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/video/bgvideo.mp4" type="video/mp4" />
      </video>
      
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-[75%] pt-24 pb-12 lg:py-0">
            <div className="mb-6">
              <MovingBorderBox 
                containerClassName="inline-block mb-4" 
                className="px-4 py-2"
                borderClassName="h-10 w-10 bg-[radial-gradient(#00e6ca_30%,transparent_70%)]"
                duration={5000}
              >
                <Logo size={24} />
              </MovingBorderBox>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-12 leading-tight">
              Redefining Search for the Decentralized Future
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="https://x.com/Geggle_erc" 
                target="_blank"
                className="py-3 px-8 rounded-full bg-[#00a3ff] hover:bg-[#0080e6] text-white transition-all font-medium"
              >
                Twitter
              </Link>
              <Link 
                href="https://t.me/Geggle_Portal" 
                target="_blank"
                className="py-3 px-8 rounded-full bg-[#00e6ca] hover:bg-[#00c5ad] text-white transition-all font-medium"
              >
                Telegram
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[25%]">
            {/* 右侧区域，暂时为空 */}
          </div>
        </div>
      </div>
    </section>
  );
} 