import { useState } from "react";
import { FormGeneralInfo } from "./FormGeneralInfo";
import { FormEducationalInfo } from "./FormEducationalInfo";

const allStudies = [];

function App() {
  const [generalInfo, setGeneralInfo] = useState("");

  function getGeneralInfo(info) {
    setGeneralInfo(info);
  }

  function getEducationalInfo(newStudy) {
    allStudies.push(newStudy);
    console.log(allStudies);
  }

  return (
    <>
      <div className="left-side-main">
        <FormGeneralInfo handleSubmit={getGeneralInfo}></FormGeneralInfo>
        <FormEducationalInfo
          handleSubmit={getEducationalInfo}
        ></FormEducationalInfo>
      </div>
      <div className="right-side-main">
        <div className="cv"></div>
      </div>
    </>
  );
}

export default App;
