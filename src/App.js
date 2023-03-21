import React, { useState } from 'react';

import Bible from './Bible';
import Chant from './Chant';
import Setting from './Setting';

function App() {
    const [ btnSelected, setBtnSelected ] = useState(0);
    const [ isSelected, setIsSelected ] = useState(false);
    const btnBottom = [
        {
            icon: '/icons/chant.svg',
            text: 'Chant',
        },
        {
            icon: '/icons/bible.svg',
            text: 'Bible',
        },
        {
            icon: '/icons/setting.svg',
            text: 'Settings',
        },
    ];
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50">
            <div className="relative shadow-lg w-full sm:max-w-[350px] min-h-screen sm:min-h-[550px] flex flex-col overflow-hidden dark">
                <div className="w-full flex items-center justify-between text-white bg-blue-700 dark:bg-secondary">
                    <div className='flex items-center gap-4 px-4 py-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <p className='font-semibold text-[14px]'>Church kit</p>
                    </div>
                    <div className='cursor-pointer mr-4'
                        onClick={() => setIsSelected(!isSelected)}
                    >
                        { isSelected ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>                      
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>                      
                        )}
                    </div>
                </div>
                <div className='overflow-auto pb-12 transition-all duration-300 ease-out flex-1 h-full bg-gray-50 dark:bg-dark dark:text-white'>
                    { btnSelected === 0 ? (
                        <Chant />
                    ) : btnSelected === 1 ? (
                            <Bible />
                        ) : (
                        <Setting />
                    )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 w-full flex items-center justify-between shadow-2xl border-t bg-white z-10 dark:bg-secondary dark:border-0">
                    { btnBottom.map((item, ind) => (
                        <div key={ ind } className="flex flex-col items-center justify-center px-6 py-2 cursor-pointer"
                            onClick={() => setBtnSelected(ind)}
                        >
                            <img src={item.icon} alt={item.item} className="w-6 h-4 text-white" />
                            <p className={ `${btnSelected === ind ? "font-medium text-blue-700 dark:text-slate-200" : "dark:text-slate-400 text-gray-600"} text-[12px]` }>{ item.text }</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;