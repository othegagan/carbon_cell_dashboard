'use client';
import useBitcoinData from '@/hooks/useBitcoinData';
import { formatNumber } from '@/lib/utils';
import { format } from 'date-fns';
import React from 'react';

export default function BitcoinComponent() {
    const { bitcoinData, loading, error, updatedTime } = useBitcoinData();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error ) {
        return <div className='grid h-full w-full place-items-center text-sm text-muted-foreground'> 😥Something went wrong in fetching data..</div>;
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        <div className='flex h-full flex-col items-stretch justify-between gap-4'>
            {bitcoinData?.map(({ currency, symbol, rate,description }: any) => (
                <div key={currency} className='w-fit rounded-md p-2 text-lg font-bold dark:bg-neutral-800 whitespace-nowrap'>
                    <span dangerouslySetInnerHTML={{ __html: symbol }} /> {formatNumber(rate)}
                    <p className="text-xs text-muted-foreground"> {currency} - {description}</p>
                </div>
            ))}
        </div>


<div className='flex flex-col'>

            <p className="text-xs text-muted-foreground mt-auto"> Updated On : </p>
            <p className="text-xs text-muted-foreground "> {format(new Date(String(updatedTime)),'PPP , h:MM a')}</p>
</div>
                    </div>
    );
}
