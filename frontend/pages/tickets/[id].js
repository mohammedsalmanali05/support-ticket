// pages/tickets/[id].js

import { useRouter } from 'next/router';
import Layout from '../../src/app/layout';

function TicketDetail() {
  const router = useRouter();
  const { id } = router.query; // Retrieve the dynamic parameter 'id'

  // Fetch ticket details based on 'id' from your data source
  // You can use 'fetch' or any other method to fetch data

  // Example ticket data
  const ticket = { id, title: 'Ticket 1', description: 'Ticket description', status: 'Open' };

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>Ticket Details</h1>
      <p>ID: {ticket.id}</p>
      <p>Title: {ticket.title}</p>
      <p>Description: {ticket.description}</p>
      <p>Status: {ticket.status}</p>
    </Layout>
  );
}

export default TicketDetail;
