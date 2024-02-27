import { Inter } from 'next/font/google';
import '@/globals.css';
import SidebarAdmin from '@/components/SidebarAdmin';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: `Quiosco Cafetería - Admin`,
    description: 'Quiosco cafetería',
};

export default function RootLayout({ children }) {
    return (
        <html lang='es'>
            <body className={ inter.className }>
                <div className='md:flex'>
                    <SidebarAdmin />

                    <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                        <div className="p-10">
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        </html>
    );
}
