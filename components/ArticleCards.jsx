import React from 'react'
import { useGlobalContext } from './GlobalContext';
import styles from '../styles/articleCard.module.css';
import Link from "next/link";

const ArticleCards = ( { title, cat, image, desc, onClick, arg } ) => {
    const { setActiveNavIdx, navigationRoutes } = useGlobalContext();

    return (
        <div className={styles.articleCardsContainer} onClick={() => onClick( arg )}>
            <img src={image} alt="" />
            <div className={styles.articleCardsSection}>
                <span className={styles.articleCardsText}>
                    {cat && <>
                        <Link href={cat}>
                            <p className={styles.articleCardsCat} onClick={() => setActiveNavIdx( navigationRoutes.findIndex( function ( x ) { return x == cat } ) )}>
                                {cat}
                            </p>
                        </Link>
                        <hr />
                    </>}
                    <p className={styles.articleCardsTitle}>{title}</p>
                    {desc && <p className={styles.articleCardsDesc}>{desc}</p>}
                </span>
                <div className={styles.articleCardsSection2}>
                    <div className="btn" onClick={() => onClick( arg )}>
                        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/000000/read.png" alt="read"/> Read More
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ArticleCards