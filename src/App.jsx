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

  console.log(allStudies);
  return (
    <>
      <div className="left-side-main">
        <FormGeneralInfo handleSubmit={getGeneralInfo}></FormGeneralInfo>
        <h1>Educational Information</h1>
        <FormEducationalInfo
          handleSubmit={getEducationalInfo}
        ></FormEducationalInfo>
        {allStudies.map((study) => {
          return (
            <div key={study.id}>
              <p>{study.schoolName}</p>
              <button>Edit</button>
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
