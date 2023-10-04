import React from 'react';
import Layout from '../src/app/layout';
import { Link } from 'next/link';

function CustomersPage() {
  // Fetch customer data from your backend API here (if required)
  // You can use the 'fetch' API or a library like Axios.

  const customers = [
    { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
    { id: 2, name: 'Customer 2', email: 'customer2@example.com' },
    // Add more customer data as needed
  ];

  return (
    <Layout>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <Link href={`/customers/${customer.id}`}>{customer.name}</Link>
            <span>Email: {customer.email}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default CustomersPage;
