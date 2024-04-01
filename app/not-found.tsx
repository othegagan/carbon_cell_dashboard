import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='relative flex flex-1 flex-col items-center justify-center bg-neutral-900 px-4'>
            <div
                className='absolute left-0 top-0 h-full w-full bg-cover bg-center opacity-30'
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1604093882750-3ed498f3178b")' }}
            />
            <h1 className='z-10 mb-8 text-5xl font-bold text-white md:text-7xl'>Coming Soon</h1>
            <p className='text-xl text-white md:text-2xl'>We're working hard to bring you something amazing. Stay tuned!</p>
        </div>
    );
}
