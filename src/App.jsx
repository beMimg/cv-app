import { useState } from "react";
import { FormGeneralInfo } from "./FormGeneralInfo";

function App() {
  const [generalInfo, setGeneralInfo] = useState("");

  function getGeneralInfo(info) {
    setGeneralInfo(info);
  }

  return (
    <>
      <div className="left-side-main">
        <FormGeneralInfo handleSubmit={getGeneralInfo}></FormGeneralInfo>
      </div>
      <div className="right-side-main">
        <div className="cv"></div>
      </div>
    </>
  );
}

export default App;
