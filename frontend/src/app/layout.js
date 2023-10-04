import React from 'react';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        {/* Navigation Links (conditionally rendered) */}
        {!children && (
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
        )}

        {/* Render the children components */}
        {children}
      </body>
    </html>
  );
}
