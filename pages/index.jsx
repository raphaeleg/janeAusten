/** @format */

import Head from 'next/head';
import Splash from '../components/Splash';
import PreviewWork from '../components/PreviewWork';
import { useGlobalContext } from '../components/GlobalContext';
import { getSortedPostsData } from '../lib/articles';

const dir = ['articles', 'food', 'homeware', 'people', 'lifestyle'];

export const getStaticProps = async () => {
	const allPostsData = [];
	let postsData = getSortedPostsData('articles');
	for (let j = 0; j < postsData.length; j++) {
		allPostsData.push(postsData[j]);
	}
	
	return {
		props: {
			allPostsData: allPostsData,
		},
	};
};

export default function Home({ allPostsData }) {
	const { navActive } = useGlobalContext();
	return (
		<div className={`container ${navActive ? 'active' : ''}`}>
			<Head>
				<title>The Age of Elegance</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Splash />
				<PreviewWork allPostsData={allPostsData} />
			</main>
		</div>
	);
}
