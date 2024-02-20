'use client'
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useSpring, animated } from 'react-spring';
import Image from "next/image";
import c1 from "../images/contactbg.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import help1 from "../images/help1.png";
import help2 from "../images/help2.png";

export default function Page() {
    const form = useRef();
    const [hover, setHover] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oca7c0v', 'template_8oikmqd', form.current, '5Fzhb45Zp1gGGcW1M')
            .then((result) => {
                console.log(result.text);
                alert("Email sent successfully");
            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        setHover(true); // Trigger animation when component mounts
    }, []);

    const imageSpring = useSpring({
        from: { opacity: 0, transform: 'rotate(180deg) scale(0.5)' },
        to: { opacity: 1, transform: 'rotate(0deg) scale(1)' },
        config: { tension: 200, friction: 10 },
    });

    useEffect(() => {
        // Apply fading effect when component mounts
        const text = document.querySelectorAll('.fade-in-text');
        text.forEach(el => {
            el.classList.add('fade-in-animation');
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000, // Adjust the speed of automatic scrolling
        autoplay: true, // Enable automatic scrolling
        autoplaySpeed: 0, // Set to 0 to enable continuous scrolling
        cssEase: 'linear',
        slidesToShow: 5, // Adjust the number of slides to show
        slidesToScroll: 1,
        vertical: false, // Set to false for horizontal scrolling
        verticalSwiping: false, // Set to false for horizontal scrolling
    };

    return (
        <div>
            <div className="bg-[#23272A]  pt-6">
            <Header />
                <h2 className=" text-4xl lg:text-6xl font-bold text-center text-white fade-in-text font-mono">Help Center</h2>
                <p className="text-white font-mono text-xl text-center pt-3 fade-in-text">Unity Talk's Help Center revolutionizes support through an innovative email-centric approach,<br /> turning your inbox into a dynamic arena for collaborative problem-solving. When you send out a query,<br /> it's not just an email; it's an invitation for developers worldwide to join forces in unraveling coding complexities <br />or refining design challenges. Your inbox transforms into a real-time discussion space, <br />where each response is a piece of the puzzle contributed by the community.</p>
                <div className="flex">
                    <animated.div
                        className="hidden md:block mr-auto rounded-sm pb-16"
                        style={{ ...imageSpring }}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <Image
                            src={help1}
                            alt=""
                            className="object-cover"
                            width={500}
                            height={500}
                        />
                    </animated.div>
                    <animated.div
                        className="ml-auto rounded-sm pb-16"
                        style={{ ...imageSpring }}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <Image
                            src={help2}
                            alt=""
                            className="object-cover"
                            width={500}
                            height={500}
                        />
                    </animated.div>
                </div>
            </div>
            <div className=" relative pt-24">
                <div className="mt-[50px] text-center">
                    <h2 className="font-bold text-5xl fade-in-text font-mono">Need help? We've got your back.</h2>
                    <p className="text-2xl mt-[30px] fade-in-text font-mono">From account settings to permissions, find help for everything Unity Talk<br />
                        If you're new to Unity Talk and looking for tips, Visit Our Email Box
                    </p>
                </div>
                <div className="relative card lg:w-[700px] lg:h-[500px] bg-base-100 shadow-xl image-full lg:mt-[100px] ml-[30px] lg:ml-[500px] w-[300px] h-[50px] mt-[50px]">
                    <figure><Image src={c1} alt="" className="object-cover w-full h-full" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center text-white text-5xl fade-in-text">Email Us🚀</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" placeholder="Your Email" name="user_email" className="input input-bordered w-full text-lg mt-[10px] text-black fade-in-text" />
                            <input type="text" placeholder="Your Name" name="user_name" className="input input-bordered w-full text-lg mt-[10px] text-black fade-in-text" />
                            <input type="text" placeholder="Your Subject" className="input input-bordered w-full text-lg mt-[10px] text-black fade-in-text" />
                            <textarea placeholder="Your Message" name="message" className="input input-bordered w-full h-[100px] text-lg mt-[10px] text-black fade-in-text"></textarea>
                            <input type="submit" className="card-actions mt-[10px] btn btn-[#27232A] w-full text-xl fade-in-text" value="Send" />
                        </form>
                    </div>
                </div>
                <div className="flex space-x-6 carousel-container overflow-x-auto mt-[550px] lg:mt-[100px]">
                        <div className="card w-64 glass shadow-lg">
                            <figure><Image src={help1} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Life hack</h2>
                            </div>
                        </div>

                        <div className="card w-64 glass">
                            <figure><Image src={help1} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Life hack</h2>
                            </div>
                        </div>

                        <div className="card w-64 glass">
                            <figure><Image src={help1} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Life hack</h2>
                            </div>
                        </div>

                        <div className="card w-64 glass">
                            <figure><Image src={help1} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Life hack</h2>
                            </div>
                        </div>

                        <div className="card w-64 glass">
                            <figure><Image src={help1} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Life hack</h2>
                            </div>
                        </div>

                        <div className="card w-64 glass">
                            <figure><Image src={help1} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Life hack</h2>
                            </div>
                        </div>
                    </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}
