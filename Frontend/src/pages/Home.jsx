import React from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';

export default function Home() {
    return (
       <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-2 col-md-2 min-vh-100 shadow'>
                <Sidebar></Sidebar>
                </div>
            <div className='col-lg-10 col-md-10'>
                <Navbar/>
                </div>
        </div>
       </div>
    )
}