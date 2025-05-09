//import { useState } from 'react'

import './App.css'
import 'primereact/resources/themes/lara-dark-amber/theme.css'
import 'primeflex/primeflex.css';

function App() {


  return (
    <>
        <div className='App flex-column flex align-items-center justify-content-center w-full'>
            <div className='App-header absolute top-0 flex-row flex align-items-center justify-content-center w-full max-w-full gap-1'>
                <h1 className="flex-grow-1 font-bold flex text-center px-4 w-full">Austin Rizer</h1>
                <h3 className="flex-shrink-0 font-italic flex text-center px-5 w-auto">Software Developer, Salesforce Engineer, Photographer</h3>
            </div>
            <div className='App-body flex-column flex-grow-1 flex align-items-center justify-content-center gap-0 w-full max-w-full'>
                <h2 className='block text-left font-bold px-3 border-50 underline'>Experience</h2>
                <div className='flex-row flex w-full align-content-center justify-content-center gap-2'>
                <div className='card flex align-content-center justify-content-center min-w-min w-full'>
                    <h3>CrowdStrike</h3>
                </div>
                <div className='card flex align-content-center justify-content-center min-w-min w-full'>
                    <h3>CVS Health</h3>
                    {/*<h5>Junior Salesforce Developer</h5>*/}
                    {/*<p>Nov 2021 - Oct 2022</p>*/}
                    {/*<p>*/}
                    {/*Creation of custom applications and objects to bring teams online in Salesforce*/}
                    {/*Participated in reimagining current business workflows and processes to better align with Salesforce and currently deployed functionalities.*/}
                    {/*Help to lead a team of developers to stay on Sprint timeline and improve workflows and practices to be more effective and efficient.*/}
                    {/*Participates in business and stakeholder meetings to demonstrate new work, ask questions regarding current business practices and clarify new working models for the business team.*/}
                    {/*</p>*/}
                </div>
                <div className='card flex align-content-center justify-content-center min-w-min w-full'>
                    <h3>Odin Project</h3>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
