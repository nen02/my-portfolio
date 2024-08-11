type service = {
  key: number;
  url: string;
  title: string;
  description: string;
};

const services: service[] = [
  {
    key: 1,
    url: '/svg/pencil-case.svg',
    title: 'Creative Design',
    description:
      'Crafting visually stunning designs that captivate and engage your audience.',
  },
  {
    key: 2,
    url: '/svg/website-theme.svg',
    title: 'Website',
    description:
      'Creating dynamic and user-friendly websites tailored to your business needs.',
  },
  {
    key: 3,
    url: '/svg/mobile-store-online.svg',
    title: 'Mobile App',
    description:
      'Building robust mobile apps that offer a smooth and engaging user experience.',
  },
  {
    key: 4,
    url: '/svg/web-development.svg',
    title: 'Custom Dev',
    description:
      'Delivering tailored development solutions for complex challenges.',
  },
];

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
