import React from 'react'
import './Topper.scss'

const Topper = () => {
    return (
        <>
            <section className="topper_container">
                <img className='background' src={process.env.PUBLIC_URL + `/images/tlo_02.webp`} alt="" />

                <img src={process.env.PUBLIC_URL + `/images/protein25.png`} alt="" className="headline" />
            </section>
        </>
    )
}

export default Topper