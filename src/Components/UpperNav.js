import React from 'react';

const UpperNav = ({ name, location }) => {
    return (
        <div>
            <div className='flex justify-between items-center px-2 border-b-2 border-pink-500'>
                <div className=''>
                    <h1 className='text-2xl text-pink-400'>{name}</h1>
                    <p className='text-lg' style={{ 'fontFamily': 'sans' }}>{location}</p>
                </div>
                <div className='flex items-center gap-4 text-pink-500'>
                    <div className="onCursor">‒</div>
                    <div className="onCursor">❏</div>
                    <div className="onCursor">x</div>
                </div>

            </div>

        </div>
    );
};

export default UpperNav;