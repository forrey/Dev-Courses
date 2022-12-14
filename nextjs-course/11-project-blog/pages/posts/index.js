import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util";
import Head from "next/head";
import { Fragment } from "react";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All of my posts" />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1000,
  };
}

export default AllPostsPage;
