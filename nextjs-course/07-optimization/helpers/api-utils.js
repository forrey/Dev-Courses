// Here we'll deal with getting data from the server

export async function getAllEvents() {
  // Fetch the data. make sure to end the url with .json (because it's firebase)
  const response = await fetch(
    "https://nextjs-6-events-project-default-rtdb.firebaseio.com/events.json"
  );

  // Now we convert to JSON
  const data = await response.json();

  const events = [];

  // Now we'll put it in a flat array of objects that we can use
  // Currently it's structured like this:
  // -events
  //   -e1
  //     id: ...
  //     title: ...
  //     etc
  // We need it to be flat
  for (const key in data) {
    events.push({
      id: key,
      // Spread function puts all the other stuff (id, title, etc) into the object as it is
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();

  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
