/** @format */

import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from './GlobalContext';

export default function Template( { allPostsData, postContent, initial } ) {
	const { navActive } = useGlobalContext();
	const [currentPostID, setCurrentPostID] = useState( 0 );
	const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
	const [scrollPos, setScrollPos] = useState( 0 );
	const [showScrollBtn, setShowScrollBtn] = useState( `${styles.scrollTopbtn} ${styles.toHide}` );

	//* Page Positioning
	function scrollToTop() {
		if ( !isBrowser() ) return;
		window.scrollTo( { top: 0, behavior: 'smooth' } );
		setShowScrollBtn( `${styles.scrollTopbtn} ${styles.toHide}` );
	}

	useEffect( () => {
		// initially set it so users can see the article
		window.scrollTo( { top: 20, behavior: 'smooth' } );
		console.log( initial );
		setCurrentPostID( initial ? initial : 0 );
	}, [] );

	useEffect( () => {
		function onScroll() {
			let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
			if ( currentPosition > 500 ) {
				setShowScrollBtn( styles.scrollTopbtn );
			}
			else {
				setShowScrollBtn( `${styles.scrollTopbtn} ${styles.toHide}` );
			}
			setScrollPos( currentPosition );
		}

		function updateProgressBar() {
			let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			let scrolled = ( scrollPos / height ) * 100;
			document.getElementById( "myBar" ).style.width = scrolled + "%";
		}

		updateProgressBar();
		window.addEventListener( "scroll", onScroll );
		return () => window.removeEventListener( "scroll", onScroll );
	}, [scrollPos] );

	return (
		<div className={`container ${navActive ? 'active' : ''}`}>
			<Head>
				<title>The Age of Elegance</title>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Discover the culture of 19th century British Culture'
				/>
				<meta name='og:title' content='The Age of Elegance' />
				<meta name='twitter:card' content='summary_large_image' />
				<script
					// you might need to get a newer version
					src="https://kit.fontawesome.com/fbadad80a0.js"
					crossOrigin="anonymous"
				></script>
			</Head>
			<a className={showScrollBtn} onClick={scrollToTop}>
				<FontAwesomeIcon
					icon={faArrowUp}
					className="fa-solid fa-arrow-up"
					style={{
						width: "60px", height: "40px", color: "#3f3831"
					}}
				>
				</FontAwesomeIcon>
			</a>

			<main className={styles.containter}>
				<p className='pChooseArticle'> More Articles: </p>
				<div className='rowStyle'>
					<ul
						className={`${utilStyles.list} ${styles.rowStyle} ${styles.allPortraitsList}`}>
						<li
							className={`${utilStyles.list} ${styles.activePortrait}`}
							style={{
								backgroundImage: `url(${allPostsData[currentPostID].image})`,
							}}>
							<p className={styles.pcaption}>
								{allPostsData[currentPostID].imagecap}
							</p>
						</li>
						<hr></hr>
						<ul
							className={`${utilStyles.list} ${styles.rowStyle} ${styles.inactivePortraitsList}`}>
							{allPostsData.map( ( { id, image, imagecover, title }, index ) =>
								id != allPostsData[currentPostID].id ? (
									<li
										key={id}
										onClick={() => {
											setCurrentPostID( index );
											document.getElementById( 'articleContent' ).scrollTop = 0;
										}}
										className={`${utilStyles.listItem}`}
										style={{ backgroundImage: `url(${imagecover != null ? ( imagecover ) : ( image )})` }}>
										<h3>{title}</h3>
									</li>
								) : null
							)}
						</ul>
					</ul>
				</div>

				<div className={`${styles.allContent} ${styles.rowStyle}`}>
					<div>
						<div className={styles.postMetaData}>
							<h1>{allPostsData[currentPostID].title}</h1>
							<p>{allPostsData[currentPostID].lifespan}</p>
						</div>
						<div className='articleNav'></div>
					</div>
					<div id='articleContent' className={styles.postContentContainer}>

						<div
							dangerouslySetInnerHTML={{
								__html: postContent[currentPostID].contentHtml,
							}}></div>

						{allPostsData[currentPostID].bib.length > 0 && (
							<div className={styles.citationContainer}>
								<hr></hr>
								Works Cited
								{allPostsData[currentPostID].bib.map( ( text, index ) =>
									<p>
										<span dangerouslySetInnerHTML={{
											__html: text,
										}}></span>
									</p>

								)}
							</div>
						)}
					</div>
				</div>
			</main>
		</div>
	);
}
