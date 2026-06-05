import React from 'react';

const NumberCards = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:w-10/12 mx-auto justify-items-center mb-10'>
            {/* cards */}
            <div className='text-center items-center bg-base-200 p-8 rounded-lg w-full max-w-60 shadow-2xl'>
                <h2 className='text-3xl font-semibold'>12</h2>
                <p>Total Friends</p>
            </div>
            <div className='text-center items-center bg-base-200 p-8 rounded-lg w-full max-w-60 shadow-2xl'>
                <h2 className='text-3xl font-semibold' >3</h2>
                <p>On Track</p>
            </div>
            <div className='text-center items-center bg-base-200 rounded-lg p-8 w-full max-w-60 shadow-2xl'>
                <h2 className='text-3xl font-semibold' >6</h2>
                <p>Need Attention</p>
            </div>
            <div className='text-center items-center bg-base-200 rounded-lg p-8 w-full max-w-60 shadow-2xl'>
                <h2 className='text-3xl font-semibold' >12</h2>
                <p>Interactions This Month</p>
            </div>
        </div>
    );
};

export default NumberCards;