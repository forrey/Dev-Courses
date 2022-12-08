import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../helpers/posts-util";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>My Blog | Home</title>
        <meta name="description" content="The home of my blog" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1000,
  };
}

export default HomePage;
