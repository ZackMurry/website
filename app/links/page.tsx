import Header from '@/components/Header'
import ExternalLink from '@/components/ExternalLink'
import { FC, ReactNode } from 'react'

interface ListLinkProps {
  href: string
  children: ReactNode
}

const ListLink: FC<ListLinkProps> = ({ href, children }) => (
  <li>
    <ExternalLink href={href} className='hover:text-zinc-900 transition-colors'>
      {children}
    </ExternalLink>
  </li>
)

const LinksPage = () => (
  <div className='mx-auto grid max-w-2xl gap-12 px-4 py-8 pb-12 sm:px-8 leading-relaxed text-zinc-600'>
    <Header />
    <div className='grid gap-0'>
      <h1 className='text-zinc-900 font-bold text-lg'>Links</h1>
      <h4 className='text-zinc-600 text-sm mt-1'>Here are links to my resume, projects, socials, etc.</h4>
    </div>
    <article className='text-zinc-600 grid gap-4'>
      <ul className='grid gap-2 list-disc list-inside text-zinc-600'>
        <ListLink href='/murry_zack_resume.pdf'>Resume</ListLink>
        <li>Email: zjmfrr@missouri.edu</li>
        <ListLink href='https://www.linkedin.com/in/zack-murry'>LinkedIn</ListLink>
        <ListLink href='https://github.com/ZackMurry'>GitHub</ListLink>
        <ListLink href='https://scholar.google.com/citations?user=ZZBezfYAAAAJ'>Google Scholar</ListLink>
        <ListLink href='https://chessrs.zackmurry.com'>ChesSRS</ListLink>
        <ListLink href='https://chromewebstore.google.com/detail/docs-hotkey/npkpplmpfeaeemeecniaikpjjfbfefhh'>
          Docs Hotkey
        </ListLink>
      </ul>
    </article>
  </div>
)

export default LinksPage
