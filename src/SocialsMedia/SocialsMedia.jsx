import React from 'react'

function SocialsMedia() {
    return (
        <>
            <div className='Row-container'>
                <div className="row rows-cols-4">
                    <div className="col">
                        <a href='https://www.facebook.com/nyanyaw.meong' target={"_blank"} type="button" className="btn btn-outline-primary btn-lg text-nowrap"><i className="bi bi-facebook"></i> Facebook</a>
                    </div>
                    <div className="col">
                        <a href='https://www.instagram.com/dian.rhmdni' target={"_blank"} type="button" className="btn btn-outline-danger btn-lg text-nowrap"><i className="bi bi-instagram"></i> Instagram</a>
                    </div>
                    <div className="col">
                        <a href='https://www.linkedin.com/in/dian-rhmdni' target={"_blank"} type="button" className="btn btn-outline-primary btn-lg text-nowrap"><i className="bi bi-linkedin"></i> LinkedIn</a>
                    </div>
                    <div className="col">
                        <a href='https://www.twitter.com/rappwalk' target={"_blank"} type="button" className="btn btn-outline-info btn-lg text-nowrap"><i className="bi bi-twitter"></i> Twitter</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialsMedia