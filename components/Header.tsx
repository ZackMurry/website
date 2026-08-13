import Link from 'next/link'
import { FC } from 'react'

interface NavLinkProps {
  href: string
  label: string
  active?: boolean
}

const NavLink: FC<NavLinkProps> = ({ href, label, active }) => (
  <li>
    <Link
      href={href}
      className={`p-1.5 rounded underline-offset-4 decoration-stone-600 hover:bg-stone-300 ${active ? 'underline' : ''}`}
    >
      {label}
    </Link>
  </li>
)

interface HeaderProps {
  active?: 'home'
}

const Header: FC<HeaderProps> = ({ active = 'home' }) => (
  <header className='flex py-4 justify-between items-center'>
    <Link href='/' className='rounded px-1.5 py-1 -mx-1.5 -my-1 hover:bg-stone-300'>
      Zack Murry
    </Link>
    <nav className='flex'>
      <ul className='flex'>
        <NavLink href='/' label='Home' active={active === 'home'} />
      </ul>
    </nav>
  </header>
)

export default Header
