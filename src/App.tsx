import {
  CallToAction,
  Experience,
  Footer,
  Hero,
  Services,
  TechStack,
} from "./components";

function App() {
  return (
    <div className="content">
      <Hero />
      <Experience />
      <TechStack />
      <Services />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
