import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

const GlobalContext = createContext();
export const GlobalContextProvider = ( { children } ) => {
    const router = useRouter();
    const navigationRoutes = ['home', 'austen', 'trendsetters', 'homeware', 'food', 'lifestyle'];
    const [navActive, setNavActive] = useState( null );
    const [activeNavIdx, setActiveNavIdx] = useState( 0 );

    const [currentPostID, setCurrentPostID] = useState( 0 );
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
    const [scrollPos, setScrollPos] = useState( 0 );

    // set navbar active to page
    useEffect( () => {
        let path = router.pathname;
        let pathArr = path.split( '/' );
        let pathIdx = navigationRoutes.indexOf( pathArr[1] );
        setActiveNavIdx( pathIdx > -1 ? pathIdx : 0 );
    }, [] );

    function navigateToFunc( itm ) {
        window.location.href = `/articles/${itm}`;
    }

    return (
        <GlobalContext.Provider value={{
            navActive, setNavActive,
            activeNavIdx, setActiveNavIdx,
            navigationRoutes, isBrowser,
            currentPostID, setCurrentPostID,
            scrollPos, setScrollPos,
            navigateToFunc
        }}>

            {children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext( GlobalContext );