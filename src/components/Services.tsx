import services from "../data/services";

function Services() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Random glow effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-green-400/10 rounded-full blur-3xl" />
      <div className="absolute top-10 right-1/4 w-56 h-56 bg-emerald-400/10 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What I can do for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.key}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:bg-white/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={service.url}
                  alt={service.title}
                  className="h-8 w-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="font-semibold text-xl text-white mb-3 group-hover:text-green-400 transition-colors">
                {service.title}
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
