import Sidebar from '@/components/Sidebar';
import ModalProduct from '@/components/ModalProduct';
import Steps from '@/components/Steps';
import ProviderQuiosco from '@/context';
import { Inter } from 'next/font/google';
import '@/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: `Quiosco Cafetería`,
    description: 'Quiosco cafetería',
};

export default function RootLayout({ children }) {
    return (
        <html lang='es'>
            <body className={ inter.className }>
                <ProviderQuiosco>
                    <div className='md:flex'>
                        <Sidebar />

                        <main className='p-10 md:w-8/12 xl:w-3/4 h-screen overflow-y-scroll'>
                            <Steps />
                            
                            { children }
                        </main>
                    </div>

                    <ModalProduct />
                </ProviderQuiosco>
            </body>
        </html>
    );
}
