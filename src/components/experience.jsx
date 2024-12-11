import React, { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

const Experience = (props) => {
    const elementsRef = useRef([]);

    // Define the callback for when elements intersect
    const handleIntersect = (element) => {
        element.classList.add("active");
    };

    // Use the custom hook
    useIntersectionObserver(elementsRef, handleIntersect);

    return (
      <div id="experience" name="experience" className="anchor bg-base-100 min-h-96 mt-14 lg:mx-10">
        <div className="flex-col text-left">
            {/* Header Section */}
            <div className="w-full">
                <h1 className="text-4xl font-bold tracking-wider mb-4">/experience</h1>
                <hr ref={(el) => (elementsRef.current[0] = el)}  className="border-t-4 border-secondary mb-6"></hr>
            </div>
  
            {/* Content Section */}
            <div role="tablist" className="tabs tabs-bordered tabs-lg w-full">
                <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg font-semibold min-w-48" aria-label="DSTA" defaultChecked/>
                <div role="tabpanel" className="tab-content pt-10 min-h-80">
                    <h3 className="lg:text-2xl text-lg font-semibold">Cybersecurity Intern @ <span className="text-primary font-semibold">DSTA Cybersecurity Programme Centre</span></h3>
                    <p className="lg:text-lg">Mar 2022 - Aug 2022 (6 Months)</p>
                    <ul className="list-disc list-inside lg:text-lg pt-4 space-y-4">
                        <li>Designed and deployed a robust DevSecOps pipeline for Android applications using Jenkins and GitLab, 
                        automating security testing and integrating seamless feedback loops into the development lifecycle.
                        </li>
                        <li>
                        Engineered Python scripts and integrated tools to automate dynamic security analysis of Android applications, 
                        aligning with OWASP MASVS standards to ensure comprehensive threat detection and compliance.
                        </li>
                    </ul>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg font-semibold min-w-48" aria-label="SAF MINDEF (NS)" />
                <div role="tabpanel" className="tab-content pt-10 min-h-80">
                <h3 className="lg:text-2xl text-lg font-semibold">Admin Support Assistant (Data Analyst) @ <span className="text-primary font-semibold">G1 Army</span></h3>
                    <p className="lg:text-lg">Dec 2023 - Aug 2025 (1 Year 8 Months)</p>
                    <ul className="list-disc list-inside lg:text-lg pt-4 space-y-2">
                        <li>
                            Conducted detailed trend analysis to identify patterns and anomalies, supporting strategic planning and operational efficiency.
                        </li>
                        <li>
                            Designed and implemented dashboards in PowerBI for the army, providing data-driven insights into key metrics and operational trends.
                        </li>
                        <li>
                            Developed VBA scripts to streamline repetitive processes, reducing task completion time by up to 40% and improving team productivity.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Experience;
  