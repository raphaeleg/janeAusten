/** @format */
import React, { useEffect } from 'react';
import { getCategoryPostsMeta, getRepPostsMeta } from '../lib/articles';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/subSection.module.css';
import layoutStyles from '../styles/layout.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';
import ArticleCards from '../components/ArticleCards';
import { useGlobalContext } from '../components/GlobalContext';

export default function Austen({
	metaDatas,
	repPosts,
}: {
	metaDatas: [{ cat: 0; id: 0; image: 0; imagecover: 0; title: 0; excerpt: 0 }];
	repPosts: [{ cat: 0; id: 0; image: 0; imagecover: 0; title: 0; excerpt: 0 }];
}) {
	const { navigateToFunc } = useGlobalContext();
	return (
		<div className='container'>
			<div className={styles.titleContainer}>
				<p className={styles.subtitle}>Articles on</p>
				<h1 className={styles.title}>{metaDatas[0].cat}</h1>
			</div>
			<ul
				className={`${layoutStyles.inactivePortraitsList} ${styles.container}`}>
				{metaDatas.map(({ id, image, imagecover, title, excerpt }, index) => (
					<li key={id}>
						<ArticleCards
							title={title}
							image={imagecover != null ? imagecover : image}
							desc={excerpt}
							onClick={navigateToFunc}
							arg={id}
							cat={null}
						/>
					</li>
				))}
			</ul>
			<div className={layoutStyles.CTA}>
				<hr />
				<p className={layoutStyles.pChooseArticle}> More Articles: </p>
				<ul
					className={`${layoutStyles.inactivePortraitsList} ${styles.container}`}>
					{repPosts
						.filter((art) => art.cat != metaDatas[0].cat)
						.map(({ id, image, imagecover, title, excerpt }, index) => (
							<li key={id}>
								<ArticleCards
									title={title}
									image={imagecover != null ? imagecover : image}
									desc={excerpt}
									onClick={navigateToFunc}
									arg={id}
									cat={null}
								/>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = [
		{ params: { id: 'austen' } },
		{ params: { id: 'people' } },
		{ params: { id: 'homeware' } },
		{ params: { id: 'food' } },
		{ params: { id: 'lifestyle' } },
	];
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const metaDatas = getCategoryPostsMeta(params?.id as string);
	const repPosts = getRepPostsMeta();

	return {
		props: {
			metaDatas,
			repPosts,
		},
	};
};
