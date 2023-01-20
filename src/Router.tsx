import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Test from "./pages/Test";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
