import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import HighlightsSection from '../components/HighlightsSection';
import TokenomicsSection from '../components/TokenomicsSection';
import RoadmapSection from '../components/RoadmapSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <HighlightsSection />
      <TokenomicsSection />
      <RoadmapSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
