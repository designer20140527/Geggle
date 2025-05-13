import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#0a1220] overflow-hidden" id="about">
      <div className="container max-w-[1300px] mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-10 text-white">
            A Decentralized Search Engine
          </h2>
          
          <div className="mx-auto text-center text-gray-300/90 mb-20 leading-relaxed text-base md:text-lg">
            <p>
              Geggle is the next-generation decentralized search engine, built to prioritize blockchain, cryptocurrency, and decentralized content. Utilizing Crypto GPT for intelligent search curation, Geggle also introduces <strong className="text-white font-medium">Geggle Chain</strong>, a dedicated blockchain that records and indexes decentralized content, ensuring transparency, immutability, and verifiable search results. With a decentralized business model and a chain dedicated to Web3 content, Geggle delivers a user-centric, transparent, and crypto-native search experience.
            </p>
          </div>
          
          <div className="relative w-full">
            <div className="glow-effect absolute -inset-20 opacity-20 rounded-full blur-3xl bg-gradient-to-r from-[#00e6ca] to-[#00a3ff] -z-10"></div>
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#00e6ca] rounded-full opacity-70 blur-[1px] z-10"></div>
            <div className="absolute top-10 right-1/3 w-3 h-3 bg-[#00a3ff] rounded-full opacity-70 blur-[2px] z-10"></div>
            <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-[#00e6ca] rounded-full opacity-70 blur-[1px] z-10"></div>
            <Image
              src="/images/image-1.png"
              alt="Geggle Decentralized Search Engine"
              width={1300}
              height={750}
              className="w-full h-auto relative z-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 