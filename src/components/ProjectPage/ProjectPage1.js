import React from 'react';
import cellflip_hero from '../../assets/cellflip-hero.png'
import cellflip_advertised from '../../assets/cellflip-advertised.png'
import cellflip_dashboard from '../../assets/cellflip-dashboard.png'
import cellflip_blogs from '../../assets/cellflip-blogs.png'

const ProjectPage1 = () => {
    return (
        <div className='w-2/3 mx-auto'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={cellflip_hero} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-outline">❮</a>
                        <a href="#slide2" className="btn btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={cellflip_advertised} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-outline">❮</a>
                        <a href="#slide3" className="btn btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={cellflip_dashboard} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-outline">❮</a>
                        <a href="#slide4" className="btn btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={cellflip_blogs} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-outline">❮</a>
                        <a href="#slide1" className="btn btn-outline">❯</a>
                    </div>
                </div>
            </div>
            <div className='mt-14  mb-5'>
                <h1 className='font-bold text-5xl'>CellFlip Ecommerce Website</h1>
                <p className='mt-3'>A website to sell used Mobile Phones.</p>
            </div>
            <div className='flex flex-col items-start'>

                <h2 className='font-bold text-2xl'>Live Demo Link: https://cellflip.web.app/</h2>
                <p className='font-bold text-2xl mt-8'>
                    Features
                </p>
                <ul className='flex flex-col items-start' style={{ 'list-style-type': 'circle' }}>
                    <li>User Login with Email and Password & Social Login using Google.</li>
                    <li>Sellers able to add Products right from UI.</li>
                    <li>Fully Responsive.</li>
                    <li>Condtional Dashboard for admin, user and seller according to their roles.</li>
                    <li>Payment for the products using stripe.</li>
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

export default ProjectPage1;