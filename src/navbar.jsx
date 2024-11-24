import githubLogo from './assets/github.svg'
import linkedinLogo from './assets/linkedin.svg'

const Navbar = (props) => {
    return(
    <div className="drawer h-screen">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-100 w-full sticky top-0">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    </label>
                </div>
                <div className="mx-2 flex-1 px-4 text-xl">Ryan Neo</div>
                <div className="navbar-center hidden flex-none lg:block">
                    <ul className="menu menu-horizontal">
                    {/* Navbar menu content here */}
                    <li><a href="/">Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Experience</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Education</a></li>
                    <li><a>Certifications</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* Socials Icon Links */}
                    <a href="https://github.com/ryanneozx" className='p-1' target="_blank">
                        <img src={githubLogo} className="h-8 w-8 color-primary fill-primary stroke-primary caret-primary accent-primary outline-primary fill-primary" alt="Github Social" />
                    </a>
                    <a href="https://www.linkedin.com/in/ryan-neo/" className='p-1' target="_blank">
                        <img src={linkedinLogo} className="h-8 w-8" color='black' alt="Linkedin Social" />
                    </a>
                    {/* <button className="btn btn-primary mt-4" data-toggle-theme="coffee,night" data-act-class="ACTIVECLASS">Switch Theme</button> */}
                    {/* Theme Dropdown Menu (for testing) */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">
                            Theme
                            <svg
                            width="12px"
                            height="12px"
                            className="inline-block h-2 w-2 fill-current opacity-60 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                            </svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
                            <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Default (Coffee)"
                                value="coffee" />
                            </li>
                            <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Night"
                                value="night" />
                            </li>
                            <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Retro"
                                value="retro" />
                            </li>
                            <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Cyberpunk"
                                value="cyberpunk" />
                            </li>
                            <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Valentine"
                                value="valentine" />
                            </li>
                            <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Aqua"
                                value="aqua" />
                            </li>
                        </ul>
                        </div>
                </div>
            </div>
            {/* Page content here */}
            {props.children}
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Experience</a></li>
            <li><a>Projects</a></li>
            <li><a>Education</a></li>
            <li><a>Certifications</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar