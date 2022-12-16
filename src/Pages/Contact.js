import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import UpperNav from '../Components/UpperNav';
import { useSpring, animated } from '@react-spring/web'
import { FaPhoneAlt } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Contact = () => {
    const springs = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1 },
        delay: 200,
    })

    //email js api
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7delwwt', 'template_hxo3l0e', form.current, 'jrayd2ublJ-1T2i0v')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                toast.success('Message Sent Successfully!');
            }, (error) => {
                console.log(error.text);
                toast.error(error.text)
            });
    };



    return (
        <animated.div style={springs}>
            <div className='flex justify-center items-center lg:h-screen mx-5  lg:m-0 lg:p-0'>
                <div className='container text-white border-pink-500 border-2 rounded-t-lg bg-gray-900 bg-opacity-90'>
                    <UpperNav name='Contacts.zip' location='c:\user\ThisPC\Contact' />
                    <h1 className='text-center my-2 text-xl'>Get In Touch</h1>
                    <div className='flex flex-col lg:flex-row lg:justify-around'>
                        <div className="p-6 rounded-lg shadow-lg 
                        ">


                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-group mb-6">
                                    <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-pink-500
        bg-clip-padding
        border border-solid
        opacity-50
        focus:opacity-75
        rounded
        transition
        ease-in-out
        m-0
        focus:text-pink-600 focus:outline-none"
                                        placeholder="Name"
                                        name="user_name"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email" className="form-control block
         w-full
         px-3
         py-1.5
         text-base
         font-normal
         text-pink-500
         bg-clip-padding
         border border-solid
         opacity-50
         focus:opacity-75
         rounded
         transition
         ease-in-out
         m-0
         focus:text-pink-600 focus:outline-none"
                                        placeholder="Email address"
                                        name="user_email"
                                        required />
                                </div>
                                <div className="form-group mb-6">
                                    <textarea
                                        required
                                        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-pink-500
        bg-clip-padding
        border border-solid
        opacity-50
        focus:opacity-75
        rounded
        transition
        ease-in-out
        m-0
        focus:text-pink-600 focus:outline-none"
                                        rows="3"
                                        placeholder="Message"
                                        name="message"
                                    ></textarea>
                                </div>
                                <button value="Send" type="submit" className="
      w-full
      px-6
      py-2.5
      bg-pink-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-pink-700 hover:shadow-lg focus:outline-none focus:ring-0
      active:shadow-lg
      opacity-80
      transition
      duration-150
      ease-in-out onCursor">Send</button>
                            </form>
                        </div>
                        <div className='flex flex-col justify-center items-center lg:items-start gap-8'>
                            <div className='flex items-center gap-2'>
                                <FaPhoneAlt className='text-3xl text-pink-600' />
                                <h1 className='text-pink-600'>+880 1816836486</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <HiOutlineMail className='text-3xl text-pink-600' />
                                <h1 className='text-pink-600'>mdfarhansadiq17@gmail.com</h1>
                            </div>
                            <div className="text-3xl flex gap-5 my-2 text-pink-600">
                                <a className='onCursor' href='https://github.com/farhan-sadiq-mahi'>
                                    <BsGithub />
                                </a>
                                <a className='onCursor' href='https://www.linkedin.com/in/md-farhan-sadiq/'>
                                    <BsLinkedin />
                                </a>
                                <a className='onCursor' href='https://twitter.com'>
                                    <BsTwitter />
                                </a>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </animated.div >
    );
};


export default Contact;
