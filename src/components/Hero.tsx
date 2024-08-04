import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
    <section
      id="hero-section"
      className="bg-[#F6F5F4] rounded-b-[120px] border-solid border-b-[1px] border-b-slate-300"
    >
      <div className="max-w-screen-md container mx-auto py-16 px-5">
        <img
          src="/images/profile.png"
          alt="profile"
          className="rounded-full h-52 mx-auto mb-7"
        />
        <h1 className="text-3xl text-center md:max-w-lg px-5 mx-auto font-bold mb-8">
          Bringing Ideas to Life: Crafting Innovative Solutions.
        </h1>
        <div className="flex justify-center">
          <a
            href="mailto:riverarenen02@gmail.com"
            className="email-button text-lg"
          >
            <span className="top-key"></span>
            <span className="text">
              <FontAwesomeIcon
                beat
                icon={faPaperPlane}
                size="lg"
                className="mr-3 "
              />
              Email Me
            </span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
