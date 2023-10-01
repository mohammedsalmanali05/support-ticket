// pages/customers.js

import React from 'react';

function CustomersPage() {
  // Fetch customer data from your backend API here (if required)
  // You can use the 'fetch' API or a library like Axios.

  const customers = [
    { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
    { id: 2, name: 'Customer 2', email: 'customer2@example.com' },
    // Add more customer data as needed
  ];

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <a href={`/customers/${customer.id}`}>{customer.name}</a>
            <span>Email: {customer.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomersPage;
