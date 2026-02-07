import techStack from "../data/techStacks";

function TechStack() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Random glow effects */}
      <div className="absolute top-30 right-30 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-30 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute top-20 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-20 w-48 h-48 bg-green-400/10 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I use
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={tech.key}
              className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:bg-white/10"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="relative h-14 w-14 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-center mt-4 text-sm font-medium text-gray-300 group-hover:text-green-400 transition-colors">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
