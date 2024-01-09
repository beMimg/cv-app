import { useState } from "react";
import { FormGeneralInfo } from "./FormGeneralInfo";
import { FormEducationalInfo } from "./FormEducationalInfo";

function App() {
  const [generalInfo, setGeneralInfo] = useState("");
  const [allStudies, setAllStudies] = useState([]);

  function getGeneralInfo(info) {
    setGeneralInfo(info);
  }

  function getEducationalInfo(newStudy) {
    setAllStudies([...allStudies, newStudy]);
  }

  function handleDeleteStudy(id) {
    let filtredStudies = allStudies.filter((study) => study.id != id);
    setAllStudies(filtredStudies);
  }

  function handleEditInput(type, id, e) {
    setAllStudies((prevStudies) => {
      return prevStudies.map((study) => {
        if (study.id === id) {
          if (type === "school") {
            return { ...study, schoolName: e.target.value };
          }
          if (type === "title-of-study") {
            return { ...study, titleOfStudy: e.target.value };
          }
          if (type === "date-of-study") {
            return { ...study, dateOfStudy: e.target.value };
          }
        } else {
          return study;
        }
      });
    });
  }

  return (
    <>
      <div className="left-side-main">
        <FormGeneralInfo handleSubmit={getGeneralInfo}></FormGeneralInfo>
        <h1>Educational Information</h1>
        <FormEducationalInfo
          handleSubmit={getEducationalInfo}
          type="submit"
        ></FormEducationalInfo>
        {allStudies.map((study) => {
          return (
            <div key={study.id}>
              <label htmlFor="school-name">School name:</label>
              <input
                type="text"
                value={study.schoolName}
                onChange={(e) => handleEditInput("school", study.id, e)}
              />
              <label htmlFor="title-of-study">Title of study:</label>
              <input
                type="text"
                value={study.titleOfStudy}
                onChange={(e) => handleEditInput("title-of-study", study.id, e)}
              />
              <label htmlFor="date-of-study">Date of study:</label>
              <input
                type="text"
                value={study.dateOfStudy}
                onChange={(e) => handleEditInput("date-of-study", study.id, e)}
              />
              <button onClick={() => handleDeleteStudy(study.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className="right-side-main">
        <div className="cv"></div>
      </div>
    </>
  );
}

export default App;
