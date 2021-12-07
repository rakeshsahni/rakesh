import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import CP from "./components/cp/CP";
import Social from "./components/social/Social";
import Info from "./components/info/Info";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Info */}
      <Info />

      {/* Projects */}
      <Projects />

      {/* CP */}
      <CP />

      {/* Social */}
      <Social />

      <Footer />
      {/* Footer */}
      {/* </div> */}
    </div>
  );
}

export default App;
