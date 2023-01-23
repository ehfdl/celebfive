import { useEffect, useState } from "react";
import Router from "../src/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { authService } from "./firebase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const queryClient = new QueryClient();
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
