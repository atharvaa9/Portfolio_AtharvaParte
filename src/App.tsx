import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar, Hero
} from "./components";
// App
const App = () => {
  const [hide, setHide] = useState(true);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero/>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
