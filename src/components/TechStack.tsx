import techStack from "../data/techStacks";

function TechStack() {
  return (
    <section className="container max-w-screen-lg mx-auto py-16 max-lg:px-10">
      <div className="flex items-center gap-x-4">
        <div className="w-6 h-[2px] bg-[#3d3d3d]"></div>
        <h2 className="text-2xl font-bold block">Tech Stack</h2>
        <div className="flex-1 h-[2px] bg-[#3d3d3d]"></div>
      </div>
      <p className=" mb-12">
        I use a unified tech stack for development and deployment.
      </p>
      <div className="flex flex-wrap gap-x-24 gap-y-16 justify-center max-lg:gap-x-20 max-lg:gap-y-10">
        {techStack.map((tech) => (
          <div key={tech.key}>
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-[50px] w-[50px] mx-auto"
            />
            <p className="text-center mt-2 text-lg">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
