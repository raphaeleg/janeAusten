import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

const GlobalContext = createContext();
export const GlobalContextProvider = ( { children } ) => {
    const router = useRouter();
    const navigationRoutes = ['home', 'austen', 'people', 'homeware', 'food'];
    const [navActive, setNavActive] = useState( null );
    const [activeIdx, setActiveIdx] = useState( 0 );

    // set navbar active to page
    useEffect( () => {
        const path = router.pathname;
        const pathArr = path.split( '/' );
        const pathIdx = navigationRoutes.indexOf( pathArr[1] );
        setActiveIdx( pathIdx > -1 ? pathIdx : 0 );
    }, [] );

    return (
        <GlobalContext.Provider value={{
            navActive, setNavActive,
            activeIdx, setActiveIdx,
            navigationRoutes
        }}>

            {children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext( GlobalContext );