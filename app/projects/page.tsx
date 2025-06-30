import Image from 'next/image'
import { Link } from '@radix-ui/themes'
import Header from '@/components/Header'

const ProjectsPage = () => (
  <div className='mx-auto grid max-w-2xl gap-12 px-4 py-8 pb-12 sm:px-8 leading-relaxed text-zinc-600'>
    <Header />
    <div className='grid gap-0'>
      <h1 className='text-zinc-900 font-bold text-lg'>Projects</h1>
      <h4 className='text-zinc-600 text-sm mt-1'>
        I've built several websites, a Chrome extension, compilers, and more. More information, including the source code,
        for all of these projects can be found on my{' '}
        <Link
          href='https://github.com/ZackMurry'
          underline='always'
          target='_blank'
          rel='noreferrer noopener'
          className='!cursor-pointer'
        >
          GitHub
        </Link>
        .
      </h4>
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
        grown over the years, and it now has almost 10,000 weekly active users. I still add new features, respond to support
        emails, and repair it when Google tweaks the Docs UI every year.
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
        built it using Kotlin, GraphQL, Spring Boot, and React. It integrates with{' '}
        <Link
          href='https://lichess.org'
          underline='always'
          target='_blank'
          rel='noreferrer noopener'
          className='!cursor-pointer'
        >
          Lichess
        </Link>
        , an open-source chess server, for learning from 100,000+ studies, learning from previous chess matches, and
        displaying data about openings, like an opening's name and its lines.
      </p>
      <p>
        I've also built a couple of compilers for custom programming languages. After reading{' '}
        <Link
          href='https://www3.nd.edu/~dthain/compilerbook/compilerbook.pdf'
          underline='always'
          target='_blank'
          rel='noreferrer noopener'
          className='!cursor-pointer'
        >
          Introduction to Compilers and Language Design
        </Link>
        , I created my first language, called Stellar, in C++ using the{' '}
        <Link
          href='https://llvm.org'
          underline='always'
          target='_blank'
          rel='noreferrer noopener'
          className='!cursor-pointer'
        >
          LLVM Compiler Toolchain
        </Link>
        . I then worked with Daniel Huinda to create a visual, graph-based programming language called Nodecode using C#.
      </p>
      <div className='flex flex-col justify-center items-center'>
        <Image src='/nodecode_preview.png' alt='Nodecode screenshot' width='1920' height='1080' className='w-[75%] my-3' />
        <p className='text-sm'>Screenshot of Nodecode.</p>
      </div>
    </article>
  </div>
)

export default ProjectsPage
