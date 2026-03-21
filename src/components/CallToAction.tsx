import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CallToAction() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
<div className="container max-w-4xl mx-auto px-6 md:px-5 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 dark:from-white dark:via-white dark:to-gray-400 bg-clip-text text-transparent">
              Let's work
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 dark:from-purple-400 dark:via-violet-400 dark:to-purple-500 bg-clip-text text-transparent">
              together
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life.
          </p>
          <a
            href="mailto:riverarenen02@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-purple-500 hover:bg-purple-400 text-white dark:text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
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
