import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';
import Sidebar from '@/components/Sidebar';
import MobileSidebar from '@/components/MobileSidebar';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Carbon Cell | Gagan Kumar',
    description: 'Ecommerce is a platform for buying and selling products online. It provides a seamless and secure shopping experience for users.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <div className='grid min-h-screen w-full min-w-[360px] md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
                        <Sidebar />
                        <div className='flex flex-col'>
                            <MobileSidebar />
                            <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>{children}</main>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
