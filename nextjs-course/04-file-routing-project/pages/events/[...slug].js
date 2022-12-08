import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";
import ResultsTitle from "../../components/events/ResultsTitle";
import ErrorAlert from "../../components/ui/ErrorAlert";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const dateFilter = {
    year: +filterData[0],
    month: +filterData[1],
  };

  if (
    isNaN(dateFilter.year) ||
    isNaN(dateFilter.month) ||
    dateFilter.year > 2030 ||
    dateFilter.year < 2021 ||
    dateFilter.month < 1 ||
    dateFilter.month > 12
  ) {
    return (
      <ErrorAlert>
        <p>Invalid search, please try again</p>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents(dateFilter);

  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <ErrorAlert>
        <p>No events found!</p>
      </ErrorAlert>
    );
  }

  const date = new Date(dateFilter.year, dateFilter.month - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
