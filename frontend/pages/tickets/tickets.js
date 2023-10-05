import React from 'react';
import Layout from '../src/app/layout';
import Link from 'next/link';

const tickets = [
  { id: 1, title: 'Ticket 1', status: 'Open' },
  { id: 2, title: 'Ticket 2', status: 'Closed' },
  // Add more ticket data as needed
];

function TicketsPage() {
  return (
    <Layout>
      <h1>Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <Link href="/tickets/[id]" as={`/tickets/${ticket.id}`}>
              <a>{ticket.title}</a>
            </Link>
            <span>Status: {ticket.status}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default TicketsPage;
