/** @format */

import '../styles/global.css';
import Link from 'next/link';
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
			{/* <footer>
				<p>
					<Link
						target='_blank'
						href='https://www.hkbu.edu.hk/'
						rel='noopener noreferrer'>
						© Hong Kong Baptist University
					</Link>
				</p>
				<p>
					This website was created by
					<Link target='_blank' href='raphg.live' rel='noopener noreferrer'>
						Raphaele Guillemot.
					</Link>
				</p>
			</footer> */}
			<div className='background'></div>
		</>
	);
}
