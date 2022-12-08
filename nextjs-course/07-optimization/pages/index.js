import Head from "next/head";

import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-utils";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find events for NextJS" />
      </Head>
      <h1>Featured Events</h1>
      <EventList items={props.events} />
    </div>
  );
}

// We use getStaticProps here because we want to render it statically on the server
export async function getStaticProps() {
  // This is a helper function from helpers/api-utils.js
  const featuredEvents = await getFeaturedEvents();

  // Return props in standard syntax, revalidate every half hour
  return { props: { events: featuredEvents }, revalidate: 1800 };
}

export default HomePage;
