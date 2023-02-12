
import styles from './PreviewWork.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const getStaticProps = async ( dir ) => {
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

export default function PreviewWork( { left, content, title, desc, bck } ) {
    // return <Template allPostsData={allPostsData} postContent={postContent} />;
    return (
        <Link href={content}>
            <a>
                <span className={`${styles.container} ${left ? styles.atLeft : ''}`} style={{ backgroundImage: "url( '" + bck + "' )" }}>
                    <div>

                    </div>
                    <div>
                        <h2 className={utilStyles.heading2Xl}>{title}</h2>

                    </div>
                    <span className={styles.backDrop}></span>
                </span>
            </a>
        </Link>
    );
}