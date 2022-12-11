import React from 'react';
import { Link } from 'react-router-dom';
import CellFlip from './../../assets/CellFlip.png'
import service from './../../assets/service.png'
import ASCII from './../../assets/ASCII.png'

const Projects = () => {
    return (
        <div className='px-12'>
            <h2 className='text-white text-3xl font-bold'>MY PROJECTS</h2>
            <div className='flex justify-center flex-wrap'>
                <div className="card w-96 glass mt-20 lg:mr-20 hover:scale-110 transition ease-in">
                    <figure><img src={CellFlip} alt="car!" className='h-72' /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto ">Cell Flip</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-center">
                            <Link to='https://cellflip.web.app/' className="btn btn-outline w-full">Visit Website</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass mt-20 lg:mr-20 hover:scale-110 transition ease-in">
                    <figure>
                        <img src={service} alt="car!" className='object-fill h-72' />
                    </figure>
                    {/* <figure>
                        <iframe width="560" height="315" src="https://service-review-f334a.web.app/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </figure> */}
                    <div className="card-body">
                        <h2 className="card-title mx-auto">SafaTours</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-center">
                            <Link href='https://service-review-f334a.web.app/' className="btn btn-outline w-full">Visit Website</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96  glass mt-20 hover:scale-110 transition ease-in">
                    <figure><img src={ASCII} alt="car!" className='object-fill h-72' /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">ASCII</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-center">
                            <Link to='https://learning-platform-79b53.web.app/' className="btn btn-outline w-full">Visit Website</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;