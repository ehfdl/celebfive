import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommentsList from "./components/CommentsList";

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
        <Route path="/commentsList" element={<CommentsList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
