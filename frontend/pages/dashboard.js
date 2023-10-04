import React from 'react';
import Layout from '../src/app/layout';
import { Link } from 'next/link';

function DashboardPage() {
  // You can add dashboard content here, such as charts, statistics, and summaries.

  return (
    <Layout>
      <h1>Dashboard</h1>
      <Link href="/customers">Customers</Link>
      <Link href="/tickets">Tickets</Link>
      <p>Welcome to the dashboard! Here, you can view important information.</p>
    </Layout>
  );
}

export default DashboardPage;
