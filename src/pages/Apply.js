import React, { useState } from "react";

function Apply() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    skills: ""
  });

  const applyJob = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.qualification
    ) {
      alert("Please fill all required fields");
      return;
    }

    alert("Job Application Submitted Successfully!");
  };

  return (
    <div className="box">
      <h2>Apply for Job</h2>

      <form onSubmit={applyJob}>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e)=>setForm({...form,phone:e.target.value})}
        />

        <input
          type="text"
          placeholder="Qualification"
          onChange={(e)=>setForm({...form,qualification:e.target.value})}
        />

        <input
          type="text"
          placeholder="Skills"
          onChange={(e)=>setForm({...form,skills:e.target.value})}
        />

        <button type="submit">Apply Now</button>
      </form>
    </div>
  );
}

export default Apply;