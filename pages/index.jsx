/** @format */

import React, {useEffect} from 'react';
import Head from 'next/head';
import Splash from '../components/Splash';
import PreviewWork from '../components/PreviewWork';
import { useGlobalContext } from '../components/GlobalContext';
import { getAllPostsMetaData } from '../lib/articles';

const dir = ['articles', 'food', 'homeware', 'trendsetters', 'lifestyle'];

export const getStaticProps = async () => {
	let postsData = getAllPostsMetaData('articles');
	
	return {
		props: {
			allPostsData: postsData,
		},
	};
};

export default function Home({ allPostsData }) {
	const { navActive } = useGlobalContext();

	useEffect(() => {
		document.getElementById('myBar').style.width = '0%';
	},[]);

	return (
		<div className={`container ${navActive ? 'active' : ''}`}>
			<Head>
				<title>Jane Austen and The Age of Elegance</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Splash />
				<PreviewWork allPostsData={allPostsData} />
			</main>
		</div>
	);
}
