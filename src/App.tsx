import Router from "../src/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import { CustomCursor } from "react-svg-cursor";
import png from "./assets/images/flower.png";

function App() {
  console.warn = console.error = () => {};
  (() => {
    console.warn = console.error = () => {};
  })();

  const queryClient = new QueryClient();

  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </ThemeProvider>
      <CustomCursor component={png} width={30} height={30} zIndex={1000} />
    </>
  );
}

export default App;
