import React from 'react';
import RootLayout from './layout'; // Import the layout component
import Link from 'next/link';

export default function Home() {
  return (
    <RootLayout> {/* Use the layout component */}
      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tickets">Tickets</Link>
          </li>
          <li>
            <Link href="/customers">Customers</Link>
          </li>
        </ul>
      </nav>

      {/* Your page content */}
      <main>
        {/* Content specific to the Home page */}
        <h1>Welcome to the Home Page</h1>
        {/* Add your Home page content here */}
      </main>
    </RootLayout>
  );
}
