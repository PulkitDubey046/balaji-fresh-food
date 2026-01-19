import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  function navigate(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerOffset = header ? header.offsetHeight : 72;
    const offset =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      headerOffset;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-yellow-50">
      <Header navigate={navigate} />

      <div className="px-4 pt-20 mx-auto md:px-8 max-w-7xl">
        <section id="home">
          <Home onNavigate={navigate} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
