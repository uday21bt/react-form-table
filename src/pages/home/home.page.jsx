import React from 'react';
import './home.styles.scss';
import Form from '../../components/form/form.component';

function Home() {
    return (
        <div className='homepage-container'>
            <h1 className="homepage-title">Aromatic bar</h1>

            <Form />
        </div>
    )
}

export default Home;
