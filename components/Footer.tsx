import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className='mt-auto   py- md:py-0'>
            <div className='container flex flex-col items-center justify-between gap-4  '>
                <p className='text-center text-sm leading-loose text-muted-foreground  '>
                    Developed by{' '}
                    <Link target='_blank' rel='noreferrer' className='font-medium underline underline-offset-4' href='https://thegagan-portfolio.vercel.app/'>
                        Gagan Kumar
                    </Link>{' '}
                    . Crafted with{' '}
                    <a target='_blank' rel='noreferrer' className='font-medium underline underline-offset-4' href='https://nextjs.org/'>
                        Nextjs 14{' '}
                    </a>{' '}
                    and{' '}
                    <a target='_blank' rel='noreferrer' className='font-medium underline underline-offset-4' href='https://tailwindcss.com/'>
                        Tailwind CSS{' '}
                    </a>
                    , deployed with{' '}
                    <a target='_blank' rel='noreferrer' className='font-medium underline underline-offset-4' href='https://vercel.com/'>
                        Vercel{' '}
                    </a>{' '}
                    and{' '}
                    <a target='_blank' rel='noreferrer' className='font-medium underline underline-offset-4' href='https://github.com/othegagan'>
                        GitHub
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
}
