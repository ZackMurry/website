import Header from '@/components/Header'

const NotFoundPage = () => (
  <div className='flex flex-col max-w-2xl mx-auto px-4 mb-8'>
    <Header />
    <div className='grid gap-0 mt-4'>
      <h1 className='text-stone-800 font-semibold'>Not Found!</h1>
      <h4 className='text-stone-600 mt-1'>
        You seem lost. Let me know if there&apos;s a dead link: zjmfrr@missouri.edu.
      </h4>
    </div>
  </div>
)

export default NotFoundPage
