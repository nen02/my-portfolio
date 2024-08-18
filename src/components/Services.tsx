import services from '../data/services';

function Services() {
  return (
    <section className='container max-w-screen-lg mx-auto pb-16 max-lg:px-10'>
      <div className='flex items-center gap-x-4'>
        <div className='flex-1 h-[2px] bg-[#3d3d3d]'></div>
        <h2 className='text-2xl font-bold block'>Services</h2>
        <div className='w-6 h-[2px] bg-[#3d3d3d]'></div>
      </div>
      <p className='mb-12 text-right'>Here’s a list of what I offer.</p>
      <div className='grid grid-cols-4 max-md:grid-cols-2 gap-10'>
        {services.map((service) => (
          <div key={service.key}>
            <img src={service.url} alt={service.title} className='h-[40px]' />
            <p className='mt-6 font-bold text-lg'>{service.title}</p>
            <p className='mt-4'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
