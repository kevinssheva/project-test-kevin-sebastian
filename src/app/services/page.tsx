import Link from 'next/link';

export default function Page() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold mb-3'>Under Development</h1>
      <Link href='/ideas' className='px-3 py-2 bg-primary rounded-md text-white font-semibold'>Go to Ideas</Link>
    </div>
  );
}
