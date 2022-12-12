import React from 'react';
import ascii_hero from '../../assets/ascii_hero.png'
import ascii_courses from '../../assets/ascii_courses.png'
import ascii_course_details from '../../assets/ascii_course_details.png'
import ascii_faq from '../../assets/ascii_faq.png'

const ProjectPage3 = () => {
    return (
        <div className='w-2/3 mx-auto'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={ascii_hero} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-outline">❮</a>
                        <a href="#slide2" className="btn btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={ascii_courses} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-outline">❮</a>
                        <a href="#slide3" className="btn btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={ascii_course_details} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-outline">❮</a>
                        <a href="#slide4" className="btn btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={ascii_faq} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-outline">❮</a>
                        <a href="#slide1" className="btn btn-outline">❯</a>
                    </div>
                </div>
            </div>
            <div className='mt-14  mb-5'>
                <h1 className='font-bold text-5xl'>ASCII Quiz Website</h1>
                <p className='mt-3'>A website to Review Services</p>
            </div>
            <div className='flex flex-col items-start'>

                <h2 className='font-bold text-2xl'>Live Demo Link: https://learning-platform-79b53.web.app</h2>
                <h2 className='font-bold text-2xl'>Client Side Repo: https://github.com/SaFaUU/learning-platform-client</h2>
                <h2 className='font-bold text-2xl'>Server Side Repo: https://github.com/SaFaUU/learning-platform-server</h2>
                <p className='font-bold text-2xl mt-8'>
                    Features
                </p>
                <ul className='flex flex-col items-start' style={{ 'list-style-type': 'circle' }}>
                    <li>Authentication with Google</li>
                    <li>Authentication with Github</li>
                    <li>Authentication with Email & Password</li>
                    <li>Registration</li>
                    <li>Checkout Page Secured with Private Route</li>
                    <li>Beautiful Animated UI Transition</li>
                    <li>Avatar Display</li>
                    <li>PDF Download of the Web Page</li>
                    <li>Blog Page</li>
                </ul>

                <p className='font-bold text-2xl mt-8'>
                    Tech Stack
                </p>
                <ul className='flex flex-col items-start' style={{ 'list-style-type': 'circle' }}>
                    <li className='text-left'><span className='font-bold'>Client: </span> React,
                        Firebase, Tailwind, React Router, React-to-PDF, React Icons, Daisy UI</li>
                    <li><span className='font-bold'>Server: </span> Node, Express, mongoDB, CORS, dotenv</li>
                </ul>
            </div>

        </div>
    );
};

export default ProjectPage3;