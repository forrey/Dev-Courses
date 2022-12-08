import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../helpers/api-utils";
import ResultsTitle from "../../components/events/ResultsTitle";
import ErrorAlert from "../../components/ui/ErrorAlert";

function FilteredEventsPage(props) {
  // getServerSideProps will tell us if an error occured
  if (props.hasError) {
    return (
      <ErrorAlert>
        <p>Invalid search, please try again</p>
      </ErrorAlert>
    );
  }

  // We'll create a date object, because our ResultsTitle expects it
  // It will convert it to human readable format
  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={props.events} />
    </div>
  );
}

// Here we want to dynamically serve the search results and build the page on the server
export async function getServerSideProps(context) {
  // Lets get the parameters in the URL
  const { params } = context;
  const filterData = params.slug;

  // They'll be returned as an array ["2021", "5"]
  // Here we extract year and month and use + to turn them into a number
  const filterYear = +filterData[0];
  const filterMonth = +filterData[1];

  // Error validation
  if (
    isNaN(filterYear) ||
    isNaN(filterMonth) ||
    filterYear > 2030 ||
    filterYear < 2021 ||
    filterMonth < 1 ||
    filterMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  // Now we use our helper function in api-utils to get filtered data
  const filteredEvents = await getFilteredEvents({
    year: filterYear,
    month: filterMonth,
  });

  // We return the events, and a prop for date which we'll use for the <ResultsTitle />.
  return {
    props: {
      events: filteredEvents,
      date: {
        year: filterYear,
        month: filterMonth,
      },
    },
  };
}

export default FilteredEventsPage;
