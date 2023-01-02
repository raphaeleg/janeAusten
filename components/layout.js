/** @format */

import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import React, { useState } from 'react';

export default function Template({ allPostsData, postContent }) {
	const [currentPostID, setCurrentPostID] = useState(0);
	return (
		<div className='container'>
			<Head>
				<title>The Age of Elegance</title>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Discover the culture of 19th century British Culture'
				/>
				<meta name='og:title' content='The Age of Elegance' />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>

			<main className={styles.containter}>
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
						<ul
							className={`${utilStyles.list} ${styles.rowStyle} ${styles.inactivePortraitsList}`}>
							{allPostsData.map(({ id, image, title }, index) =>
								id != allPostsData[currentPostID].id ? (
									<li
										key={id}
										onClick={() => {
											setCurrentPostID(index);
											document.getElementById('articleContent').scrollTop = 0;
										}}
										className={`${utilStyles.listItem}`}
										style={{ backgroundImage: `url(${image})` }}>
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
						<div className={styles.fade} />
					</div>
				</div>
			</main>
		</div>
	);
}
