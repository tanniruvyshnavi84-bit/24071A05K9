import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <div className="hero">
        <h1>Find Your Dream Job Today 🚀</h1>
        <p>
          Explore thousands of job opportunities from top companies.
        </p>

        <div className="hero-buttons">
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/register">
            <button className="outline">Register</button>
          </Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>💼 10,000+ Jobs</h3>
          <p>Updated daily with top openings.</p>
        </div>

        <div className="feature-card">
          <h3>🏢 Top Companies</h3>
          <p>Google, Infosys, TCS, Wipro and more.</p>
        </div>

        <div className="feature-card">
          <h3>⚡ Easy Apply</h3>
          <p>Apply jobs in one click instantly.</p>
        </div>
      </div>

    </div>
  );
}

export default Home;