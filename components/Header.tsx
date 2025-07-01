import Link from 'next/link'

const Header = () => (
  <header className='w-full'>
    <div className='w-full flex justify-between text-sm font-monon'>
      <div>
        <Link href='/'>Zack Murry</Link>
      </div>
      <div className='flex justify-around gap-6'>
        <Link href='/' className='hover:underline'>
          Home
        </Link>
        <Link href='/research' className='hover:underline'>
          Research
        </Link>
        <Link href='/projects' className='hover:underline'>
          Projects
        </Link>
        <Link href='/links' className='hover:underline'>
          Links
        </Link>
      </div>
    </div>
  </header>
)

export default Header
