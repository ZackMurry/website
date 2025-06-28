import Image from 'next/image'

const HomePage = () => (
  <div className='mx-auto grid max-w-2xl gap-12 px-4 py-8 pb-12 sm:px-8 leading-relaxed'>
    <div className='flex justify-start items-center gap-4'>
      <Image src='/headshot.jpg' alt='Headshot' width='48' height='48' className='rounded-[50%]' />
      <div>
        <h1 className='text-zinc-900 font-bold'>Zack Murry</h1>
        <h1 className='text-zinc-600 text-sm'>CS & Math student at the University of Missouri</h1>
      </div>
    </div>
    <article>
      <div className='grid gap-4'>
        <p className='text-zinc-600'>
          Hi! I'm Zack, a second-year undergraduate student in Computer Science and Mathematics at the University of
          Missouri. I work as a student research assistant in the Virtualization, Multimedia, and Networking (VIMAN) lab,
          where I study computer networking, drone navigation, and edge computing.
        </p>
        <p className='text-zinc-600'>
          This past summer (2024), I did an internship at the University of Chicago researching distributed computing using
          Raspberry Pis. Outside of research, I also enjoy full-stack web development, compilers, and robots!
        </p>
      </div>
    </article>
  </div>
)

export default HomePage
