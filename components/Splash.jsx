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
                    A time capsule of history,
                </p>
                <p className={styles.description}>
                    Nineteenth century Britain's mystery.
                </p>
                <p className={styles.description}>
                    Culture, fashion, and trendsetters abound,
                </p>
                <p className={styles.description}>
                    Indulge in learning, let your curiosity astound.
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