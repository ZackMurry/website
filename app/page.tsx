import Image from 'next/image'
import { Link } from '@radix-ui/themes'
import Header from '@/components/Header'

const HomePage = () => (
  <div className='mx-auto grid max-w-2xl gap-12 px-4 py-8 pb-12 sm:px-8 leading-relaxed text-zinc-600'>
    <Header />
    <div className='flex justify-start items-center gap-4'>
      <Image src='/headshot.jpg' alt='Headshot' width='48' height='48' className='rounded-[50%]' />
      <div>
        <h1 className='text-zinc-900 font-bold'>Zack Murry</h1>
        <h1 className='text-zinc-600 text-sm'>CS & Math at the University of Missouri</h1>
      </div>
    </div>
    <article>
      <div className='grid gap-4 text-zinc-600'>
        <p>
          I'm a student at the University of Missouri in computer science and math from Springfield, MO. This summer, I'm
          interning at{' '}
          <Link
            href='https://garmin.com'
            underline='always'
            target='_blank'
            rel='noreferrer noopener'
            className='!cursor-pointer'
          >
            Garmin
          </Link>{' '}
          in Olathe, KS, on the API team for the Garmin Connect platform. During the school year, I work at Mizzou's
          Virtualization, Multimedia, and Networking (VIMAN) Lab under{' '}
          <Link
            href='https://www.prasadcalyam.com/home'
            underline='always'
            target='_blank'
            rel='noreferrer noopener'
            className='!cursor-pointer'
          >
            Dr. Prasad Calyam
          </Link>
          , where I research routing algorithms for drone package delivery systems using reinforcement learning. I'm
          passionate about web development, computer science, and building software that solves real-world problems.
        </p>
        <p>
          Last summer, I interned at the University of Chicago researching distributed computing using Raspberry Pis over 5G
          networks as part of the BigDataX Research Experience for Undergraduates (REU) program.
        </p>
        <p>
          I've recently released{' '}
          <Link
            href='https://chessrs.zackmurry.com'
            underline='always'
            target='_blank'
            rel='noreferrer noopener'
            className='!cursor-pointer'
          >
            ChesSRS
          </Link>
          , a tool for learning chess openings using a Spaced Repetition System (SRS), and I'm currently developing a tool
          for students to organize and streamline their coursework in Notion without having to manually track their
          assignments.
        </p>
      </div>
    </article>
  </div>
)

export default HomePage
