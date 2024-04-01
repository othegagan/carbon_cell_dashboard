import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';
import Sidebar from '@/components/Sidebar';
import MobileSidebar from '@/components/MobileSidebar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Carbon Cell | Gagan Kumar',
    description:
        'Discover the latest Bitcoin prices and trends. Stay informed with real-time updates on Bitcoin value in multiple currencies, including USD, GBP, and EUR',
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
                    <div className='grid h-screen w-full min-w-[360px] overflow-hidden md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
                        <Sidebar />
                        <div className='flex flex-col overflow-y-scroll'>
                            <MobileSidebar />
                            <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 '>
                                {children}
                                <Footer />
                            </main>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
