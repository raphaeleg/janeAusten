/** @format */

import '../styles/global.css';
import { GlobalContextProvider } from '../components/GlobalContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App( { Component, pageProps } ) {
	return (
		<>
			<GlobalContextProvider>
				<NavBar />
				<Component {...pageProps} />
				<Footer />
				<div className='background'></div>
			</GlobalContextProvider>
		</>
	);
}
