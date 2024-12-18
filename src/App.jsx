import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0  bg-gradient-to-tr from-[#9ca3af] to-[#dbdfe5]">
        <Navbar />
        <Hero />
        <About />
        <Works />
        <Tech />
        <Experience />
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
