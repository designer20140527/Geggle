"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
};

function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
  return (
    <div className={cn(
      "border-b border-gray-700/30 last:border-b-0",
      index === 0 ? "" : ""
    )}>
      <button 
        className="w-full flex items-center justify-between py-6 text-left"
        onClick={onClick}
      >
        <h3 className="text-xl font-medium text-white">{index + 1}. {question}</h3>
        <div className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300",
          isOpen ? "bg-[#00a3ff]" : "bg-[#00e6ca]"
        )}>
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "transition-transform duration-300",
              isOpen ? "rotate-45" : ""
            )}
          >
            <path 
              d="M6 0V12M0 6H12" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>
      
      <div 
        className={cn(
          "max-h-0 overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-gray-300/90 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqItems = [
    {
      question: "What is Geggle?",
      answer: "Geggle is a decentralized search engine focusing on crypto and Web3 content. Unlike traditional search engines, Geggle prioritizes blockchain and decentralized content, ensuring that users receive the most relevant and authoritative information in the crypto space."
    },
    {
      question: "What is the Geggle Chain?",
      answer: "Geggle Chain is a dedicated blockchain that indexes decentralized content and verifies search results on-chain. It uses a network of node operators who maintain the blockchain and contribute to the search infrastructure. This ensures transparency, immutability, and credibility of search results."
    },
    {
      question: "How does Geggle's decentralized model work?",
      answer: "Geggle's decentralized model operates through a distributed network of nodes that collectively maintain the search index and verify results. Node operators stake $GEGGLE tokens to participate in the network, and users contribute through content curation and feedback. This approach removes central points of control and creates a community-governed search ecosystem."
    },
    {
      question: "What are the benefits of holding $GEGGLE?",
      answer: "Holding $GEGGLE tokens provides several benefits including governance rights to vote on protocol upgrades, staking rewards for securing the network, access to premium features, participation in content curation rewards, and potential token value appreciation as the ecosystem grows."
    },
    {
      question: "How does Geggle prioritize crypto content?",
      answer: "Geggle uses specialized algorithms and the Crypto GPT model that are specifically trained to understand and index blockchain and Web3 content. The system analyzes content credibility, relevance, and decentralization factors to ensure that quality crypto-related information is prioritized in search results."
    },
    {
      question: "How can I contribute to Geggle?",
      answer: "You can contribute to Geggle by operating a node (requires staking $GEGGLE), participating in content curation by providing feedback on search results, developing applications using Geggle's API, promoting the platform, or submitting improvement proposals through the governance system."
    },
    {
      question: "How does Geggle ensure privacy?",
      answer: "Geggle ensures privacy by not collecting or storing personal data, implementing end-to-end encryption for searches, allowing anonymous searches without login requirements, and operating through a decentralized infrastructure that prevents centralized data collection. Unlike traditional search engines, Geggle does not build user profiles or sell data to advertisers."
    }
  ];
  
  return (
    <section className="py-28 bg-[#192130]">
      <div className="container max-w-[1300px] mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-16">
          FAQ
        </h2>
        
        <div className="bg-[#0c1827] rounded-xl border border-gray-800/40 overflow-hidden p-4 md:p-6">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 