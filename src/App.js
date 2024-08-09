import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navigation from "./assets/Navigation";
import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './assets/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" exact element={<Hero />} />;
        <Route path="/about" exact element={<About />} />;
        <Route path="/projects" exact element={<Projects />} />;
        <Route path="/contact" exact element={<Contact />} />;
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
