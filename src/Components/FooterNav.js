import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';
import Chaffle from 'chaffle';

const FooterNav = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0' + m : m;
    const current = h + ":" + m;







    const elements = document.querySelectorAll("[data-chaffle]");
    Array.prototype.forEach.call(elements, function (el) {
        const chaffle = new Chaffle(el, {
            /* options */
            speed: 10,
            delay: 150
        });
        el.addEventListener("mouseover", function () {
            chaffle.init();
        });
    });








    return (
        <div className='border-2 bg-gray-900 bg-opacity-90 border-pink-500 fixed bottom-0 w-full flex items-center justify-around'>
            <div className='flex items-center gap-2'>
                <Link to='/' className='flex justify-center items-center gap-1 onCursor border-pink-500 border-2 px-5 py-2 text-pink-500'>
                    <img src="http://cypherwebs.xyz/images/man.png" alt="profile" className='w-6' />
                    <h1 className='text-sm hidden md:block' data-chaffle="en">Profile.exe</h1>
                </Link>
                <Link to='/projects' className='flex justify-center items-center
            gap-1 onCursor border-pink-500 border-2 px-5 py-2 text-pink-500'>
                    <img src="http://cypherwebs.xyz/images/project.png" alt="Projects" className='w-6' />
                    <h1 className='text-sm hidden md:block' data-chaffle="en">Projects.bat</h1>

                </Link>
                <Link to='/skills' className='flex justify-center items-center
            gap-1 onCursor border-pink-500 border-2 px-5 py-2 text-pink-500'>
                    <img src="http://cypherwebs.xyz/images/skills.png" alt="Projects" className='w-6' />
                    <h1 className='text-sm hidden md:block' data-chaffle="en">Skills.pdf</h1>
                </Link>
                <Link to='/contacts' className='flex justify-center items-center
            gap-1 onCursor border-pink-500 border-2 px-5 py-2 text-pink-500'>
                    <img src="http://cypherwebs.xyz/images/contact.png" alt="Projects" className='w-6' />
                    <h1 className='text-sm hidden md:block' data-chaffle="en">Contact.zip</h1>
                </Link>
            </div>
            <div className='p-2 text-pink-600'>
                <h1 className='text-sm'>{current}</h1>
                <h1 className='text-sm'>{format(new Date(), 'P')}</h1>
            </div>


        </div>
    );
};

export default FooterNav;