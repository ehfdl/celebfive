import { useEffect, useState } from "react";
import Router from "../src/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { authService } from "./firebase";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

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
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
