import React from 'react';
import UpperNav from '../Components/UpperNav';
import { useSpring, animated } from '@react-spring/web'
import img1 from '../assets/cardImg/1.png'
import img2 from '../assets/cardImg/2.png'
import img3 from '../assets/cardImg/3.png'
import { DiCode } from 'react-icons/di'
import { FaLaptopCode } from 'react-icons/fa'

const Projects = () => {
    const springs = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1 },
        delay: 200,
    })
    return (
        <animated.div style={springs}>
            <div className='flex justify-center items-center lg:h-screen mx-5 mt-6 pb-16 lg:m-0 lg:p-0'>
                <div className='container text-white border-pink-500 border-2 rounded-t-lg bg-gray-900 bg-opacity-90'>
                    <UpperNav name='Projects.bat' location='c:\user\ThisPC\Projects' />


                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 px-3 py-4'>



                        <div className="p-4 border-dashed border-2 border-pink-500 rounded-lg">

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <img src={img1} alt="" className="block object-cover object-center w-full rounded-md h-44s" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className=" text-violet-400 text-center">Happy Bank App</h3>
                                    <p className="leading-snug text-center" style={{ 'fontSize': '10px' }}>Happy Bank App.  Designed by using React, vite , Tailwind css. Modern UI design and fully responsive, Get more details on github.</p>
                                </div>
                                <div className='flex justify-around'>
                                    <a href='https://github.com/farhan-sadiq-mahi/hoo-bank-frontend-design' className='px-2 flex items-center onCursor text-pink-500 hover:text-white
                                    rounded-sm hover:bg-violet-700' style={{ 'border': '1px solid pink' }}> <DiCode className='inline text-4xl' /> Code</a>
                                    <a href='https://hoo-bank-frontend-design.vercel.app/' className='px-2 flex items-center onCursor text-pink-500 hover:text-white
                                    rounded-sm hover:bg-violet-700' style={{ 'border': '1px solid pink' }}> <FaLaptopCode className='inline text-2xl mr-2' /> Live</a>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-dashed border-2 border-pink-500 rounded-lg">

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <img src={img2} alt="" className="block object-cover object-center w-full rounded-md h-44s" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className=" text-violet-400 text-center">Gericht Restaurant</h3>
                                    <p className="leading-snug text-center" style={{ 'fontSize': '10px' }}>Welcome to the front end design for Gericht restaurant! This design aims to provide a seamless and enjoyable experience for our customers when ordering and browsing through our menu.</p>
                                </div>
                                <div className='flex justify-around'>
                                    <a href='https://github.com/farhan-sadiq-mahi/restaurant-frontend-design' className='px-2 flex items-center onCursor text-pink-500 hover:text-white
                                    rounded-sm hover:bg-violet-700' style={{ 'border': '1px solid pink' }}> <DiCode className='inline text-4xl' /> Code</a>
                                    <a href='https://restaurant-frontend-design-1d38.vercel.app/' className='px-2 flex items-center onCursor text-pink-500 hover:text-white
                                    rounded-sm hover:bg-violet-700' style={{ 'border': '1px solid pink' }}> <FaLaptopCode className='inline text-2xl mr-2' /> Live</a>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-dashed border-2 border-pink-500 rounded-lg">

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <img src={img3} alt="" className="block object-cover object-center w-full rounded-md h-44s" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className=" text-violet-400 text-center">Snappy Chat App</h3>
                                    <p className="leading-snug text-center" style={{ 'fontSize': '10px' }}>Snappy chat app.A real-time chat app built with the MERN stack (MongoDB, Express, React, and Node.js) and socket.io, send and receive message, emoji and file instantly. Log in and start using snappy chat app.</p>
                                </div>
                                <div className='flex justify-around'>
                                    <a href='https://chat-app-client-nine.vercel.app/' className='px-2 flex items-center onCursor text-pink-500 hover:text-white
                                    rounded-sm hover:bg-violet-700' style={{ 'border': '1px solid pink' }}> <DiCode className='inline text-4xl' /> Code</a>
                                    <a href='https://github.com/farhan-sadiq-mahi/chat-app-client' className='px-2 flex items-center onCursor text-pink-500 hover:text-white
                                    rounded-sm hover:bg-violet-700' style={{ 'border': '1px solid pink' }}> <FaLaptopCode className='inline text-2xl mr-2' /> Live</a>

                                </div>
                            </div>
                        </div>












                    </div>
                </div>
            </div>
        </animated.div>
    );
};

export default Projects;