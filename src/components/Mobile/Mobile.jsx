import React from 'react'
import './Mobile.scss'
import Navigation from './Navigation/Navigation'
import Topper from './Topper/Topper'

const Mobile = () => {
    return (
        <>
            <main className="mobile_container">
                <Navigation />
                <Topper />
            </main>

        </>
    )
}

export default Mobile