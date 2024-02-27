'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
    { id: 1, name: 'Ordenes pendientes', href: '/admin' },
    { id: 2, name: 'Ordenes completadas', href: '/completed-orders' }
]

const SidebarAdmin = () => {
    const pathName = usePathname();

    return (
        <aside className='md:w-4/12 xl:w-1/4'>
            <div className='w-2/3 sm:w-1/3 md:w-2/3 mx-auto py-10 px-5'>
                <Image
                    width={ 0 }
                    height={ 0 }
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                    className='w-full h-auto'
                    priority
                />
            </div>

            <nav className='flex flex-col'>
                {
                    links.map(link => (
                        <Link 
                            href={ link.href } 
                            key={ link.id }
                            className={ `${pathName === link.href ? 'bg-amber-400' : '' } flex gap-2 items-center p-5 w-full hover:bg-amber-400 text-xl font-bold duration-200` }
                        >{ link.name }</Link>
                    ))
                }
            </nav>
        </aside>
    )
}

export default SidebarAdmin;