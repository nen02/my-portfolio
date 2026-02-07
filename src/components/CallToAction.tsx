import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CallToAction() {
  return (
    <section className="py-32 bg-black relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container max-w-4xl mx-auto px-5 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Let's work
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              together
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life.
          </p>
          <a
            href="mailto:riverarenen02@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-purple-500 hover:bg-purple-400 text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
