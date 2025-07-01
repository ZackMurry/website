import Image from 'next/image'
import Header from '@/components/Header'
import ExternalLink from '@/components/ExternalLink'

const ProjectsPage = () => (
  <div className='mx-auto grid max-w-2xl gap-12 px-4 py-8 pb-12 sm:px-8 leading-relaxed text-zinc-600'>
    <Header />
    <div className='grid gap-0'>
      <h1 className='text-zinc-900 font-bold text-lg'>Projects</h1>
      <h4 className='text-zinc-600 text-sm mt-1'>
        I&apos;ve built several websites, a Chrome extension, compilers, and more. More information, including the source
        code, for all of these projects can be found on my{' '}
        <ExternalLink href='https://github.com/ZackMurry'>GitHub</ExternalLink>.
      </h4>
    </div>
    <article className='text-zinc-600 grid gap-4'>
      <p>
        My first publicly released project was{' '}
        <ExternalLink href='https://docs-hotkey.zackmurry.com'>Docs Hotkey</ExternalLink>, an open-source Chrome extension
        for creating custom hotkeys for Google Docs, which I released in 2022. It&apos;s slowly grown over the years, and it
        now has almost 10,000 weekly active users. I actively add new features, respond to support emails, and repair it when
        Google tweaks the Docs UI every year.
      </p>
      <p>
        My latest project is <ExternalLink href='https://chessrs.zackmurry.com'>ChesSRS</ExternalLink>, a spaced-repetition
        system (SRS) for learning chess openings using the same approach used in flashcard websites. I built it using Kotlin,
        GraphQL, Spring Boot, and React. It integrates with <ExternalLink href='https://lichess.org'>Lichess</ExternalLink>,
        an open-source chess server, for learning from 100,000+ studies, learning from previous chess matches, and displaying
        data about openings, like an opening&apos;s name and its lines.
      </p>
      <p>
        I&apos;ve also built a couple of compilers for custom programming languages. After reading{' '}
        <ExternalLink href='https://www3.nd.edu/~dthain/compilerbook/compilerbook.pdf'>
          Introduction to Compilers and Language Design
        </ExternalLink>
        , I created my first language, called Stellar, in C++ using the{' '}
        <ExternalLink href='https://llvm.org'>LLVM Compiler Toolchain</ExternalLink>. I then worked with Daniel Huinda to
        create a visual, graph-based programming language called Nodecode using C#.
      </p>
      <div className='flex flex-col justify-center items-center'>
        <Image src='/nodecode_preview.png' alt='Nodecode screenshot' width='1920' height='1080' className='w-[75%] my-3' />
        <p className='text-sm'>Screenshot of Nodecode.</p>
      </div>
    </article>
  </div>
)

export default ProjectsPage
