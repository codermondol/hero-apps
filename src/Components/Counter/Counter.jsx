import React from 'react';

const Counter = () => {
    return (
        <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white'>
            <div className='max-w-[1220px] mx-auto text-center py-20'>
                <h2 className='text-4xl font-bold mb-10'>Trusted by Millions, Built for You</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 text-center'>
                    <div className='space-y-5'>
                        <p>Total Downloads</p>
                        <h4 className='text-5xl font-extrabold'>29.6M</h4>
                        <p>21% more than last month</p>
                    </div>
                    <div className='space-y-5'>
                        <p>Total Reviews</p>
                        <h4 className='text-5xl font-extrabold'>906K</h4>
                        <p>46% more than last month</p>
                    </div>
                    <div className='space-y-5'>
                        <p>Active Apps</p>
                        <h4 className='text-5xl font-extrabold'>132+</h4>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;