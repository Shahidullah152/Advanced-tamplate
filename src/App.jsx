import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Classes from "./components/Classes/Classes";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Media from "./components/Media/Media";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Recent from "./components/Recents/Recent";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutUs from "./components/About/AboutUs";
import Schedule from "./components/Schedule/Schedule";
import Teachers from "./components/Teachers/Teachers";
import Pricing from "./components/Pricing/Pricing";
import Career from "./components/Career/Career";
import FAQ from "./components/FAQ/FAQ";
import Testimonial from "./components/Testimonial/Testimonial";
import ClassesPage from "./components/Classes/ClassesPage";
import ProgramPage from "./components/Programs/ProgramPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Programs />
                <About />
                <Media />
                <Classes />
                <Testimonials />
                <Team />
                <Recent />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <AboutUs />
              </>
            }
          />
          <Route
            path="/Schedule"
            element={
              <>
                <Schedule />
              </>
            }
          />
          <Route
            path="/ourTeacher"
            element={
              <>
                <Teachers />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <Pricing />
              </>
            }
          />
          <Route
            path="/career"
            element={
              <>
                <Career />
              </>
            }
          />
          <Route
            path="/FAQ"
            element={
              <>
                <FAQ />
              </>
            }
          />
          <Route
            path="/Testimonial"
            element={
              <>
                <Testimonial />
              </>
            }
          />
          <Route
            path="/Classes"
            element={
              <>
                <ClassesPage />
              </>
            }
          />
          <Route
            path="/Programs"
            element={
              <>
                <ProgramPage />
                <Testimonials />
              </>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
