import './App.css';
import withSplashScreen from "./components/splashscreen";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Writing from "./pages/writing";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="writing" element={<Writing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default withSplashScreen(App);
