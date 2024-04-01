import { Button } from '@/components/ui/button';
import React from 'react';

export default function Org() {
    return (
        <>
            <div className='flex flex-col items-start justify-start gap-4 md:flex-row md:justify-between '>
                <div className='flex  flex-col '>
                    <h1 className='text-lg font-medium md:text-2xl '>
                        Hello, <span className='brand'>Gagan Kumar</span> <span>👋</span>
                    </h1>
                    <h4 className='font-normal md:text-lg'>
                        Welcome to <span className='text-primary'>Spot tranding..!</span>
                    </h4>
                </div>

                <Button size='lg' type='button' className='w-full md:w-fit'>
                    Start Trading
                </Button>
            </div>
            <div className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
                <div className='flex flex-col items-center gap-1 text-center'>
                    <h3 className='text-2xl font-bold tracking-tight'>Comming Soon..</h3>
                    <p className='text-sm text-muted-foreground'>This is a demo org page.</p>
                </div>
            </div>
        </>
    );
}
