import React from 'react';
import safatours_hero from '../../assets/safatours_hero.png'
import safatours_add_service from '../../assets/safatours_add_service.png'
import safatours_services from '../../assets/safatours_services.png'
import safatours_blogs from '../../assets/safatours_blogs.png'

const ProjectPage2 = () => {
    return (
        <div className='w-2/3 mx-auto'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={safatours_hero} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-outline">❮</a>
                        <a href="#slide2" className="btn btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={safatours_add_service} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-outline">❮</a>
                        <a href="#slide3" className="btn btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={safatours_services} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-outline">❮</a>
                        <a href="#slide4" className="btn btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={safatours_blogs} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-outline">❮</a>
                        <a href="#slide1" className="btn btn-outline">❯</a>
                    </div>
                </div>
            </div>
            <div className='mt-14  mb-5'>
                <h1 className='font-bold text-5xl'>Safa Tours Service Website</h1>
                <p className='mt-3'>A website to Review Services</p>
            </div>
            <div className='flex flex-col items-start'>

                <h2 className='font-bold text-2xl'>Live Demo Link: https://service-review-f334a.web.app/</h2>
                <h2 className='font-bold text-2xl'>Client Side Repo: https://github.com/SaFaUU/service-review-client/</h2>
                <h2 className='font-bold text-2xl'>Server Side Repo: https://github.com/SaFaUU/service-review-server</h2>
                <p className='font-bold text-2xl mt-8'>
                    Features
                </p>
                <ul className='flex flex-col items-start' style={{ 'list-style-type': 'circle' }}>
                    <li>User can Login and Register</li>
                    <li>Authentication of Access Tokens using JWT Tokens</li>
                    <li>Social Login using Google</li>
                    <li>User can write reviews which will be saved in MongoDB</li>
                    <li>User can create new service right from the website</li>
                </ul>

                <p className='font-bold text-2xl mt-8'>
                    Tech Stack
                </p>
                <ul className='flex flex-col items-start' style={{ 'list-style-type': 'circle' }}>
                    <li className='text-left'><span className='font-bold'>Client: </span> React, TailwindCSS, DaisyUI, Firebase, Date- FNS, React-DOM-Router, React Query, Axios, React-icons.</li>
                    <li><span className='font-bold'>Server: </span> Node, Express, mongoDB, CORS, dotenv, stripe, jsonwebtoken</li>
                </ul>
            </div>

        </div>
    );
};

export default ProjectPage2;