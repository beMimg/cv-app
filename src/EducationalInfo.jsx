import { useState } from "react";

export function FormEducationalInfo({ handleSubmit }) {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    const newStudy = {
      schoolName: schoolName,
      titleOfStudy: titleOfStudy,
      dateOfStudy: dateOfStudy,
      id: crypto.randomUUID(),
    };
    handleSubmit(newStudy);
    setSchoolName("");
    setTitleOfStudy("");
    setDateOfStudy("");
  }

  return (
    <div className="form-section middle">
      <h1 className="form-title">Educational Information</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="school-name">School name:</label>
          <input
            type="text"
            name="school-name"
            id="school-name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            placeholder="University of ..."
          />
        </div>
        <div>
          <label htmlFor="title-of-study">Title of study:</label>
          <input
            type="text"
            name="title-of-study"
            id="title-of-study"
            value={titleOfStudy}
            onChange={(e) => setTitleOfStudy(e.target.value)}
            placeholder="e.g. Computer Science"
          />
        </div>
        <div>
          <label htmlFor="date-of-study">Date of study:</label>
          <input
            type="date"
            name="date-of-study"
            id="title-of-study"
            value={dateOfStudy}
            onChange={(e) => setDateOfStudy(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export function DisplayStudyEditDelete({ allStudies, onDelete, onEdit }) {
  return (
    <ul>
      {allStudies.map((study) => {
        return (
          <div key={study.id} className="created-form">
            <li>
              <label htmlFor="school-name">School name:</label>
              <input
                type="text"
                value={study.schoolName}
                onChange={(e) => onEdit("school", study.id, e)}
              />
              <label htmlFor="title-of-study">Title of study:</label>
              <input
                type="text"
                value={study.titleOfStudy}
                onChange={(e) => onEdit("title-of-study", study.id, e)}
              />
              <label htmlFor="date-of-study">Date of study:</label>
              <input
                type="date"
                value={study.dateOfStudy}
                onChange={(e) => onEdit("date-of-study", study.id, e)}
              />
              <button className="delete-btn" onClick={() => onDelete(study.id)}>
                Delete
              </button>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
