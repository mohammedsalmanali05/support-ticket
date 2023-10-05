// src/app/page.js
import React from 'react';
import RootLayout from './layout';

export default function Home() {
  return (
    <RootLayout>
      {/* Your page content */}
      <main>
        {/* Content specific to the Home page */}
        <h1>Welcome to the Home Page</h1>
        {/* Add your Home page content here */}
      </main>
    </RootLayout>
  );
}
