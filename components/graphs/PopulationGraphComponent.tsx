'use client';
import usePopulationData from '@/hooks/usePopulationData';
import { formatNumber } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const CustomXAxisTick = ({ x, y, payload }: any) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor='end' fill='#666' style={{ fontSize: 10 }}>
                {payload.value}
            </text>
        </g>
    );
};

const CustomYAxisTick = ({ x, y, payload }: any) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor='end' fill='#666' style={{ fontSize: 10 }}>
                {formatYAxis(payload.value)}
            </text>
        </g>
    );
};

const formatYAxis = (tickItem: any) => {
    return (tickItem / 1000000).toFixed(2) + 'M';
};

export default function PopulationGraphComponent() {
    const { nationsData, loading, error } = usePopulationData();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <div className='grid h-full w-full place-items-center text-sm text-muted-foreground'> 😥Something went wrong in fetching data..</div>;
    }

    // Sort data by year in ascending order
    const sortedData = nationsData.sort((a: any, b: any) => a.Year - b.Year);

    // Find the minimum and maximum population values
    const populations = sortedData.map((item: any) => item.Population);
    const minPopulation = Math.min(...populations);
    const maxPopulation = Math.max(...populations);

    // Calculate the range to adjust the y-axis scale
    const range = maxPopulation - minPopulation;
    const minY = minPopulation - range * 0.1;
    const maxY = maxPopulation + range * 0.1;

    return (
        <>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart
                    width={800}
                    height={400}
                    data={nationsData}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 10,
                    }}>
                    <XAxis dataKey='Year' tick={<CustomXAxisTick />} />
                    <YAxis domain={[minY, maxY]} tick={<CustomYAxisTick />} />

                    <Tooltip
                        content={({ active, payload }: any) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div className='rounded-lg border bg-background p-2 shadow-sm'>
                                        <div className='grid grid-cols-2 gap-2'>
                                            <div className='flex flex-col'>
                                                <span className='text-[0.70rem] uppercase text-muted-foreground'>Year</span>
                                                <span className='font-bold text-muted-foreground'>{payload[0].payload.Year}</span>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='text-[0.70rem] uppercase text-muted-foreground'>Population</span>
                                                <span className='font-bold'>{formatNumber(payload[0].value)}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return null;
                        }}
                    />
                    {/* <Legend /> */}
                    <Line type='monotone' dataKey='Population' stroke='#2BB62B' strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
