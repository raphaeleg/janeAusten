/** @format */

import '../styles/global.css';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import Image from 'next/image';

export default function App( { Component, pageProps } ) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
			<footer>
				<Image
					src='/images/div.png' // Route of the image file
					width='180'
					height='63'
					alt=''
				/>

				<a href="mailto:janeausten.live3@gmail.com">
					<Image
						src='/images/mailicon.png' // Route of the image file
						width='40'
						height='40'
						alt=''
					/>
				</a>
				<p>
					Copyright © 2021-2023 janeausten.live – All Rights Reserved.
				</p>
			</footer>
			<div className='background'></div>
		</>
	);
}
