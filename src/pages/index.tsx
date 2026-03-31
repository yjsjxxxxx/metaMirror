import { useState } from "react";
import Entrance from "../components/Index/Entrance";
import LandingPage from "../components/Index/LandingPage";

export default function App() {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <main className="w-full  bg-[#0a1a2a] relative top-20">
      {!isEntered ? (
        <Entrance onEnter={() => setIsEntered(true)} />
      ) : (
        <LandingPage />
      )}
    </main>
  );
}
