import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function FormPracticalInfo({ handleSubmit }) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsabilities, setMainResponsabilities] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
    setStartDate(new Date());
    setEndDate(new Date());
  }

  return (
    <>
      <h1>Practical Information</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="company-name">Company name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="position-title">Position title:</label>
          <input
            type="text"
            value={positionTitle}
            onChange={(e) => setPositionTitle(e.target.value)}
          />
        </div>
        <div className="responsabilities">
          <label htmlFor="main-responsabilities">Main responsabilities:</label>
          <textarea
            cols="30"
            rows="10"
            value={mainResponsabilities}
            onChange={(e) => setMainResponsabilities(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="start-date">Start date:</label>
          <DatePicker
            selected={startDate}
            onChange={(startDate) => setStartDate(startDate)}
          ></DatePicker>
        </div>
        <div>
          <label htmlFor="end-date">End date:</label>
          <DatePicker
            selected={endDate}
            onChange={(endDate) => setStartDate(endDate)}
          ></DatePicker>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export function DisplayJobEditDelete({ allJobs, onDelete, onEdit }) {
  return (
    <ul>
      {allJobs.map((job) => {
        return (
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
            ></textarea>
            <label htmlFor="start-date">Start date:</label>
            <DatePicker
              selected={job.startDate}
              onChange={(startDate) => onEdit("start-date", job.id, startDate)}
            ></DatePicker>
            <label htmlFor="end-date">End date:</label>
            <DatePicker
              selected={job.endDate}
              onChange={(endDate) => onEdit("end-date", job.id, endDate)}
            ></DatePicker>
            <button onClick={() => onDelete(job.id)}> Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
