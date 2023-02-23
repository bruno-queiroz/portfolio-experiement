import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Skill from "./components/Skills";
import TakeACoffe from "./components/TakeACoffee";
import Testimonials from "./components/Testimonials";
import { atom, useAtom } from "jotai";
import Work from "./components/Work";
import NavigationIndicator from "./components/NavigationIndicator";
import SocialNav from "./components/SocialNav";

type NavigateSections =
  | "home"
  | "about"
  | "work"
  | "skills"
  | "testimonials"
  | "contact";

export const navigateAtom = atom<NavigateSections>("home");

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <SocialNav />
      <About />
      <Work />
      <Skill />
      <Testimonials />
      <TakeACoffe />
      <NavigationIndicator />
    </>
  );
};

export default App;
