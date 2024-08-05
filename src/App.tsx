import {
  CallToAction,
  Footer,
  Header,
  Hero,
  Services,
  TechStack,
} from "./components";

function App() {
  return (
    <div className="content">
      <Header />
      <Hero />
      <TechStack />
      <Services />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
