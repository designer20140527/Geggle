import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export default function Logo({ className = '', showText = true, size = 32 }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image 
        src="/images/logo-transparent.png" 
        alt="Geggle Logo" 
        width={size} 
        height={size} 
        className="object-contain"
      />
      {showText && <span className="font-semibold text-xl" style={{ fontFamily: 'var(--font-poppins)' }}>Geggle</span>}
    </div>
  );
} 