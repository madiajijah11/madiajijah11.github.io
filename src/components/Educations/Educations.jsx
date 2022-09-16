import React from 'react'

function Educations() {
    return (
        <>
            <div className='Education-container'>
                <h2>Education</h2>
                <hr />
                <table className="table table-borderless text-white">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">School</th>
                            <th scope="col">Degree</th>
                            <th scope="col">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Islamic University of Muhammad Arsyad Al Banjari Kalimantan</td>
                            <td>Bachelor's Degree in Informatics Engineering</td>
                            <td>2016</td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Educations