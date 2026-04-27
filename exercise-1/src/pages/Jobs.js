import React from "react";

function Jobs() {
  const jobs = [
    { id: 1, role: "Frontend Developer", company: "Infosys" },
    { id: 2, role: "Backend Developer", company: "TCS" },
    { id: 3, role: "UI Designer", company: "Wipro" },
    { id: 4, role: "Software Engineer", company: "Google" }
  ];

  return (
    <div className="page">
      <h2>Available Jobs</h2>

      <div className="grid">
        {jobs.map((job) => (
          <div className="card" key={job.id}>
            <h3>{job.role}</h3>
            <p>{job.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;