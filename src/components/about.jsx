const About = (props) => {
    return (
        <div id="about-me" name="about-me" className="hero bg-base-100 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
            <img className="max-w-sm rounded-lg shadow-2xl lg:ml-6 mb-4" src="src\assets\selfie.JPEG"/>
            <img className="max-w-sm rounded-lg shadow-2xl lg:ml-6" src="src\assets\profCam.JPEG"/>
        </div>
        <div className="text-left w-3/5 mx-auto">
            <h1 className="text-4xl font-bold tracking-wider mb-4">/about-me</h1>
            <hr className="border-t-2 border-secondary mb-6"></hr>

            <p className="py-2 font-medium">
                I am <span className="text-secondary font-semibold">currently serving National Service</span> and will begin studying Computer Science 
                at <span className="text-secondary font-semibold">NUS</span> next year.
            </p>
            <p className="py-2">
                In 2023, I graduated with a diploma in 
                <span className="text-secondary"> Cybersecurity and Digital Forensics </span> from Nanyang Polytechnic, 
                focusing on Operational Intelligence and Artificial Intelligence.
            </p>
            <p className="py-2">
                I am passionate about <span className="text-accent font-semibold">Software Engineering, Cybersecurity, and Machine Learning. </span> 
                I have a curious mind which makes me want to explore, learn, and create new innovative technologies.
            </p>

            <div className="py-4">
                <h2 className="text-md font-semibold mb-3">Technologies I've worked with:</h2>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    {/* Programming Languages */}
                    <div className="card bg-base-300 shadow-md p-3">
                        <h3 className="font-bold text-secondary mb-1">Programming Languages</h3>
                        <ul className="list-disc list-inside">
                            <li>C</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>Kotlin</li>
                            <li>JavaScript</li>
                            <li>HTML & CSS</li>
                        </ul>
                    </div>
                    {/* Frameworks & Libraries */}
                    <div className="card bg-base-300 shadow-md p-3">
                        <h3 className="font-bold text-secondary mb-1">Frameworks & Libraries</h3>
                        <ul className="list-disc list-inside">
                            <li>Flask</li>
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>TailwindCSS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    {/* Databases */}
                    <div className="card bg-base-300 shadow-md p-3">
                        <h3 className="font-bold text-secondary mb-1">Databases</h3>
                        <ul className="list-disc list-inside">
                            <li><span className="font-semibold">SQL:</span> PostgreSQL, MySQL, SQLite</li>
                            <li><span className="font-semibold">NoSQL:</span> MongoDB</li>
                        </ul>
                    </div>
                    {/* DevOps & Cloud */}
                    <div className="card bg-base-300 shadow-md p-3">
                        <h3 className="font-bold text-secondary mb-1">DevOps & Cloud</h3>
                        <ul className="list-disc list-inside">
                            <li>Docker</li>
                            <li>Jenkins CI/CD</li>
                            <li>AWS Cloud</li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className="py-3 ">
                Outside of work, I enjoy reading, working out, and watching anime.
            </p>
        </div>
    </div>
</div>

    );
};

export default About;