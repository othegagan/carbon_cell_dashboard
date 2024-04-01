import BitcoinComponent from '@/components/graphs/BitcoinComponent';
import PopulationGraphComponent from '@/components/graphs/PopulationGraphComponent';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FaBitcoin } from 'react-icons/fa';

export default function Dashboard() {
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
            <div className='grid gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-7'>
                <Card className='lg:col-span-4'>
                    <CardHeader>
                        <CardTitle className='text-sm font-medium md:text-lg'>US Population Over the Years</CardTitle>
                        <CardDescription>This graph shows the population of United-states form 2013 to 2021.</CardDescription>
                    </CardHeader>
                    <CardContent className='pb-4'>
                        <div className='h-[200px]'>
                            <PopulationGraphComponent />
                        </div>
                    </CardContent>
                </Card>

                <Card className='lg:col-span-3'>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                        <CardTitle className='text-sm font-medium md:text-lg'>Bitcoin Price</CardTitle>
                    </CardHeader>
                    <CardContent className='relative'>
                        <div className=' py-5'>
                            <FaBitcoin className='absolute right-0 size-40 opacity-5 ' />
                            <BitcoinComponent />
                        </div>
                    </CardContent>
                </Card>
            </div>



        </>
    );
}
