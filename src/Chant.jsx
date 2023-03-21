import React from 'react';

import { chantData } from './data';

function Chant() {
    return (
        <div>
            <div className="flex-1 px-4 pb-3 space-y-1 overflow-auto min-h-full">
                <div className='bg-gray-50 dark:bg-dark pt-4 pb-3'>
                    <div className='flex items-center justify-between border border-gray-200 dark:border-secondary rounded-md'>
                        <input type="text" className='outline-none text-[12px] text-gray-400 px-2 bg-transparent' placeholder='12 ce ou Gloire a Dieu' />
                        <button className='bg-blue-700/10 px-3 h-full py-2 rounded-r-md dark:bg-secondary'
                            onClick={() => {}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-7 text-black font-bold dark:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                </div>
                { chantData.map((item, ind) => (
                        <div key={ind} className='bg-white dark:bg-secondary py-2 px-2 flex items-center justify-between rounded-md cursor-pointer dark:text-white'>
                            <div className='flex items-center gap-2 divide-x'>
                                <div className='rounded-md py-2 px-2 border border-gray-100 text-[12px] bg-gray-50'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`${item.color} w-5 h-4`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                            </div>
                            <div>
                                <p className='text-[14px] pl-2 font-medium text-gray-700 dark:text-white'>{ item.title }</p>
                                <div className='flex items-center gap-2 text-[12px] text-gray-400 dark:text-white'>
                                    <p className='pl-2'>{ item.type }</p>
                                    <hr className='h-1 w-1 bg-blue-700 rounded-full shadow-md outline-none dark:bg-white' />
                                    <p className='pl-2'>{ item.quantutyOfChant } Chants</p>
                                </div>
                            </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default Chant;