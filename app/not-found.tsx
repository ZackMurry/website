import Header from '@/components/Header'

const NotFoundPage = () => (
  <div className='mx-auto grid max-w-2xl gap-12 px-4 py-8 pb-12 sm:px-8 leading-relaxed text-zinc-600'>
    <Header />
    <div className='grid gap-0'>
      <h1 className='text-zinc-900 font-bold text-lg'>Not Found!</h1>
      <h4 className='text-zinc-600 text-sm mt-1'>
        You seem lost. Let me know if there&apos;s a dead link: zjmfrr@missouri.edu.
      </h4>
    </div>
  </div>
)

export default NotFoundPage
