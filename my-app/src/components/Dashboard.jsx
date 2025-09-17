import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">MyApp</h2>
        <ul className="menu">
          <li>🏠 Home</li>
          <li>👤 Profile</li>
          <li>⚙️ Settings</li>
          <li>🚪 Logout</li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Welcome Back 🎉</h1>
          <p>Your personalized dashboard</p>
        </header>

        <section className="cards">
          <div className="card">
            <h3>📊 Analytics</h3>
            <p>Track your activity and growth.</p>
          </div>
          <div className="card">
            <h3>💬 Messages</h3>
            <p>Check your recent chats & notifications.</p>
          </div>
          <div className="card">
            <h3>🛒 Orders</h3>
            <p>Manage your latest transactions.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
