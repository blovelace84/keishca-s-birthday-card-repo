import { useState } from "react";
import HomePage from "./pages/HomePage";
import BirthdayCardPage from "./pages/BirthdayCardPage";

function App() {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      {!showCard ? (
        <HomePage onOpen={() => setShowCard(true)} />
      ) : (
        <BirthdayCardPage onClose={() => setShowCard(false)} />
      )}
    </>
  );
}

export default App;
