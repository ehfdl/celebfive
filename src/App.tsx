import { useEffect, useState } from "react";
import Router from "../src/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { authService } from "./firebase";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { CustomCursor } from "react-svg-cursor";
import png from "./assets/images/flower.png";

function App() {
  console.warn = console.error = () => {};
  (() => {
    console.warn = console.error = () => {};
  })();

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
      <CustomCursor component={png} width={30} height={30} zIndex={420} />
    </>
  );
}

export default App;
