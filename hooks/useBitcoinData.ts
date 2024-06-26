import { useState, useEffect } from 'react';

const useBitcoinData = () => {
    const [bitcoinData, setBitcoinData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [updatedTime, setUpdatedTime] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                const formattedData: any = Object.entries(data.bpi).map(([currency, info]: any) => ({
                    currency,
                    description: info.description,
                    symbol: info.symbol,
                    rate: parseFloat(info.rate.replace(',', '')),
                }));
                setBitcoinData(formattedData);
                setUpdatedTime(data.time.updatedISO);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { bitcoinData, loading, error, updatedTime };
};

export default useBitcoinData;
