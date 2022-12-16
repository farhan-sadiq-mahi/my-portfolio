import React from 'react';
import UpperNav from '../Components/UpperNav';
import { useSpring, animated } from '@react-spring/web'
import Marquee from "react-fast-marquee";

const Skills = () => {
    const springs = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1 },
        delay: 200,
    })



    return (
        <animated.div style={springs}>
            <div className='flex justify-center items-center lg:h-screen mx-5 mt-24 lg:m-0 lg:p-0'>
                <div className='container text-white border-pink-500 border-2 rounded-t-lg bg-gray-900 bg-opacity-90'>
                    <UpperNav name='Skills.pdf' location='c:\user\ThisPC\Skills' />


                    <div className=''>
                        <div className='my-6'>
                            <h1 className='text-center mb-3 text-pink-400 text-xl'>Front End</h1>
                            <Marquee gradient={false} speed={50}>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                                    <h2>HTML5</h2>
                                </div>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://logodix.com/logo/1111675.png" alt="logo" />
                                    <h2>CSS3</h2>
                                </div>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://1.bp.blogspot.com/-TGQt5uRcAkg/XuMIJoAhwnI/AAAAAAAAA38/FaJQpUUDsGEYR1zBK1wqLWUA9DTYp5CiQCPcBGAYYCw/s587/js.png" alt="logo" />
                                    <h2>JAVASCRIPT</h2>
                                </div>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt="logo" />
                                    <h2>REACT</h2>
                                </div>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://iconape.com/wp-content/png_logo_vector/tailwind-css-logo.png" alt="logo" />
                                    <h2>Tailwind</h2>
                                </div>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png" alt="logo" />
                                    <h2>MATERIAL UI</h2>
                                </div>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/640px-Vitejs-logo.svg.png" alt="logo" />
                                    <h2>VITE</h2>
                                </div>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/640px-Git_icon.svg.png" alt="logo" />
                                    <h2>GIT</h2>
                                </div>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Cib-next-js_%28CoreUI_Icons_v1.0.0%29.svg/640px-Cib-next-js_%28CoreUI_Icons_v1.0.0%29.svg.png" alt="logo" />
                                    <h2>NEXT JS</h2>
                                </div>
                            </Marquee>
                        </div>
                        <div className='mb-12'>
                            <h1 className='text-center my-3 text-pink-400 text-xl'>Back End</h1>
                            <Marquee gradient={false} speed={50}>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/640px-Node.js_logo_2015.svg.png" alt="logo" />
                                    <h2>NODE JS</h2>
                                </div>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="logo" />
                                    <h2>EXPRESS JS</h2>
                                </div>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="logo" />
                                    <h2>MONGO DB</h2>
                                </div>
                                <div className='flex flex-col items-center gap-4 mx-32'>
                                    <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png" alt="logo" />
                                    <h2>FIREBASE</h2>
                                </div>
                            </Marquee>
                        </div>


                    </div>
                </div>
            </div>
        </animated.div >
    );
};


export default Skills;