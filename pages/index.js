import Link from "next/link";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link href="/events/event-1">Featured Event 1</Link>
        </li>
        <li>
          <Link href="/events/event-2">Featured Event 2</Link>
        </li>
        <li>
          <Link href="/events/event-3">Featured Event 3</Link>
        </li>
        <li>
          <Link href="/events/event-4">Featured Event 4</Link>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;