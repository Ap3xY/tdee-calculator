import { Route, Routes } from "react-router-dom";

import IndexPage from "./pages";
import Result from "./pages/result";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<IndexPage />} path="/About" />
        <Route element={<IndexPage />} path="/FAQ" />
        <Route element={<IndexPage />} path="/Contact" />
        <Route element={<Result />} path="/result" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
