/** @format */

import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'articles');

export function getAllPostsMetaData() {
	// Get file names under /posts
	const fileNames = readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '');

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			id,
			...(matterResult.data as {
				image: string;
				imagecover: string;
				title: string;
				excerpt: string;
				cat: string;
			}),
		};
	});
	// Sort posts by date
	return allPostsData;
}

export function getCategoryPostsMeta(cate: string) {
	// Get file names under /posts
	const fileNames = readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '');

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			id,
			...(matterResult.data as {
				image: string;
				imagecover: string;
				title: string;
				excerpt: string;
				cat: string;
			}),
		};
	});
	// Sort posts by date
	return allPostsData.filter((art) => art.cat == cate);
}

export function getRepPostsMeta() {
	// Get file names under /posts
	const fileNames = readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '');

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			id,
			...(matterResult.data as {
				image: string;
				imagecover: string;
				title: string;
				excerpt: string;
				cat: string;
			}),
		};
	});
	// Sort posts by date
	let a = allPostsData.filter((art) => art.cat == 'austen');
	let b = allPostsData.filter((art) => art.cat == 'trendsetters');
	let c = allPostsData.filter((art) => art.cat == 'homeware');
	let d = allPostsData.filter((art) => art.cat == 'food');
	let e = allPostsData.filter((art) => art.cat == 'lifestyle');
	return [a[0], b[0], c[0], d[0], e[0]];
}

export function getAllPostIds() {
	const fileNames = readdirSync(postsDirectory);
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		};
	});
}

export async function getPostData(id: string) {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml,
		...(matterResult.data as {
			image: string;
			imagecover: string;
			title: string;
			excerpt: string;
			cat: string;
		}),
	};
}
