import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollIndicator } from "./ui";

// ============================================================================
// Hero Content
// ============================================================================

function HeroContent() {
  return (
    <div className="max-w-6xl container mx-auto px-6 md:px-5 py-20 relative z-10">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-8">
            {/* Profile image */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-3xl blur-2xl" />
            <img
              src="/images/profile.jpg"
              alt="profile"
              className="relative mx-auto rounded-full w-40 h-40 object-cover ring-2 ring-purple-500/50 ring-offset-2 ring-offset-black"
            />
            {/* Chat bubble - positioned at top-right of image */}
            <div className="hidden sm:block absolute -top-5 -right-32 animate-float-gentle z-10">
              <div className="relative bg-purple-500 text-white dark:text-white px-4 py-2 rounded-2xl text-sm font-medium whitespace-nowrap shadow-lg shadow-purple-500/30">
                {/* Bubble arrow - pointing down-left from bottom-left */}
                <div className="absolute bottom-[-3px] left-4 transform translate-y-1 w-0 h-0 border-t-[20px] border-t-purple-500 border-r-[20px] border-r-transparent" />
                <span className="pl-2">Knock knock. Me. Nen 😄</span>
              </div>
            </div>
          </div>

          {/* Availability badge */}
          <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">Open to opportunities</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-white dark:via-white dark:to-gray-400 bg-clip-text text-transparent">
              Full-Stack
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 dark:from-purple-400 dark:via-violet-400 dark:to-purple-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
            Building digital experiences with clean code and creative solutions.
            Let's bring your ideas to life.
          </p>

          <div className="flex justify-center">
            <a
              href="mailto:riverarenen02@gmail.com"
              className="group px-10 py-4 bg-purple-500 hover:bg-purple-400 text-white dark:text-black dark:hover:text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
                Get in Touch
              </span>
            </a>
          </div>
      </div>
    </div>
  );
}

// ============================================================================
// Main Hero Component
// ============================================================================

function Hero() {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="relative z-10 w-full pb-16">
        <HeroContent />
        <ScrollIndicator />
      </div>
    </section>
  );
}

export default Hero;
