import React from 'react'
import styles from '../styles/index.module.css';
import Image from 'next/image';

const Splash = () => {
    return (
        <div className={styles.pageview}>
            <p className={styles.titledesc}>The Age of</p>
            <h1 className={styles.title}>Elegance</h1>
            <div className={styles.descriptions}>
                <p className={styles.description}>
                    This website serves as a virtual time capsule
                    for nineteenth-century Britain.
                    Discover popular culture,
                    homewares, and trendsetters.
                </p>
            </div>
            <div className={styles.image}>
                <div>
                    <Image
                        src='/images/jane-austen.png' // Route of the image file
                        layout='fill'
                        alt='Jane Austen'
                    />
                </div>
            </div>
            <div className="arrdown">
                <img src='https://img.icons8.com/ios-glyphs/90/C49F7D/long-arrow-down.png' alt="long-arrow-down" onClick={() => window.scrollTo( { top: window.innerHeight, behavior: 'smooth' } )} />
            </div>
        </div>
    )
}

export default Splash