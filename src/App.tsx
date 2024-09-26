import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar, 
  Hero, 
  About,
  Footer, 
  Experience,
  Tech,
  Works,
  Contact,
} from "./components";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { StarsCanvas } from "./components/canvas";
// App
const App = () => {
  const [hide] = useState(true);
  return (
    <BrowserRouter>
    
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero/>
        </div>
        <About/>
        <Experience />
        <Tech />
        <Works />
      </div>
      <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
        <Analytics/>
        <SpeedInsights/>
    </BrowserRouter>
  )
};

export default App;
