import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getAllEvents } from "../../helpers/api-utils";

function EventsPage(props) {
  const router = useRouter();

  // The function that's called when the search button in the filter is clicked
  function findEventsHandler(year, month) {
    // Construct the path
    const fullPath = `/events/${year}/${month}`;

    // Push it to the page
    router.push({
      pathname: fullPath,
    });
  }

  return (
    <Fragment>
      <h1>All Events</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </Fragment>
  );
}

// Again we can render this statically on the backend.
export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return { props: { events: allEvents }, revalidate: 60 };
}

export default EventsPage;
