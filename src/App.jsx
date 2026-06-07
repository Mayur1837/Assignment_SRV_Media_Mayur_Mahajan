
import './App.css'
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { ExhibitionSection } from './components/ExhibitionSection';
import SchoolsSectionRoll from './components/SchoolsSectionRoll';
import { SchoolTypesSection } from './components/SchoolTypesSection';
import { StatsSection } from './components/StatsSection';

function App() {

  return (
    <>
      <SiteHeader />
         <main id="main-content">
        <HeroSection />
        <StatsSection />
        <SchoolsSectionRoll />
        <SchoolTypesSection />
        <ExhibitionSection />
      </main>

      <SiteFooter />

    </>
  )
}

export default App
