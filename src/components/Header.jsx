import React from 'react';
import ViewMyWorkBtn from './ViewMyWorkBtn';
import Resume from './resume';
import HeaderImg from '../assets/images/header.jpg';

function Header() {
    return (
        <header className='pt-5' id='header'>
            <div className='container py-md-5'>
                <div className='row'>
                    <div className='col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0'>
                        <h2 className='text-info fw-bold lh-1'>Shubham Kumar</h2>
                        <h1 className='text-capitalize text-start text-primary lh-1 mb-5'>
                            Aspiring <br /> <span className='text-success'>Software developer</span> 
                        </h1>
                        {/* <ViewMyWorkBtn /> */}
                        <Resume />
                    </div>
                    <div className='col-md-6 d-flex justify-content-center justify-content-md-end'>
                        <img className='img-fluid w-75 rounded-circle shadow my-5' src={HeaderImg} alt="header img" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;