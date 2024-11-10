import techStack from "../data/techStacks";

function TechStack() {
  return (
    <section className="container max-w-screen-lg mx-auto py-16 max-lg:px-10 max-sm:px-6 max-sm:py-10">
      <div className="flex items-center gap-x-4">
        <div className="w-6 h-[2px] bg-[#3d3d3d] max-sm:hidden" />
        <h2 className="text-2xl font-bold block max-sm:text-xl">Tech Stack</h2>
        <div className="flex-1 h-[2px] bg-[#3d3d3d]" />
      </div>
      <p className="mb-12 max-sm:text-sm">
        I use a unified tech stack for development and deployment.
      </p>
      <div className="grid grid-cols-6 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-10">
        {techStack.map((tech) => (
          <div key={tech.key}>
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-[50px] w-[50px] mx-auto max-sm:h-[36px] max-sm:w-[36px]"
            />
            <p className="text-center mt-2 text-lg max-sm:text-base">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
