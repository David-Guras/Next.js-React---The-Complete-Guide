import Link from "next/link";
import { Fragment } from 'react'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'

function AllEventsPage() {
  const allEvents = getAllEvents();
  return (
    <Fragment>
      <EventsSearch />
      <EventList items={allEvents} />
    </Fragment>
  );
}

export default AllEventsPage;