import React, { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import { FaGithub } from "react-icons/fa";

const Projects = (props) => {
    const elementsRef = useRef([]);

    // Define the callback for when elements intersect
    const handleIntersect = (element) => {
        element.classList.add("active");
    };

    // Use the custom hook
    useIntersectionObserver(elementsRef, handleIntersect);

    return (
        <div id="projects" name="projects" className="anchor bg-base-100 min-h-svh mx-10 mt-10">
            <div className="text-left">
                <h1 className="text-4xl font-bold tracking-wider mb-4">/projects</h1>
                <hr ref={(el) => (elementsRef.current[0] = el)} className="border-t-4 border-secondary mb-6"></hr>
            </div>
            
            <div className="carousel w-4/5 rounded-box">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                    src="src/assets/test.png"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle anchor">❮</a>
                        <a href="#slide2" className="btn btn-circle anchor">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle anchor">❮</a>
                        <a href="#slide3" className="btn btn-circle anchor">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle anchor">❮</a>
                        <a href="#slide1" className="btn btn-circle anchor">❯</a>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-4">
                <div className="card card-compact bg-primary text-primary-content text-left m-0 p-0 h-56">
                    <div className="card-body p-0 ">
                        <h3 className="card-title m-0 p-0 align-top">Blogs App</h3>
                        <p>Full-stack Application for a blogs app.</p>
                        <p className="pt-4">NodeJS, ReactJS, TailwindCSS</p>
                        <div className="card-actions justify-end pb-3">
                            <a href="https://www.linkedin.com/in/ryan-neo/" className='text-primary-content' target="_blank">
                                <FaGithub className='h-8 w-8'></FaGithub>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-primary text-primary-content text-left m-0 p-0 h-56">
                    <div className="card-body p-0 ">
                        <h3 className="card-title m-0 p-0 align-top">Project Title 2</h3>
                        <p>Full-stack Application for a blogs app.</p>
                        <p className="pt-4">NodeJS, ReactJS, TailwindCSS</p>
                        <div className="card-actions justify-end pb-3">
                            <a href="https://www.linkedin.com/in/ryan-neo/" className='text-primary-content' target="_blank">
                                <FaGithub className='h-8 w-8'></FaGithub>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-primary text-primary-content text-left m-0 p-0 h-56">
                    <div className="card-body p-0 ">
                        <h3 className="card-title m-0 p-0 align-top">Project Title 3</h3>
                        <p>Full-stack Application for a blogs app.</p>
                        <p className="pt-4">NodeJS, ReactJS, TailwindCSS</p>
                        <div className="card-actions justify-end pb-3">
                            <a href="https://www.linkedin.com/in/ryan-neo/" className='text-primary-content' target="_blank">
                                <FaGithub className='h-8 w-8'></FaGithub>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;