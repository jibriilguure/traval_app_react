import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Service from "./components/service";
import Tours from "./components/tours";

function App() {
  console.log("jibriilGuure");
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Service />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
