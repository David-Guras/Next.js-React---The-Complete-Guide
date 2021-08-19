import Link from "next/link";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link href="/event-1">Event 1</Link>
        </li>
        <li>
          <Link href="/event-2">Event 2</Link>
        </li>
        <li>
          <Link href="/event-3">Event 3</Link>
        </li>
        <li>
          <Link href="/event-4">Event 4</Link>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;