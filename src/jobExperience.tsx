// JobExperiences.tsx
import React, {useState} from 'react';
import './JobExperience.css';

// Define type for job experience data
type JobExperience = {
    company: string;
    title?: string;
    dates?: string;
    description?: string;
    expanded?: boolean;
};

const JobExperiences: React.FC = () => {
    // Initial job experience data
    const initialExperiences: JobExperience[] = [
        {
            company: "CrowdStrike",
            title: "Salesforce Developer",
            dates: "November 2022 - May 2025",
            description: "Description of your role and achievements at CrowdStrike"
        },
        {
            company: "CVS Health",
            title: "Junior Salesforce Developer",
            dates: "Nov 2021 - Oct 2022",
            description: `Creation of custom applications and objects to bring teams online in Salesforce. 
      Participated in reimagining current business workflows and processes to better align with 
      Salesforce and currently deployed functionalities. 
      Help to lead a team of developers to stay on Sprint timeline and improve workflows and 
      practices to be more effective and efficient. 
      Participates in business and stakeholder meetings to demonstrate new work, ask questions 
      regarding current business practices and clarify new working models for the business team.`
        },
        {
            company: "Odin Project",
            title: "Your Role at Odin Project",
            dates: "Month YYYY - Month YYYY",
            description: "Description of your role and achievements at Odin Project"
        }
    ];

    // State to track expanded state of each card
    const [experiences, setExperiences] = useState(
        initialExperiences.map(exp => ({...exp, expanded: false}))
    );

    // Function to toggle expansion of a card
    const toggleExpand = (index: number) => {
        setExperiences(experiences.map((exp, i) =>
            i === index ? {...exp, expanded: !exp.expanded} : exp
        ));
    };

    return (
        <div className="experiences-container">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className={`experience-card ${exp.expanded ? 'expanded' : ''}`}
                    onClick={() => toggleExpand(index)}
                >
                    <div className="card-header">
                        <h3>{exp.company}</h3>
                    </div>

                    {exp.expanded && (
                        <div className='card-info'>
                            {exp.title && <h4>{exp.title}</h4>}
                            {exp.dates && <p className="card-dates">{exp.dates}</p>}
                            {exp.description && <p className="card-description">{exp.description}</p>}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default JobExperiences;