/** @format */

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/layout.module.css';
import Link from 'next/link';
import { useGlobalContext } from './GlobalContext';
import ArticleCards from './ArticleCards';

export const siteTitle = 'The Age of Elegance';

export default function Layout({ children, id, cat, metaDatas}) {

	const {
		navActive,
		isBrowser,
		currentPostID,
		setCurrentPostID,
		scrollPos,
		setScrollPos,
		navigateToFunc
	} = useGlobalContext();

	//* Scroll to Top Btn
	const [showScrollBtn, setShowScrollBtn] = useState(
		`${styles.scrollTopbtn} ${styles.toHide}`
	);
	const [featuredArticle, setFeaturedArticle] = useState([]);

	
	function scrollToTop() {
		if (!isBrowser()) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setShowScrollBtn(`${styles.scrollTopbtn} ${styles.toHide}`);
	}

	useEffect(()=> {
		let art3 = metaDatas.filter((art) => art.id != id);
		setFeaturedArticle(art3.slice(0,3));
	},[])

	//* Whenever article is scrolled...
	useEffect(() => {
		// Set whether to show scroll to top button
		function onScroll() {
			let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
			if (currentPosition > 500) {
				setShowScrollBtn(styles.scrollTopbtn);
			} else {
				setShowScrollBtn(`${styles.scrollTopbtn} ${styles.toHide}`);
			}
			setScrollPos(currentPosition);
		}

		// Update progress bar
		function updateProgressBar() {
			let height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			let scrolled = (scrollPos / height) * 100;
			document.getElementById('myBar').style.width = scrolled + '%';
		}

		updateProgressBar();
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollPos]);

	return (
		<div className={styles.container}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn how to build a personal website using Next.js'
				/>
				<meta
					property='og:image'
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<a className={showScrollBtn} onClick={scrollToTop}>
				<img
					width='50'
					height='50'
					src='https://img.icons8.com/windows/64/3F3831/long-arrow-up.png'
					alt='long-arrow-up'
				/>
			</a>
			<main className={`${styles.allContent} ${styles.rowStyle}`}>{children}</main>
			
			<div className={styles.CTA}>
				<hr />
				<p className={styles.pChooseArticle}> Similar Articles: </p>
				<ul
					className={`${styles.rowStyle} ${styles.inactivePortraitsList}`}>
					{featuredArticle.map(
						({ id, image, imagecover, title, excerpt }, index) =>
							<li key={id}>
								<ArticleCards
									title={title}
									image={imagecover != null ? imagecover : image}
									desc={excerpt}
									onClick={navigateToFunc} 
									arg={ id }
								/>
							</li>
					)}
				</ul>
			</div>
			
		</div>
	);
}
