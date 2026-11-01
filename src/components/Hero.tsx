import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import links from "../data/links";
import { HOME_ANCHOR } from "../data/navigation";
import profile from "../data/profile";
import { HeroPortrait } from "./HeroPortrait";
import { ArrowRightIcon } from "./icons";
import { button, Emphasis, text } from "./ui";

function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">{profile.availability}</span>
    </div>
  );
}

function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
      <a href="#contact" className={`w-full sm:w-auto ${button.primary}`}>
        Get in touch
        <ArrowRightIcon />
      </a>
      <a href="#projects" className={`w-full sm:w-auto ${button.outline}`}>
        See my work
      </a>
      <div className="flex items-center gap-2 sm:ml-2">
        {links.map((link) => (
          <a
            key={link.key}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={button.icon}
          >
            <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id={HOME_ANCHOR} className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 w-full grid md:grid-cols-[1.25fr_1fr] gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <AvailabilityBadge />
          <p className={`font-display font-semibold tracking-wide mb-3 ${text.accent}`}>Hi, I'm {profile.name}</p>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 ${text.heading}`}>
            {profile.role}
            <br />
            <span className={text.gradientAccent}>{profile.headlineAccent}</span>
          </h1>
          <p className={`text-lg max-w-xl mx-auto md:mx-0 leading-relaxed mb-8 ${text.body}`}>
            <Emphasis>{profile.summary}</Emphasis>
          </p>
          <HeroActions />
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}

export default Hero;
