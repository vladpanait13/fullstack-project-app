// src/pages/MainPage.tsx

import React from "react";

const MainPage: React.FC = () => {
  return (
    <div>
      <header>
        <div>
          <button>Notifications</button>
          <button>Settings</button>
          <button>Dark Theme</button>
          <img src="profile-avatar.jpg" alt="Profile Avatar" />
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
        <h1>Home</h1>
      </main>
    </div>
  );
};

export default MainPage;
