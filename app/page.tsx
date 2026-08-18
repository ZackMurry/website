import Image from 'next/image'
import { FC, ReactNode } from 'react'
import Header from '@/components/Header'
import ExternalLink from '@/components/ExternalLink'

interface ExperienceItemProps {
  title: string
  logo: string
  position: string
  start: string // e.g. 'June 2026'
  end?: string // e.g. 'August 2026'; omit for present positions
  readMoreHref?: string
  children: ReactNode
}

// 'June 2026' + 'August 2026' -> 'June – August 2026'; no end -> 'June 2026 – Present'
const formatPeriod = (start: string, end?: string) => {
  if (!end) return `${start} – Present`
  const [startMonth, startYear] = start.split(' ')
  const [endMonth, endYear] = end.split(' ')
  return startYear === endYear ? `${startMonth} – ${endMonth} ${endYear}` : `${start} – ${end}`
}

const ExperienceItem: FC<ExperienceItemProps> = ({ title, logo, position, start, end, readMoreHref, children }) => (
  <div className='flex flex-col gap-[2px]'>
    <div className='flex gap-1 items-baseline flex-wrap'>
      <Image src={logo} alt={`${title} logo`} width='16' height='16' className='w-4 h-4 self-center' />
      <h3 className='font-medium text-stone-800'>{title},</h3>
      <span>{position},</span>
      <span className='text-stone-600'>{formatPeriod(start, end)}</span>
      {readMoreHref && (
        <ExternalLink href={readMoreHref} className='text-stone-600 whitespace-nowrap ml-auto'>
          Read more →
        </ExternalLink>
      )}
    </div>
    <p>{children}</p>
  </div>
)

interface ProjectCardProps {
  title: string
  logo: string
  href: string
  children: ReactNode
}

const ProjectCard: FC<ProjectCardProps> = ({ title, logo, href, children }) => (
  <article className='relative'>
    <a
      href={href}
      target='_blank'
      rel='noreferrer noopener'
      className='flex flex-col gap-1 py-2 px-3 -my-2 -mx-3 rounded hover:bg-stone-300'
    >
      <div className='flex gap-1 items-center'>
        <Image src={logo} alt={`${title} logo`} width='16' height='16' className='w-4 h-4' />
        <h3 className='font-medium text-stone-800'>{title}</h3>
      </div>
      <p>{children}</p>
    </a>
  </article>
)

interface FooterLinkProps {
  href: string
  children: ReactNode
}

const FooterLink: FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    target='_blank'
    rel='noreferrer noopener'
    className='flex items-center py-1 px-2 rounded text-stone-500 hover:bg-stone-300 hover:text-stone-700 ml-[-8px] mr-2'
  >
    {children}
  </a>
)

const HomePage = () => (
  <div className='flex flex-col max-w-2xl mx-auto px-4 mb-8'>
    <Header />
    <main className='flex flex-col gap-5 pb-4'>
      <section className='flex flex-col gap-5'>
        <div className='flex items-center gap-4'>
          <Image src='/headshot.jpg' alt='Headshot of Zack Murry' width='56' height='56' className='rounded-full' />
          <div className='flex flex-col'>
            <h1 className='font-semibold text-stone-800'>Zack Murry</h1>
            <p className='text-stone-600'>CS & Math Senior at the University of Missouri</p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <p>
            Hi! I&apos;m a computer science and math senior at the University of Missouri, where I research drone package
            delivery simulation and routing in the VIMAN Lab. This past summer, I interned at{' '}
            <ExternalLink href='https://www.capitalone.com'>Capital One</ExternalLink> in NYC, building an API for bank
            account onboarding. Before that, I was at <ExternalLink href='https://garmin.com'>Garmin</ExternalLink> on the
            API team for Garmin Connect and at UChicago as a research intern. I&apos;m passionate about web development,
            computer science, and building software that solves real-world problems.
          </p>
          <p>
            This fall, I&apos;m interning at{' '}
            <ExternalLink href='https://convoke.bio' className='whitespace-nowrap'>
              <Image
                src='/logos/convoke.png'
                alt='Convoke logo'
                width='16'
                height='16'
                className='w-4 h-4 inline rounded-[3px] align-[-3px] mr-[3px] ml-[1px]'
              />
              Convoke
            </ExternalLink>{' '}
            in San Francisco, CA, to help build AI for the biopharma industry. I graduate in May 2027 and am looking for
            full-time software engineering roles.
          </p>
        </div>
      </section>
      <hr className='border-stone-300' />
      <section className='flex flex-col gap-3'>
        <h2 className='text-stone-700'>Experience</h2>
        <div className='flex flex-col gap-4'>
          <ExperienceItem
            title='Capital One'
            logo='/logos/capitalone.png'
            position='Software Engineering Intern'
            start='June 2026'
            end='August 2026'
          >
            Worked on onboarding for new bank accounts, building a Node.js backend-for-frontend for the account funding
            dashboard, which serves 160k+ users each month
          </ExperienceItem>
          <ExperienceItem
            title='VIMAN Lab'
            logo='/logos/mizzou.png'
            position='Undergraduate Researcher'
            start='August 2023'
            end='May 2026'
          >
            Route generation and simulation for drone package delivery using reinforcement learning in Mizzou&apos;s
            Virtualization, Multimedia, and Networking (VIMAN) Lab under{' '}
            <ExternalLink href='https://www.prasadcalyam.com/home'>Dr. Prasad Calyam</ExternalLink>, and experiments with
            autonomous drones and 5G networks on the NSF-funded AERPAW testbed
          </ExperienceItem>
          <ExperienceItem
            title='Garmin'
            logo='/logos/garmin.png'
            position='Software Engineering Intern'
            start='May 2025'
            end='August 2025'
          >
            Worked on the API team for the Garmin Connect platform in Olathe, KS, helping build Garmin&apos;s new{' '}
            <ExternalLink href='https://www.garmin.com/en-US/garmin-technology/health-science/nutrition-tracking/'>
              nutrition tracking
            </ExternalLink>{' '}
            feature
          </ExperienceItem>
          <ExperienceItem
            title='University of Chicago'
            logo='/logos/uchicago.png'
            position='Research Intern'
            start='May 2024'
            end='August 2024'
            readMoreHref='https://floto.cs.uchicago.edu/2024/08/13/case-study-measuring-5g-wireless-speeds-in-rural-iowa-using-floto/'
          >
            Researched distributed computing over 5G networks under Dr. Kate Keahey as part of the{' '}
            <ExternalLink href='https://datasys.cs.iit.edu/grants/BigDataX/index.html'>BigDataX REU</ExternalLink>, deploying
            a six-node Hadoop cluster over a six-mile diameter on the ARA wireless testbed using Raspberry Pis
          </ExperienceItem>
        </div>
      </section>
      <hr className='border-stone-300' />
      <section className='flex flex-col gap-3'>
        <h2 className='text-stone-700'>Projects</h2>
        <div className='grid sm:grid-cols-2 gap-x-6 gap-y-4'>
          <ProjectCard title='Syntraix' logo='/logos/syntraix.png' href='https://syntraix.com'>
            An AI tool for estimating material requirements for construction projects
          </ProjectCard>
          <ProjectCard title='Canvas Sync for Notion' logo='/logos/canvas-sync.png' href='https://canvas-sync.com'>
            A tool for students to track their coursework in Notion without manually copying assignments from Canvas
          </ProjectCard>
          <ProjectCard
            title='Docs Hotkey'
            logo='/logos/docs-hotkey.png'
            href='https://chromewebstore.google.com/detail/docs-hotkey/npkpplmpfeaeemeecniaikpjjfbfefhh'
          >
            An open-source Chrome extension for creating custom hotkeys in Google Docs with &gt;12k weekly active users
          </ProjectCard>
          <ProjectCard title='ChesSRS' logo='/logos/chessrs.png' href='https://chessrs.zackmurry.com'>
            A spaced-repetition system for learning chess openings, built with Kotlin, GraphQL, Spring Boot, and React using
            the Lichess API
          </ProjectCard>
          {/* <ProjectCard title='Nodecode' href='https://github.com/ZackMurry/Nodecode'>
            A visual, graph-based programming language built in C# with Daniel Huinda
          </ProjectCard> */}
        </div>
      </section>
      <hr className='border-stone-300' />
      <footer className='flex flex-wrap'>
        <FooterLink href='https://github.com/ZackMurry'>GitHub</FooterLink>
        <FooterLink href='https://www.linkedin.com/in/zack-murry'>LinkedIn</FooterLink>
        <FooterLink href='mailto:zjmfrr@missouri.edu'>Email</FooterLink>
        <FooterLink href='/murry_zack_resume.pdf'>Resume</FooterLink>
      </footer>
    </main>
  </div>
)

export default HomePage
