import { useState } from "react";

export function FormEducationalInfo({ handleSubmit }) {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

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
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="school-name">School name:</label>
        <input
          type="text"
          name="school-name"
          id="school-name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
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
        />
      </div>
      <div>
        <label htmlFor="date-of-study">Date of study:</label>
        <input
          type="text"
          name="date-of-study"
          id="title-of-study"
          value={dateOfStudy}
          onChange={(e) => setDateOfStudy(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
