import Header from '@/components/Header'
import ExternalLink from '@/components/ExternalLink'

const ResearchPage = () => (
  <div className='mx-auto grid max-w-2xl gap-12 px-4 py-8 pb-12 sm:px-8 leading-relaxed text-zinc-600'>
    <Header />
    <div className='grid gap-0'>
      <h1 className='text-zinc-900 font-bold text-lg'>Research</h1>
      <h4 className='text-zinc-600 text-sm mt-1'>
        My research interests are drone routing, 5G, edge computing, and networking. You can find my publications on my{' '}
        <ExternalLink href='https://scholar.google.com/citations?user=ZZBezfYAAAAJ'>Google Scholar</ExternalLink> page.
      </h4>
    </div>
    <article className='text-zinc-600 grid gap-4'>
      <p>
        My work in the Virtualization, Multimedia, and Networking (VIMAN) Lab is focused on creating solutions for autonomous
        drones. We're currently working on a route generation software for package delivery using drones and delivery trucks
        using reinforcement learning (RL) with a Deep Q-Network (DQN). Additionally, I run experiments on the NSF-funded
        Aerial Experimentation and Research Platform for Advanced Wireless (
        <ExternalLink href='https://aerpaw.org'>AERPAW</ExternalLink>) testbed, which facilitates experiments with autonomous
        drones and 5G networks.
      </p>
      <p>
        Last summer (2024), I interned at the University of Chicago under{' '}
        <ExternalLink href='https://cs.uchicago.edu/people/kate-keahey'>Dr. Kate Keahey</ExternalLink> as part of an NSF
        Research Experience for Undergraduates (REU) program. I leveraged their{' '}
        <ExternalLink href='https://floto.cs.uchicago.edu'>FLOTO</ExternalLink> platform for broadband data collection to
        conduct 5G experiments on the Agricultural and Rural Wireless (
        <ExternalLink href='https://arawireless.org'>ARA</ExternalLink>) testbed. Specifically, I measured their network's
        capabilities and deployed a six-node Hadoop cluster over a six-mile diameter to prototype a distributed computing
        setup over 5G.
      </p>
    </article>
  </div>
)

export default ResearchPage
