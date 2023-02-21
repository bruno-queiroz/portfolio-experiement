import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Skill from "./components/Skills";
import TakeACoffe from "./components/TakeACoffee";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Work />
      <Skill />
      <Testimonials />
      <TakeACoffe />
    </>
  );
};

export default App;
