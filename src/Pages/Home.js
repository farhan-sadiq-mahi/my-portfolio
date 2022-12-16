import React, { useEffect, useState } from 'react';
import UpperNav from '../Components/UpperNav';
import { useSpring, animated } from '@react-spring/web'
import Chaffle from 'chaffle';
import Typewriter from 'typewriter-effect';





const Home = () => {

    // shaffle 

    const [pageLoad, setPageLoad] = useState(false);
    useEffect(() => {
        setPageLoad(true)
        setTimeout(() => {
            setPageLoad(false)
        }, 3000)
    }, [])

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

    const element = document.getElementsByClassName("fame");
    Array.prototype.forEach.call(element, function (el) {
        const chaffle = new Chaffle(el, {
            /* options */
            speed: 10,
            delay: 200
        });
        if (pageLoad) {
            chaffle.init();
        };
    });

    // end shaffle 

    const springs = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1 },
        delay: 200,
    })

    return (
        <animated.div style={springs}>
            <div className='flex justify-center items-center h-screen'>
                <div className='container text-white border-pink-500 border-2 rounded-t-lg bg-gray-900 bg-opacity-90'>
                    <UpperNav name='Profile.exe' location='c:\user\ThisPC\Desktop' />


                    <div className='grid grid-cols-1 lg:grid-cols-2 my-8'>

                        <div className=''>
                            <div className='flex flex-col items-center'>
                                <img className='profilePicture border-pink-400 border-2' src="https://i.ibb.co/NSBLjsj/IMG-20221208-113448-123.jpg" alt="" />
                                <h2 data-chaffle="en" className='text-2xl text-pink-600 fame'>
                                    Md. Farhan Sadiq
                                </h2>
                                <p className='text-center'>
                                    "Build Your Dreams to Reality"
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center flex-col items-center lg:items-start text-pink-500'>


                            <div className='text-center lg:text-left'>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString('MERN Stack Developer from Dhaka, Bangladesh. Loves to build the dream of professionals!')
                                            .pauseFor(100)
                                            .start();
                                    }}
                                />
                            </div>
                            <a href="MdFarhan's resume.pdf" download="MdFarhan's resume.pdf" className=' py-2 px-3 border-2 border-pink-600 onCursor mt-2 text-sm text-center'>Download Resume</a>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    );
};

export default Home;