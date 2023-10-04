import React from 'react';
import Layout from '../src/app/layout';
import { Link } from 'next/link';

function TicketsPage() {
  // Fetch ticket data from your backend API here (if required)
  // You can use the 'fetch' API or a library like Axios.

  const tickets = [
    { id: 1, title: 'Ticket 1', status: 'Open' },
    { id: 2, title: 'Ticket 2', status: 'Closed' },
    // Add more ticket data as needed
  ];

  return (
    <Layout>
      <h1>Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <Link href={`/tickets/${ticket.id}`}>{ticket.title}</Link>
            <span>Status: {ticket.status}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default TicketsPage;
