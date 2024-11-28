import { FaGithub } from "react-icons/fa";

const Projects = (props) => {
    return (
        <div id="projects" name="projects" className="bg-base-100 min-h-svh">
            <div className="text-left w-3/5">
                <h1 className="text-4xl font-bold tracking-wider mb-4">/projects</h1>
                <hr className="border-t-2 border-secondary mb-6"></hr>
            </div>
            
            <div className="carousel w-4/5">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                    src="src/assets/test.png"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-1">
                <div className="card card-compact bg-primary text-primary-content text-left m-0 p-0 w-96 h-56">
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
                <div className="card card-compact bg-primary text-primary-content text-left m-0 p-0 w-96 h-56">
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
                <div className="card card-compact bg-primary text-primary-content text-left m-0 p-0 w-96 h-56">
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