import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import "./App.css";

import quizData from "./data.json";

function App() {
  return (
    <>
      <Navbar data={quizData} />
      <Home data={quizData} />
      <Footer />
    </>
  );
}

export default App;
