import { useState } from "react";

export function FormPracticalInfo({ handleSubmit }) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsabilities, setMainResponsabilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    const job = {
      companyName: companyName,
      positionTitle: positionTitle,
      mainResponsabilities: mainResponsabilities,
      startDate: startDate,
      endDate: endDate,
      id: crypto.randomUUID(),
    };
    handleSubmit(job);
    setCompanyName("");
    setPositionTitle("");
    setMainResponsabilities("");
    setStartDate("");
    setEndDate("");
  }

  return (
    <div className="form-section">
      <h1 className="form-title">Practical Information</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="company-name">Company name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Example & Example Organization"
          />
        </div>
        <div>
          <label htmlFor="position-title">Position title:</label>
          <input
            type="text"
            value={positionTitle}
            onChange={(e) => setPositionTitle(e.target.value)}
            placeholder="E.g. Receptionist"
          />
        </div>
        <div className="responsabilities">
          <label htmlFor="main-responsabilities">Main responsabilities:</label>
          <textarea
            value={mainResponsabilities}
            onChange={(e) => setMainResponsabilities(e.target.value)}
            placeholder="Showcase your relevant experience in previous roles"
          ></textarea>
        </div>
        <div>
          <label htmlFor="start-date">Start date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="end-date">End date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export function DisplayJobEditDelete({ allJobs, onDelete, onEdit }) {
  return (
    <ul>
      {allJobs.map((job) => {
        return (
          <div className="created-form">
            <li key={job.id}>
              <label htmlFor="company-name">Company name:</label>
              <input
                type="text"
                value={job.companyName}
                onChange={(e) => onEdit("company-name", job.id, e)}
              />
              <label htmlFor="position-title">Position title:</label>
              <input
                type="text"
                value={job.positionTitle}
                onChange={(e) => onEdit("position-title", job.id, e)}
              />
              <label htmlFor="main-responsabilities">
                Main responsabilities:
              </label>
              <textarea
                value={job.mainResponsabilities}
                onChange={(e) => onEdit("main-responsabilities", job.id, e)}
                className="responsabilities"
              ></textarea>
              <label htmlFor="start-date">Start date:</label>
              <input
                type="date"
                value={job.startDate}
                onChange={(e) => onEdit("start-date", job.id, e)}
              />
              <label htmlFor="end-date">End date:</label>
              <input
                type="date"
                value={job.endDate}
                onChange={(e) => onEdit("end-date", job.id, e)}
              />
              <button className="delete-btn" onClick={() => onDelete(job.id)}>
                Delete
              </button>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
