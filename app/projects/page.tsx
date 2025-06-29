import Image from 'next/image'
import { Link } from '@radix-ui/themes'
import Header from '@/components/Header'

const ProjectsPage = () => (
  <div className='mx-auto grid max-w-2xl gap-12 px-4 py-8 pb-12 sm:px-8 leading-relaxed text-zinc-600'>
    <Header />
    <div className='grid gap-0'>
      <h1 className='text-zinc-900 font-bold text-lg'>Projects</h1>
      <h4 className='text-zinc-600 text-sm'>I've built several websites, a Chrome extension, compilers, and more.</h4>
    </div>
    <article className='text-zinc-600 grid gap-4'>
      <p>
        My first publicly released project was{' '}
        <Link
          href='https://docs-hotkey.zackmurry.com'
          underline='always'
          target='_blank'
          rel='noreferrer noopener'
          className='!cursor-pointer'
        >
          Docs Hotkey
        </Link>
        , an open-source Chrome extension for creating custom hotkeys for Google Docs, which I released in 2022. It's slowly
        grown over the years, and it now has almost 10,000 weekly active users, but I remember being excited when it first
        reached 50 users. I still add new features, respond to support emails, and repair it when Google tweaks the Docs UI
        every year.
      </p>
      <p>
        My latest project is{' '}
        <Link
          href='https://chessrs.zackmurry.com'
          underline='always'
          target='_blank'
          rel='noreferrer noopener'
          className='!cursor-pointer'
        >
          ChesSRS
        </Link>
        , a spaced-repetition system (SRS) for learning chess openings using the same approach used in flashcard websites. I
        built it using Kotlin, GraphQL, Spring Boot, and React.
      </p>
    </article>
  </div>
)

export default ProjectsPage
