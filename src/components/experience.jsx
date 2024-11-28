const Experience = (props) => {
    return (
        <div id="experience" name="experience" className="">
      <div  className="hero bg-base-100 min-h-96">
        
        <div className="hero-content flex-col text-left mt-4 w-full">
            {/* Header Section */}
            <div className="w-full">
            <h1 className="text-4xl font-bold tracking-wider mb-4">/experience</h1>
            <hr className="border-t-2 border-secondary mb-6"></hr>
            </div>
  
            {/* Content Section */}
            <div role="tablist" className="tabs tabs-bordered tabs-lg w-full accent-primary border-primary">
                <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg font-semibold accent-primary border-primary" aria-label="DSTA" defaultChecked/>
                <div role="tabpanel" className="tab-content bg-base-200 p-10 min-h-56">
                    <h3 className="text-2xl font-semibold">Cybersecurity Intern @ <span className="text-secondary font-semibold">DSTA Cybersecurity Programme Centre</span></h3>
                    <p className="text-lg">Mar 2022 - Aug 2022 (6 Months)</p>
                    <ul className="list-disc list-inside text-lg pt-4">
                        <li>
                            Implemented a DevSecOps pipeline for Android applications using Jenkins and GitLab.
                        </li>
                        <li>
                            Developed Python scripts and integrated tools for automated dynamic analysis of apps based on OWASP MASVS.
                        </li>
                    </ul>
                    
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg font-semibold" aria-label="SAF MINDEF (NS)" />
                <div role="tabpanel" className="tab-content p-10 bg-base-200 min-h-56">
                <h3 className="text-2xl font-semibold">Admin Support Assistant @ <span className="text-secondary font-semibold">G1 Army</span></h3>
                    <p className="text-lg">Dec 2023 - Aug 2025</p>
                    <ul className="list-disc list-inside text-lg pt-4">
                        <li>
                            Implemented a DevSecOps pipeline for Android applications using Jenkins and GitLab.
                        </li>
                        <li>
                            Developed Python scripts and integrated tools for automated dynamic analysis of apps based on OWASP MASVS.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      </div>
    );
};

export default Experience;
  