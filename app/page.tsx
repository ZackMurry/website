import Image from 'next/image'
import Header from '@/components/Header'
import ExternalLink from '@/components/ExternalLink'

const HomePage = () => (
  <div className='mx-auto grid max-w-2xl gap-12 px-6 py-8 pb-12 sm:px-8 leading-relaxed text-zinc-600'>
    <Header />
    <div className='flex justify-start items-center gap-4'>
      <Image src='/headshot.jpg' alt='Headshot' width='60' height='60' className='rounded-[50%]' />
      <div>
        <h1 className='text-zinc-900 font-bold text-lg'>Zack Murry</h1>
        <h1 className='text-zinc-600 text-md'>CS & Math Junior at the University of Missouri</h1>
      </div>
    </div>
    <article>
      <div className='grid gap-4 text-zinc-600'>
        <p>
          I&apos;m a computer science and math student at the University of Missouri from Springfield, MO. This summer, I
          interned at <ExternalLink href='https://garmin.com'>Garmin</ExternalLink> in Olathe, KS, on the API team for the
          Garmin Connect platform. During the school year, I work at Mizzou&apos;s Virtualization, Multimedia, and Networking
          (VIMAN) Lab under <ExternalLink href='https://www.prasadcalyam.com/home'>Dr. Prasad Calyam</ExternalLink>, where I
          research routing algorithms for drone package delivery systems using reinforcement learning. I&apos;m passionate
          about web development, computer science, and building software that solves real-world problems.
        </p>
        <p>
          Last summer, I interned at the University of Chicago researching distributed computing using Raspberry Pis over 5G
          networks as part of the BigDataX Research Experience for Undergraduates (REU) program.
        </p>
        <p>
          I&apos;ve recently released <ExternalLink href='https://canvas-sync.com'>Canvas Sync for Notion</ExternalLink>, a
          tool for students to track their coursework in Notion without having to manually copy assignments from Canvas.
        </p>
      </div>
    </article>
  </div>
)

export default HomePage
