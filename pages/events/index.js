import Link from "next/link";

function AllEventsPage() {
  return (
    <div>
      <h1>All Events Page</h1>
      <ul>
        <li>
          <Link href="/events/event-1">Event 1</Link>
        </li>
        <li>
          <Link href="/events/event-2">Event 2</Link>
        </li>
        <li>
          <Link href="/events/event-3">Event 3</Link>
        </li>
        <li>
          <Link href="/events/event-4">Event 4</Link>
        </li>
      </ul>
    </div>
  );
}

export default AllEventsPage;