/** @format */

import '../styles/global.css';
import { GlobalContextProvider } from '../components/GlobalContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalContextProvider>
				<NavBar />
				<Component {...pageProps} />
				<Footer />
				{/* <div className='background'></div> */}
			</GlobalContextProvider>
		</>
	);
}
