/** @format */

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import PreviewWork from '../components/PreviewWork';

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>The Age of Elegance</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className={styles.pageview}>
					<p className={styles.titledesc}>The Age of</p>
					<h1 className={styles.title}>Elegance</h1>
					<div className={styles.image}>
						<div>
							<Image
								src='/images/jane-austen.png' // Route of the image file
								layout='fill'
								alt='Jane Austen'
							/>
						</div>
					</div>
				</div>
				<div className={styles.descriptions}>
					<p className={styles.description}>
						This website is a time capsule of 19th century Britain and it’s rich
						culture.
					</p>
					<p className={styles.description}>
						Indulge yourself in learning about the trendsetters, fashion, and
						homewares,
					</p>
					<p className={styles.description}>
						as you get a glance of how it’s like to live in this period.
					</p>
				</div>
				<PreviewWork left={true} content="/works" title="Analysis of Jane Austen's Works" bck="/images/handwriting.jpg" />
				<PreviewWork left={false} content="/people" title="Biography of 19th Century Trendsetters" bck="/images/mrsqThumbnailedit.png" />
				<PreviewWork left={true} content="/fashion" title="Popular Fashion Trends" bck="/images/fashion-plateedit.jpeg" />
				<PreviewWork left={false} content="/homeware" title="Delicate Homewares of 1800" bck="/images/jasperwareVaseedit.jpeg" />

			</main>
		</div>
	);
}
