import React from 'react'

function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <div className='Footer-container'>
                <p>Copyright © 2020 - {year}</p>
            </div>
        </>
    )
}

export default Footer