import React from 'react';
import AboutImg from '../assets/images/about.jpg';
import ViewMyWorkBtn from './ViewMyWorkBtn';

function AboutSection() {
    const linkedinUrl='http://www.linkedin.com/in/shubham-sebrin'
    return (
        <div className='bg-dark text-light py-5' id='about'>
            <div className='container'>
                <div className='flex-column-reverse flex-md-row row'>
                    <div className='col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center'>
                        <img className='img-fluid w-75 shadow' src={AboutImg} alt="about img" />
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h2 className='mb-5'>About me</h2>
                        <p className='text-start'>I'm Shubham Kumar, a 3rd-year undergraduate student at National Institute of Technology Agartala (NITA), pursuing a degree in Computer Science and Engineering. I'm an aspiring Software Developer with a growing passion for Artificial Intelligence and its real-world applications.</p>
                        <p className='text-start mb-5'>I enjoy building meaningful projects, exploring new technologies, and continuously improving my problem-solving and programming skills. I'm particularly interested in how AI can be used to create smarter, more efficient software solutions.</p>
                        <a href={linkedinUrl}>
                        <button className='btn btn-primary shadow text-capitalize'>Catch Me</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;