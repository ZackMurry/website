import Image from 'next/image'
import Header from '@/components/Header'
import ExternalLink from '@/components/ExternalLink'

const HomePage = () => (
  <div className='mx-auto grid max-w-2xl gap-12 px-4 py-8 pb-12 sm:px-8 leading-relaxed text-zinc-600'>
    <Header />
    <div className='flex justify-start items-center gap-4'>
      <Image src='/headshot.jpg' alt='Headshot' width='48' height='48' className='rounded-[50%]' />
      <div>
        <h1 className='text-zinc-900 font-bold'>Zack Murry</h1>
        <h1 className='text-zinc-600 text-sm'>CS & Math Junior at the University of Missouri</h1>
      </div>
    </div>
    <article>
      <div className='grid gap-4 text-zinc-600'>
        <p>
          I&apos;m a computer science and math student at the University of Missouri from Springfield, MO. This summer,
          I&apos;m interning at <ExternalLink href='https://garmin.com'>Garmin</ExternalLink> in Olathe, KS, on the API team
          for the Garmin Connect platform. During the school year, I work at Mizzou&apos;s Virtualization, Multimedia, and
          Networking (VIMAN) Lab under{' '}
          <ExternalLink href='https://www.prasadcalyam.com/home'>Dr. Prasad Calyam</ExternalLink>, where I research routing
          algorithms for drone package delivery systems using reinforcement learning. I&apos;m passionate about web
          development, computer science, and building software that solves real-world problems.
        </p>
        <p>
          Last summer, I interned at the University of Chicago researching distributed computing using Raspberry Pis over 5G
          networks as part of the BigDataX Research Experience for Undergraduates (REU) program.
        </p>
        <p>
          I&apos;ve recently released <ExternalLink href='https://chessrs.zackmurry.com'>ChesSRS</ExternalLink>, a tool for
          learning chess openings using a Spaced Repetition System (SRS), and I&apos;m currently developing a tool for
          students to organize and streamline their coursework in Notion without having to manually track their assignments.
        </p>
      </div>
    </article>
  </div>
)

export default HomePage
