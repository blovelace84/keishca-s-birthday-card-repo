import { useState } from "react";
import HomePage from "./pages/HomePage";
import BirthdayCardPage from "./pages/BirthdayCardPage";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200">
      {!opened ? (
        <HomePage onOpen={() => setOpened(true)} />
      ) : (
        <BirthdayCardPage />
      )}
    </div>
  );
}

export default App;
