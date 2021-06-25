import React from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./components/globalStyles";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";

function App() {
  //   const [isOpen, setUsOpen] = useState(false);

  //   const toggle = () => {
  //     setIsOpen(!isOpen);
  //   };
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
