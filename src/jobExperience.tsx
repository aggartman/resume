// JobExperiences.tsx
import React, {useState} from 'react';
import './JobExperience.css';

// Define type for job experience data
type JobExperience = {
    company: string;
    title?: string;
    dates?: string;
    description?: string;
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

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="job-experiences-container w-full">
            {initialExperiences.map((exp, index) => (
                <div
                    key={index}
                    className={`job-card mb-3 shadow-2 ${expandedIndex === index ? 'expanded' : ''}`}
                    onClick={() => toggleExpand(index)}
                >
                    <div className="card-header p-3 flex align-items-center justify-content-between">
                        <h3 className="m-0">{exp.company}</h3>
                        <i className={`pi ${expandedIndex === index ? 'pi-chevron-up' : 'pi-chevron-down'}`}></i>
                    </div>

                    {expandedIndex === index && (
                        <div className="card-details p-3 pt-0 border-top-1 border-primary-100">
                            {exp.title && <h4 className="mt-2 mb-1">{exp.title}</h4>}
                            {exp.dates && <p className="text-sm text-color-secondary mt-0 mb-2">{exp.dates}</p>}
                            {exp.description && <p className="line-height-3">{exp.description}</p>}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default JobExperiences;