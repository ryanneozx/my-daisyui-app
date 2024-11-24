import mailIcon from '../assets/mail.svg'
import resume from '../assets/resume.pdf'

const Hero1 = (props) => {
    return(
    <div id="home" name="home" className="hero min-h-screen">
        <div className="hero-content text-center">
        <div className="max-w-md">
            <div className="avatar">
            <div className="w-24 rounded">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            </div>
            <div className="text-6xl font-bold typewriter inline-block">
            <h1>Hi, I'm Ryan.</h1>
            </div>
            <h2 className="text-2xl font-bold mt-2">Software Development and Cybersecurity is my thing.</h2>
            <p className="py-6">
            I'm currently a student based in Singapore. I have a profound interest in Web App Development, 
            Android App Development, and Cybersecurity surrounding them. 
            I have a curious mind which makes me want to explore and learn more about new technologies.
            </p>
            <div className='grid-cols-2'>
            <a href={resume} target='_blank'>
                <button className="btn btn-primary mr-2">
                <span className='text-primary-content'>View Resume</span>
                </button>
            </a>
            <button className="btn btn-secondary pt-1" >
                <a href="mailto:ryanneozx@gmail.com">
                <div className='grid-cols-2 text-secondary-content'>
                    <img src={mailIcon} className="inline-block mr-1 pb-1" fill="#ff0000" alt="Mail Icon" />
                    Get In Touch
                </div>
                </a>
            </button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Hero1