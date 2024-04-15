import React from "react";
import "./App.css"; // Import CSS file for styling

// Left Menu component
function LeftMenu() {
  return (
    <div className="left-menu">
      <ul>
        <li>Home</li>
        <li>Invoices</li>
        <li>Bills</li>
        <li>Expenses</li>
        <li>Reports</li>
      </ul>
    </div>
  );
}

// Search Bar component
function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
  );
}

// Right Menu component
function RightMenu() {
  return (
    <div className="right-menu">
      <button>
        <i className="fas fa-bell"></i>
      </button>
      <button>
        <i className="fas fa-cog"></i>
      </button>
      <button>
        <i className="far fa-moon"></i>
      </button>
      <div className="profile-avatar"></div>
    </div>
  );
}

// Table component
function Table() {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Payee</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{/* Table rows go here */}</tbody>
      </table>
    </div>
  );
}

// App component
function App() {
  return (
    <div className="app-container">
      <LeftMenu />
      <div className="content">
        <SearchBar />
        <RightMenu />
        <Table />
      </div>
    </div>
  );
}

export default App;
