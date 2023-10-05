// src/app/layout.js
import React from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        {/* Navigation Links */}
        <div className={styles.nav}>
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
        </div>

        {/* Render the children components */}
        {children}
      </body>
    </html>
  );
}
