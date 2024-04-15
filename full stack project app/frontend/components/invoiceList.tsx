// src/components/InvoiceList.tsx

// Create a component to display a list of invoices

import React from "react";

interface Invoice {
  id: number;
  date: string;
  payee: string;
  description: string;
  dueDate: string;
  amount: number;
  status: string;
}

interface InvoiceListProps {
  invoices: Invoice[];
  onInvoiceClick: (id: number) => void;
}

const InvoiceList: React.FC<InvoiceListProps> = ({
  invoices,
  onInvoiceClick,
}) => {
  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id} onClick={() => onInvoiceClick(invoice.id)}>
            {invoice.payee} - ${invoice.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
