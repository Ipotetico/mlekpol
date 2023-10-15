import React, { useState, useEffect } from 'react'
import './Banner.scss'

const Banner = () => {


    const [scrolled, setScrolled] = useState(0)
    const [opacity, setOpacity] = useState(15)

    useEffect(() => {
        window.addEventListener('scroll', scrollProgress)

        return () => window.addEventListener('scroll', scrollProgress)
    }, [])

    const scrollProgress = () => {
        const scrollpx = document.documentElement.scrollTop;

        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrollLength = Math.ceil(scrollpx / winHeightPx * 500)

        setScrolled(scrollLength)
        setOpacity(scrollLength)
    }

    console.log(scrolled)


    return (
        <div className="container">
            <header className="banner_container">
                <img style={{ opacity: `${opacity}%` }} src={process.env.PUBLIC_URL + `/images/banda/RENDER_BANDA_${scrolled.toString().padStart(5, '0')}.jpg`} alt="" />
            </header>
        </div>

    )
}

export default Banner