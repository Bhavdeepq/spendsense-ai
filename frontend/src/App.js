import { useState } from "react";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <Dashboard />
      ) : (
        <Signup onSignup={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default App;