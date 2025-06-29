const Header = () => (
  <header className='w-full'>
    <div className='w-full flex justify-between text-sm font-monon'>
      <div>
        <a href='/'>Zack Murry</a>
      </div>
      <div className='flex justify-around gap-6'>
        <a href='/' className='hover:underline'>
          Home
        </a>
        <a href='/research' className='hover:underline'>
          Research
        </a>
        <a href='/projects' className='hover:underline'>
          Projects
        </a>
        <a href='/links' className='hover:underline'>
          Links
        </a>
      </div>
    </div>
  </header>
)

export default Header
