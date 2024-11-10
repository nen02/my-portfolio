import { faHandshake, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CallToAction() {
  return (
    <section className="bg-[#F6F5F4] rounded-t-[120px] border-solid border-t-[1px] border-t-gray-300">
      <div className="max-w-screen-lg container mx-auto py-10 px-5">
        <div
          className="h-32 w-32 border-4 rounded-full flex justify-center items-center mx-auto mb-7 max-sm:h-24 max-sm:w-24"
          style={{ borderColor: "#3d3d3d" }}
        >
          <FontAwesomeIcon icon={faHandshake} size="4x" />
        </div>
        <h1 className="text-4xl max-sm:text-3xl text-center md:max-w-lg px-5 mx-auto font-bold mb-8">
          Let’s turn your idea into reality.
        </h1>
        <div className="flex justify-center">
          <a
            href="mailto:riverarenen02@gmail.com"
            className="email-button text-lg max-sm:text-base"
          >
            <span className="top-key"></span>
            <span className="text">
              <FontAwesomeIcon beat icon={faPaperPlane} className="mr-3 " />
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

export default CallToAction;
