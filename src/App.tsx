import './App.css'
import 'primereact/resources/themes/lara-dark-amber/theme.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import JobExperiences from "./jobExperience.tsx";


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
                <div className='flex-row flex-wrap flex align-items-center justify-content-center gap-2 w-full max-w-full'>
                    <JobExperiences />
                </div>
            </div>
            <div className='footer absolute bottom-0 flex-row flex w-full max-w-full gap-1 align-content-center'>
                <div className='socialIcons absolute right-0 mr-4 mb-6 flex align-items-center justify-content-center gap-2' style={{color: 'var(--indigo-500'}}>
                    <a className='pi pi-github cursor-pointer' style={{fontSize: '1.5rem'}} href={'https://github.com/aggartman'} target="_blank" rel="noopener noreferrer" ></a>
                    <a className='pi pi-linkedin cursor-pointer'  style={{fontSize: '1.5rem'}} href={'https://www.linkedin.com/in/austinrizer/'} target="_blank" rel="noopener noreferrer" ></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
