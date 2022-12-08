import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../helpers/posts-util";
import { Fragment } from "react";
import Head from "next/head";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </Fragment>
  );
}

export async function getStaticProps(context) {
  // Get the slug via the URL
  const { params } = context;

  // Extract the slug
  const slug = params.postSlug;

  // Get the single post
  const singlePost = await getPostData(slug);

  // Error validation
  if (!singlePost) {
    return { notFound: true };
  }

  return {
    props: {
      post: singlePost,
    },
    revalidate: 1000,
  };
}

export async function getStaticPaths() {
  // Use our helper function to get a list of file names for posts
  const fileNames = await getPostFiles();

  // Map them into an array of slugs while removing the file extensions
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  // Create an object of paths
  const pathsWithParams = slugs.map((slug) => ({ params: { postSlug: slug } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

export default PostDetailPage;
