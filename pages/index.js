/** @format */

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/index.module.css';

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>The Age of Elegance</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className={styles.pageview}>
					<p className={styles.titledesc}>the age of</p>
					<h1 className={styles.title}>ELEGANCE</h1>
					<span className={styles.image}>
						<Image
							src='/images/jane-austen.png' // Route of the image file
							width={624} // Desired size with correct aspect ratio
							height={543} // Desired size with correct aspect ratio
							alt='Jane Austen'
						/>
					</span>
				</div>
				<div>
					<p className={styles.description}>
						This website is a time capsule of 18th century Britain and it’s rich
						culture.
					</p>
					<p className={styles.description}>
						Indulge yourself in learning about the trendsetters, fashion, and
						homewares,
					</p>
					<p className={styles.description}>
						as you get a glance of how it’s like to live in this period.
					</p>

					<div className={styles.grid}>
						<Link href='/people'>
							<div className={`${styles.card} ${styles.card1}`}>
								<h3>Beautiful People</h3>

								<span></span>
							</div>
						</Link>
						<Link href='/fashion'>
							<div className={`${styles.card} ${styles.card2}`}>
								<h3>Fashion</h3>

								<span></span>
							</div>
						</Link>
						<Link href='/homeware'>
							<div className={`${styles.card} ${styles.card3}`}>
								<h3>Homeware</h3>

								<span></span>
							</div>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
