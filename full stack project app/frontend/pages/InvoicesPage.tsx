// src/pages/InvoicesPage.tsx
import React, { useEffect } from "react";

// connect components to Redux Store using 'useSelector' hook to access Redux store and 'useDispatch' hook to dispatch actions
import { useDispatch, useSelector } from "react-redux";
import InvoiceList from "../components/InvoiceList";
import Modal from "../components/Modal";
import { fetchInvoices, selectAllInvoices } from "./invoicesSlice";

const InvoicesPage: React.FC = () => {
  const dispatch = useDispatch();
  const invoices = useSelector(selectAllInvoices);
  const [selectedInvoice, setSelectedInvoice] = React.useState<number | null>(
    null
  );

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  const handleInvoiceClick = (id: number) => {
    setSelectedInvoice(id);
  };

  const handleCloseModal = () => {
    setSelectedInvoice(null);
  };

  return (
    <div>
      <header>
        <div>
          <button>Notifications</button>
          <button>Settings</button>
          <button>Dark Theme</button>
          <img src="profile-avatar.jpg" alt="Profile Avatar" />
        </div>
        <div>
          <input type="text" placeholder="Search..." />
        </div>
      </header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Invoices</li>
          <li>Bills</li>
          <li>Expenses</li>
          <li>Reports</li>
        </ul>
      </nav>
      <main>
        <h1>Invoices</h1>
        <InvoiceList invoices={invoices} onInvoiceClick={handleInvoiceClick} />
      </main>
      <footer>
        <span>Path: Invoices</span>
      </footer>
      <Modal isOpen={selectedInvoice !== null} onClose={handleCloseModal}>
        {selectedInvoice && (
          <div>
            <h2>Invoice Details</h2>
            <p>ID: {selectedInvoice}</p>
            <p>Amount: {selectedInvoice}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default InvoicesPage;
