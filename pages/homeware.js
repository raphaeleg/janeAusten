/** @format */

import { getSortedPostsData, getPostData } from '../lib/posts';
import Template from '../components/layout';

const dir = 'homeware';

export const getStaticProps = async () => {
	const allPostsData = getSortedPostsData( dir );
	const postContent = [];
	for ( let i = 0; i < allPostsData.length; i++ ) {
		var temp = await getPostData( dir, allPostsData[i].id );
		postContent[i] = temp;
	}

	return {
		props: {
			allPostsData: allPostsData,
			postContent: postContent,
		},
	};
};
export default function Homeware( { allPostsData, postContent } ) {
	return <Template allPostsData={allPostsData} postContent={postContent} initial={3} />;
}
