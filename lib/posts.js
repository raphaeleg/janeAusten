/** @format */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'

export function getSortedPostsData( dir ) {
	var postsDirectory = path.join( process.cwd(), 'posts', dir );

	// Get file names under /posts
	const fileNames = fs.readdirSync( postsDirectory );
	const allPostsData = fileNames.map( ( fileName ) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace( /\.md$/, '' );

		// Read markdown file as string
		const fullPath = path.join( postsDirectory, fileName );
		const fileContents = fs.readFileSync( fullPath, 'utf8' );

		// Use gray-matter to parse the post metadata section
		const matterResult = matter( fileContents );

		return {
			id,
			...matterResult.data,
		};
	} );
	// Sort posts by date
	return allPostsData;
	// .sort((a, b) => {
	// 	if (a.date < b.date) {
	// 		return 1;
	// 	} else {
	// 		return -1;
	// 	}
	// });
}

export async function getPostData( dir, id ) {
	var postsDirectory = path.join( process.cwd(), 'posts', dir );

	const fullPath = path.join( postsDirectory, `${id}.md` );
	const fileContents = fs.readFileSync( fullPath, 'utf8' );

	// Use gray-matter to parse the post metadata section
	const matterResult = matter( fileContents );

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use( remarkParse )
		.use( remarkRehype, { allowDangerousHtml: true } )
		.use( rehypeRaw ) // *Parse* the raw HTML strings embedded in the tree
		.use( rehypeStringify )
		// .use( html)
		.process( matterResult.content );
	const contentHtml = processedContent.toString();

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}
