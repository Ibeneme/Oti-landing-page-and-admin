import React from "react";
import Hero from "./HeroPage/Hero";
import SectionA from "./Section/Section.a/Section.a";
//t SectionD from "./Section/Section.d/SectionD";
import Footer from "./Footer/Footer";
// import Navbar from "./Navbar/Navbar";
import NewHero from "./HeroPage/NewHero";
import Lastsection from "./HeroPage/LastSection";
import FAQSection from "./HeroPage/FAQs";
// import NewHero from "./HeroPage/NewHero";

const LandingPageIndex: React.FC = () => {
  return (
    <div style={{ backgroundColor: `var(--darkBlue)` }}>
      {/* <div style={{ backgroundColor: "#fff3e4" }}></div> */}
      <div style={{ zIndex: 1 }}>
        {/* <Hero /> */}

        <Hero />
      </div>
      <div style={{ zIndex: 1 }}>
        <SectionA />
      </div>
      <div style={{ zIndex: 1 }}>
        <NewHero />
      </div>
      <div style={{ zIndex: 1 }}>
        <FAQSection />
      </div>
      <div style={{ zIndex: 1 }}>
        <Lastsection />
      </div>
      {/*    <div style={{ zIndex: 1 }}>
        <SectionC />
      </div>
 <div style={{ zIndex: 1 }}>
        <SectionD />
      </div> */}
      <div style={{ zIndex: 1 }}>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPageIndex;
