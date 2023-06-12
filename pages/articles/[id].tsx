/** @format */

import Layout from '../../components/layout';
import {
	getAllPostIds,
	getPostData,
	getCategoryPostsMeta,
} from '../../lib/articles';
import Image from 'next/image';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../styles/layout.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';

export default function Post({
	postData,
	metaDatas,
}: {
	postData: {
		id: string;
		title: string;
		cat: string;
		image: string;
		caption: string;
		contentHtml: string;
		bib: string[];
	};
	metaDatas: { id: string[] };
}) {
	return (
		<Layout id={postData.id} cat={postData.cat} metaDatas={metaDatas}>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<div className={styles.postMetaData}>
					<div className={styles.activePortrait}>
						<Image
							priority
							src={postData.image}
							width={500}
							height={500}
							alt='Feature image'
						/>
					</div>
					<p className={styles.pcaption}>{postData.caption}</p>
					<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				</div>
				<div className={styles.postContentContainer}>
					<div
						id='articleContent'
						dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
					/>
					{postData.bib.length > 0 && (
						<div className={styles.citationContainer}>
							<hr />
							<h2>Works Cited</h2>
							{postData.bib.map((text, index) => (
								<p>
									<span
										dangerouslySetInnerHTML={{
											__html: text,
										}}></span>
								</p>
							))}
						</div>
					)}
				</div>
			</article>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	// params.id will be like ['a', 'b', 'c']
	const postData = await getPostData(params?.id as string);
	const metaDatas = getCategoryPostsMeta(postData.cat);
	return {
		props: {
			postData,
			metaDatas,
		},
	};
};
