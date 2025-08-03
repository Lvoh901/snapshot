import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navigation from "./assets/Navigation";
import Hero from "./components/Hero";
// import About from './components/About';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './assets/Footer';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App font-sans">
      <Navigation />

      <Routes>
        <Route path="/" exact element={<Hero />} />;
        {/* <Route path="/about" exact element={<About />} />; */}
        {/* <Route path="/projects" exact element={<Projects />} />; */}
        <Route path="/contact" exact element={<Contact />} />;
        <Route path="/gallery" exact element={<Gallery />} />;
        <Route path="*" exact element={<NotFound />} />;
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
