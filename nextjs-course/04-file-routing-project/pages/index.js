import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Featured Events</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
