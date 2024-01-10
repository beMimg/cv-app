import { useState } from "react";
import { FormGeneralInfo } from "./FormGeneralInfo";
import { DisplayStudyEditDelete, FormEducationalInfo } from "./EducationalInfo";

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

  console.log(allStudies);
  return (
    <>
      <div className="left-side-main">
        <FormGeneralInfo handleSubmit={getGeneralInfo}></FormGeneralInfo>
        <FormEducationalInfo
          handleSubmit={getEducationalInfo}
          type="submit"
        ></FormEducationalInfo>
        <DisplayStudyEditDelete
          allStudies={allStudies}
          onEdit={handleEditInput}
          onDelete={handleDeleteStudy}
        ></DisplayStudyEditDelete>
      </div>
      <div className="right-side-main">
        <div className="cv"></div>
      </div>
    </>
  );
}

export default App;
