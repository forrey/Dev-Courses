import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import Head from "next/head";

function EventDetailsPage(props) {
  // We get this from our getStaticProps
  const { singleEvent } = props;

  // Show loading until we return something
  if (!singleEvent) {
    return <div className="center">Loading</div>;
  }

  return (
    <Fragment>
      <Head>
        <title>{singleEvent.title}</title>
      </Head>
      <EventSummary title={singleEvent.title} />
      <EventLogistics
        date={singleEvent.date}
        address={singleEvent.location}
        image={singleEvent.image}
        imageAlt={singleEvent.title}
      />
      <EventContent>
        <p>{singleEvent.description}</p>
      </EventContent>
    </Fragment>
  );
}

// We'll render statically
export async function getStaticProps(context) {
  // First we get the id from the url
  const eventId = context.params.eventId;

  // Call our api-utils helper function
  const event = await getEventById(eventId);

  if (!event) {
    return { notFound: true };
  }

  return {
    props: {
      singleEvent: event,
    },
    revalidate: 30,
  };
}

// For getStaticPaths, we don't need to render all of the possible events
// Rather, we'll just render the featured events, and all other events will be rendered dynamically
// Whenever a client calls
export async function getStaticPaths() {
  // Get featured events
  const data = await getFeaturedEvents();
  // We create an object of the paths we want to render
  const paths = data.map((event) => ({ params: { eventId: event.id } }));

  // Here fallback must be set to true! Otherwise Next will only serve pages that
  // have been statically rendered, and won't try to dynamically render others.
  return {
    paths: paths,
    fallback: true,
  };
}

export default EventDetailsPage;
