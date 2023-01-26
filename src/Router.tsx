import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import { CustomCursor } from "react-svg-cursor";
// import png from "./assets/images/flower.png";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      {/* <CustomCursor component={png} width={30} height={30} zIndex={420} /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
