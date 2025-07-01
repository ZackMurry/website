import Image from 'next/image'
import { Link } from '@radix-ui/themes'
import Header from '@/components/Header'

const ResearchPage = () => (
  <div className='mx-auto grid max-w-2xl gap-12 px-4 py-8 pb-12 sm:px-8 leading-relaxed text-zinc-600'>
    <Header />
    <div className='grid gap-0'>
      <h1 className='text-zinc-900 font-bold text-lg'>Research</h1>
      <h4 className='text-zinc-600 text-sm mt-1'>
        My research interests are drone routing, 5G, edge computing, and networking. You can find my publications on my{' '}
        <Link
          href='https://scholar.google.com/citations?user=ZZBezfYAAAAJ'
          underline='always'
          target='_blank'
          rel='noreferrer noopener'
          className='!cursor-pointer'
        >
          Google Scholar
        </Link>{' '}
        page.
      </h4>
    </div>
    <article className='text-zinc-600 grid gap-4'>
      <p>
        My work in the Virtualization, Multimedia, and Networking (VIMAN) Lab is focused on creating solutions for autonomous
        drones. We're currently working on a route generation software for package delivery using drones and delivery trucks
        using reinforcement learning (RL) with a Deep Q-Network (DQN). Additionally, I run experiments on the NSF-funded
        Aerial Experimentation and Research Platform for Advanced Wireless (
        <Link
          href='https://aerpaw.org'
          underline='always'
          target='_blank'
          rel='noreferrer noopener'
          className='!cursor-pointer'
        >
          AERPAW
        </Link>
        ) testbed, which facilitates experiments with autonomous drones and 5G networks.
      </p>
      <p>
        Last summer (2024), I interned at the University of Chicago under{' '}
        <Link
          href='https://cs.uchicago.edu/people/kate-keahey'
          underline='always'
          target='_blank'
          rel='noreferrer noopener'
          className='!cursor-pointer'
        >
          Dr. Kate Keahey
        </Link>{' '}
        as part of an NSF Research Experience for Undergraduates (REU) program. I leveraged their{' '}
        <Link
          href='https://floto.cs.uchicago.edu'
          underline='always'
          target='_blank'
          rel='noreferrer noopener'
          className='!cursor-pointer'
        >
          FLOTO
        </Link>{' '}
        platform for broadband data collection to conduct 5G experiments on the Agricultural and Rural Wireless (
        <Link
          href='https://arawireless.org'
          underline='always'
          target='_blank'
          rel='noreferrer noopener'
          className='!cursor-pointer'
        >
          ARA
        </Link>
        ) testbed. Specifically, I measured their network's capabilities and deployed a six-node Hadoop cluster over a
        six-mile diameter to prototype a distributed computing setup over 5G.
      </p>
    </article>
  </div>
)

export default ResearchPage
