import { useEffect } from "react";
import ContactExpert from "./components/ContactExpert";
import AppHeader from "./components/header/AppHeader";
import HeroSection from "./components/HeroSection";
import Program from "./components/program/Program";
import ReferWays from "./components/referway/ReferWays";

function App() {
  useEffect(() => {
    confirm(
      "If you Have account go for 'Login' other wise do 'signup' without login/signup you cant do refers."
    );
  }, []);
  return (
    <>
      <div>
        <ContactExpert />
        <AppHeader />
        <HeroSection />
        <ReferWays />
        <Program />
      </div>
    </>
  );
}

export default App;
