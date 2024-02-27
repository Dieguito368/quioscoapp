'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const steps = [
    { step: 1, name: 'Menú', url: '/' },
    { step: 2, name: 'Resumen', url: '/summary' },
    { step: 3, name: 'Datos y total', url: '/total' }
]

const Steps = () => {
    const pathName = usePathname();

    const getCurrentStep = () => {
        if(pathName === '/') return 1
        if(pathName === '/summary') return 2
        if(pathName === '/total') return 3
    }

    return (
        <div>
            <div className='flex justify-between mb-3'>
                {
                    steps.map(step => (
                        <Link 
                            key={ step.step }
                            className='text-xl font-bold'
                            href={ step.url }
                        >{ step.name }</Link>
                    ))
                }
            </div>

            <div className='bg-gray-100 mb-5'>
                <div className={ `rounded-xl bg-amber-400 h-2 w-${getCurrentStep()}/3` }></div>
            </div>
        </div>
    )
}

export default Steps;
