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
                <h1 className="flex-grow-1 font-bold flex text-left px-4 w-full">Austin Rizer</h1>
                <h3 className="flex-shrink-0 font-italic flex text-center px-5 w-auto">Software Developer, Salesforce Engineer, Photographer</h3>
            </div>
            <div className='App-body flex-row flex-grow-1 flex align-items-start justify-content-between gap-4 w-full max-w-full p-4 mt-6'>
                {/* Left section - Profile photo and bio */}
                <div className='profile-section flex-column flex align-items-center w-4 md:w-3'>
                    <div className='profile-photo-container mb-3'>
                        <img
                            src='src/assets/tempProfilePhoto.jpg'
                            alt="Austin Rizer"
                            className="profile-photo border-round-xl shadow-4"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>

                    <div className='bio-section p-3 border-round-xl shadow-2'>
                        <h2 className='font-bold my-2 border-y-1 border-primary py-2'>About Me</h2>
                        <p className='line-height-3 text-justify'>
                            Hello! I'm Austin Rizer, a passionate software developer and Salesforce engineer with a
                            background in photography. I specialize in building efficient, user-friendly applications
                            that solve real-world problems. With experience in both frontend and backend development,
                            I bring a holistic approach to software engineering.

                            {/* Add more details about your skills, interests, and professional journey */}
                        </p>
                    </div>
                </div>

                {/* Right section - Experience cards */}
                <div className='experience-section flex-column flex w-8 md:w-9'>
                    <h2 className='block text-left font-bold pt-4 px-3 border-50 underline mb-3'>Experience</h2>
                    <div className='flex-column flex w-full'>
                        <JobExperiences />
                    </div>
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
