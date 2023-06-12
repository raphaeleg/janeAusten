
import React, { useState } from 'react';
import styles from '../styles/index.module.css';
import ArticleCards from './ArticleCards';
import { useGlobalContext } from './GlobalContext';

export default function PreviewWork( { allPostsData } ) {
    const { setCurrentPostID, navigationRoutes, navigateToFunc } = useGlobalContext();
    const fullList = ( allPostsData );
    const [list, setList] = useState( fullList );
    const [currentFilter, setCurrentFilter] = useState( 'Filter...' );

    function changeList( item ) {
        setList( fullList.filter( elem => elem.cat == item ) );
        switch ( item ) {
            case 'all':
                setCurrentFilter( 'Filter...' );
                setList( fullList );
                break;
            case 'people':
                setCurrentFilter( 'Beautiful People' );
                break;
            default:
                setCurrentFilter( item );
                break;
        }
    }

    return (
        <div className={styles.previewContainer}>
            <div className={styles.dropdown}>
                <span className={`btn ${styles.dropbtn}`}><img src='https://img.icons8.com/ios/50/double-down--v1.png' /><p>{currentFilter}</p></span>
                <div className={styles.dropdownContent}>
                    <p onClick={() => changeList( 'all' )}>All</p>
                    {navigationRoutes.slice( 1 ).map( elem => (
                        <p onClick={() => changeList( elem )}>{elem != 'people' ? elem : 'Beautiful People'}</p>
                    ) )}
                </div>
            </div>
            <div className={styles.articles}>
                {list.slice( 0, 6 ).map( ( { id, desc, title, cat, image, imagecover, index } ) => (
                    <span key={id}>
                        <ArticleCards title={title} cat={cat} desc={desc} image={imagecover != null ? ( imagecover ) : ( image )} onClick={navigateToFunc} arg={ id } />
                    </span>
                ) )}
            </div>
        </div>
    );
}