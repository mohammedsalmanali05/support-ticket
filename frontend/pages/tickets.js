// pages/tickets.js

import React from 'react';

function TicketsPage() {
  // Fetch ticket data from your backend API here (if required)
  // You can use the 'fetch' API or a library like Axios.

  const tickets = [
    { id: 1, title: 'Ticket 1', status: 'Open' },
    { id: 2, title: 'Ticket 2', status: 'Closed' },
    // Add more ticket data as needed
  ];

  return (
    <div>
      <h1>Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <a href={`/tickets/${ticket.id}`}>{ticket.title}</a>
            <span>Status: {ticket.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketsPage;
