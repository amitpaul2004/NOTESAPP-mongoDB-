import React from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';
import Notes from '../components/Notes';
import NoteModal from '../components/NoteModal';

export default function Home() {
    return (
        <>
        <NoteModal title={'Create Notes'}/>
       <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-2 col-md-2 min-vh-100 shadow'>
                <Sidebar></Sidebar>
                </div>
            <div className='col-lg-10 col-md-10'>
                <Navbar/>
                <div className='mt-3 mx-5'>
                <h1 className='fs-3 fw-bold'>NOTES</h1>
                </div>

                <div className='row mt-4 mx-5'>
                    <div className='col-md-4 mb-5 col-lg-4'>
                        <Notes></Notes>
                    </div>
                    
                </div>
                </div>
        </div>
       </div>
       </>
    )
}