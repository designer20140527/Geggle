import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex justify-center py-4 mt-5">
      <div className="container">
        <nav className="flex items-center justify-between px-6 py-3 rounded-full border border-gray-800 bg-[#0a1c30]/80 backdrop-blur-sm">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-6">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#tokenomics" className="text-white/80 hover:text-white transition-colors">Tokenomics</Link></li>
              <li><Link href="#roadmap" className="text-white/80 hover:text-white transition-colors">Roadmap</Link></li>
            </ul>
            <Link 
              href="https://docs.geggle.io" 
              target="_blank"
              className="py-2 px-6 rounded-full bg-[#131d2a] hover:bg-[#1c2636] text-white transition-colors border border-gray-700"
            >
              Gitbook
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 
