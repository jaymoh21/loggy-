import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Ticker from "./Ticker.jsx";
import About from "./About.jsx";
import Stats from "./Stats.jsx";
import Services from "./Services.jsx";
import Testimonials from "./Testimonials.jsx";
import Cta from "./Cta.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Ticker />
      <Hero />

      <main>
        <About />
        <Stats />
        <Services />
        <Testimonials />
      </main>
      <Cta />
      <Footer />
    </div>
  );
}
