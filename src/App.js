import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Auth/Signin";
import Home from "./pages/main/Home";
import About from './pages/main/About';
import Signup from './pages/Auth/Signup';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Signin />} path="/signin" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
      </Routes>
    </div>
  );
}

export default App;
