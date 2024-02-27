'use client';

import Image from 'next/image'
import Logo from '../../public/assets/img/logo.svg';
import useProviderQuiosco from '@/hooks/useProviderQuiosco';

const Sidebar = () => {
    const { categories, handleClickCategorie, activeCategory } = useProviderQuiosco();

    return (
        <aside className='md:w-4/12 xl:w-1/4'>
            <div className='w-2/3 sm:w-1/3 md:w-2/3 mx-auto py-10 px-5'>
                <Image 
                    width={ 0 } 
                    height={ 100 } 
                    src={ Logo } 
                    alt='Imagen Logotipo' 
                    priority 
                    className='w-auto h-auto'
                />
            </div>

            <nav>
                { 
                    categories.map(category => (
                        <button 
                            type='button' 
                            key={ category.id } 
                            className={ `${activeCategory?.id === category.id ? 'bg-amber-400' : ''} flex gap-2 items-center p-5 w-full hover:bg-amber-400 text-xl font-bold` }
                            onClick={ () => handleClickCategorie(category.id) }
                        >
                            <div className='w-14'>
                                <Image 
                                    src={ `/assets/img/icono_${category.icon}.svg` } 
                                    width={ 0 } 
                                    height={ 0 } 
                                    alt={ `Icono ${category.name}`} 
                                    className='w-full h-auto'
                                    priority
                                />

                            </div>

                            { category.name }
                        </button>
                    ))
                }
            </nav>
        </aside>
    )
}

export default Sidebar;