import { useState } from "react";
import { FormGeneralInfo } from "./FormGeneralInfo";
import { DisplayStudyEditDelete, FormEducationalInfo } from "./EducationalInfo";
import { DisplayJobEditDelete, FormPracticalInfo } from "./PracticalInfo";

function App() {
  const [generalInfo, setGeneralInfo] = useState("");
  const [allStudies, setAllStudies] = useState([]);
  const [allJobs, setAllJobs] = useState([]);

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

  function getPracticalInfo(job) {
    setAllJobs([...allJobs, job]);
  }

  function handleDeleteJob(id) {
    let filtredJobs = allJobs.filter((job) => job.id != id);
    setAllJobs(filtredJobs);
  }

  function handleEditJob(type, id, e) {
    setAllJobs((prevJobs) => {
      return prevJobs.map((job) => {
        if (job.id === id) {
          if (type === "company-name") {
            return { ...job, companyName: e.target.value };
          }
          if (type === "position-title") {
            return { ...job, positionTitle: e.target.value };
          }
          if (type === "main-responsabilities") {
            return { ...job, mainResponsabilities: e.target.value };
          }
          if (type === "start-date") {
            return { ...job, startDate: e.target.value };
          }
          if (type === "end-date") {
            return { ...job, endDate: e.target.value };
          }
        } else {
          return job;
        }
      });
    });
  }

  console.log(allJobs);
  return (
    <>
      <div className="left-side-main">
        <FormGeneralInfo handleSubmit={getGeneralInfo}></FormGeneralInfo>
        <FormEducationalInfo
          handleSubmit={getEducationalInfo}
        ></FormEducationalInfo>
        <DisplayStudyEditDelete
          allStudies={allStudies}
          onEdit={handleEditInput}
          onDelete={handleDeleteStudy}
        ></DisplayStudyEditDelete>
        <FormPracticalInfo handleSubmit={getPracticalInfo}></FormPracticalInfo>
        <DisplayJobEditDelete
          allJobs={allJobs}
          onDelete={handleDeleteJob}
          onEdit={handleEditJob}
        ></DisplayJobEditDelete>
      </div>
      <div className="right-side-main">
        <div className="cv">
          <h1>Personal Information:</h1>
          <div>
            <p>Name: {generalInfo.name}</p>
            <p>Email: {generalInfo.email}</p>
            <p>Phone Number: {generalInfo.phoneNumber}</p>
          </div>
          <h1>Educational Information:</h1>
          {allStudies.map((study) => (
            <div key={study.id}>
              <p>School:{study.schoolName}</p>
              <p>Title:{study.titleOfStudy}</p>
              <p>Date:{study.dateOfStudy}</p>
            </div>
          ))}
          <h1>Practical Information:</h1>
          {allJobs.map((job) => (
            <div key={job.id}>
              <p>{job.companyName}</p>
              <p>{job.positionTitle}</p>
              <p>{job.mainResponsabilities}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
