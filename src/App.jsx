import { useState } from "react";
import { FormGeneralInfo } from "./FormGeneralInfo";
import { DisplayStudyEditDelete, FormEducationalInfo } from "./EducationalInfo";
import { DisplayJobEditDelete, FormPracticalInfo } from "./PracticalInfo";
import logo from "./assets/rick.png";

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
          <section className="cv-section top">
            <h1 id="name">{generalInfo.name}</h1>
            <p id="email">
              Email: <strong>{generalInfo.email}</strong>
            </p>
            <p>
              Phone Number: <strong>{generalInfo.phoneNumber}</strong>
            </p>
          </section>
          <section className="cv-section">
            <h1 className="section-title">Educational Information:</h1>
            {allStudies.map((study) => (
              <ul key={study.id}>
                <li>
                  School:
                  <strong> {study.schoolName}</strong>
                </li>
                <p>
                  Title of Study: <strong>{study.titleOfStudy}</strong>
                </p>
                <p>Date: {study.dateOfStudy}</p>
              </ul>
            ))}
          </section>
          <section className="cv-section">
            <h1 className="section-title">Practical Information:</h1>
            {allJobs.map((job) => (
              <div key={job.id}>
                <li>
                  <strong>{job.positionTitle}</strong>
                </li>
                <p>Company: {job.companyName}</p>

                <p>Responsabilities: {job.mainResponsabilities}</p>
                <p>
                  From: {job.startDate} To: {job.endDate}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
