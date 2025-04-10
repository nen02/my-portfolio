import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroParticles from "./HeroParticles";
import Header from "./Header";

function Content() {
  return (
    <div className="max-w-screen-lg container mx-auto pt-4 pb-12 px-5 max-sm:pb-10">
      <img
        src="/images/profile.jpg"
        alt="profile"
        className="rounded-full h-44 mx-auto mb-7 max-sm:h-32"
      />
      <h1 className="text-3xl text-center md:max-w-lg px-5 mx-auto font-bold mb-8 max-sm:text-2xl">
        Bringing Ideas to Life: Crafting Innovative Solutions.
      </h1>
      <div className="flex justify-center">
        <a
          href="mailto:riverarenen02@gmail.com"
          className="email-button text-lg max-sm:text-base"
        >
          <span className="text">
            <FontAwesomeIcon beat icon={faPaperPlane} className="mr-3 " />
            Email Me
          </span>
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero-section"
      className="bg-[#F6F5F4] border-solid border-b-[1px] border-b-gray-300 relative overflow-hidden"
    >
      <HeroParticles />
      <div className="relative top-0 left-0 z-10">
        <Header />
        <Content />
      </div>
    </section>
  );
}

export default Hero;
