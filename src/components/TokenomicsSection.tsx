import React from 'react';
import { MovingBorder } from './ui/moving-border';
import { cn } from '@/lib/utils';

type TokenomicsItemProps = {
  title: string;
  value: string;
};

function TokenomicsItem({ title, value }: TokenomicsItemProps) {
  return (
    <div className="bg-[#111b29] rounded-lg p-5 border border-gray-800/40">
      <p className="text-white">
        <span className="font-bold text-lg">{title}</span>: <span className="text-lg md:text-sm">{value}</span>
      </p>
    </div>
  );
}

export default function TokenomicsSection() {
  return (
    <section className="py-28 bg-[#0a1220]" id="tokenomics">
      <div className="container max-w-[1300px] mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-10 text-white">
            Tokenomics
          </h2>
          
          <div className="mx-auto text-center text-gray-300/90 mb-16 leading-relaxed text-base md:text-lg w-full">
            <p>
              Geggle's native token, <span className="text-white font-medium">$GEGGLE</span>, fuels the ecosystem, rewarding users for their contributions and participation in governance. Geggle Chain's infrastructure is secured through staking, node operation, and content indexing, ensuring the longevity of the decentralized search system.
            </p>
          </div>
          
          <div className="w-full">
            <div
              className="relative overflow-hidden bg-transparent border border-gray-600/50 rounded-2xl"
              style={{
                padding: '1px',
              }}
            >
              {/* 移动边框效果层 */}
              <div
                className="absolute inset-0 z-0"
                style={{ borderRadius: 'inherit' }}
              >
                <MovingBorder duration={8000} rx="30%" ry="30%">
                  <div
                    className="h-52 w-52 bg-[radial-gradient(#00e6ca_30%,transparent_70%)] opacity-[0.7]"
                  />
                </MovingBorder>
              </div>
              
              {/* 内层卡片 */}
              <div
                className={cn(
                  "relative z-10 bg-[#0A1220] backdrop-blur-sm rounded-xl p-5",
                )}
                style={{
                  borderRadius: 'calc(1rem * 0.96)',
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <TokenomicsItem 
                    title="Total Supply"
                    value="1 Billion $GEGGLE"
                  />
                  <TokenomicsItem 
                    title="Community Rewards"
                    value="10%"
                  />
                  <TokenomicsItem 
                    title="Staking & Governance"
                    value="10%"
                  />
                  <TokenomicsItem 
                    title="Development & Research"
                    value="15%"
                  />
                  <TokenomicsItem 
                    title="Marketing & Partnerships"
                    value="5%"
                  />
                  <TokenomicsItem 
                    title="Liquidity"
                    value="60%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 