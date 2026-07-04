import { useState } from "react";
import Inputs from "./Inputs";
import Preview from "./Preview";
import '../styles/Profile.css'

export default function Profile() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    city: "",
    schoolName: "",
    titleStudy: "",
    studyGrade: "",
    dateStudy: "",
    companyName: "",
    positionTitle: "",
    jobResponsiblities: "",
    joiningDate: "",
    leavingDate: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const goNext = () => setStep(step + 1);
  const goBack = () => setStep(step - 1);

  const handleNext = (event) => {
    event.preventDefault();
    goNext();
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    goBack();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    goNext();
    setIsSubmitted(true);
  };

  return (
    <div className="profile">
      <div className="profile__panel">
        <ol className="profile__steps">
          <li
            className={
              "profile__step-item" +
              (step === 1 ? " is-active" : step > 1 ? " is-done" : "")
            }
          >
            <span className="profile__step-index">01</span>
            <span className="profile__step-label">General</span>
          </li>
          <li
            className={
              "profile__step-item" +
              (step === 2 ? " is-active" : step > 2 ? " is-done" : "")
            }
          >
            <span className="profile__step-index">02</span>
            <span className="profile__step-label">Education</span>
          </li>
          <li
            className={
              "profile__step-item" +
              (step === 3 ? " is-active" : step > 3 ? " is-done" : "")
            }
          >
            <span className="profile__step-index">03</span>
            <span className="profile__step-label">Experience</span>
          </li>
          <li
            className={
              "profile__step-item" + (step === 4 ? " is-active" : "")
            }
          >
            <span className="profile__step-index">04</span>
            <span className="profile__step-label">Preview</span>
          </li>
        </ol>
 
        {step === 1 && (
          <div className="profile__step">
            <h2 className="profile__title">General Information</h2>
            <form>
              <Inputs
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              <Inputs
                label="City"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
              />
              <Inputs
                label="E-Mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Inputs
                label="Contact No."
                name="contactNo"
                type="text"
                value={formData.contactNo}
                onChange={handleChange}
              />
              <div className="profile__actions profile__actions--end">
                <button className="btn btn--primary" onClick={handleNext}>
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
 
        {step === 2 && (
          <div className="profile__step">
            <h2 className="profile__title">Educational Experience</h2>
            <Inputs
              label="School Name"
              name="schoolName"
              type="text"
              value={formData.schoolName}
              onChange={handleChange}
            />
            <Inputs
              label="Degree Name"
              name="titleStudy"
              type="text"
              value={formData.titleStudy}
              onChange={handleChange}
            />
            <Inputs
              label="GPA"
              name="studyGrade"
              type="text"
              value={formData.studyGrade}
              onChange={handleChange}
            />
            <Inputs
              label="Batch Year"
              name="dateStudy"
              type="date"
              value={formData.dateStudy}
              onChange={handleChange}
            />
            <div className="profile__actions">
              <button className="btn btn--ghost" onClick={handlePrevious}>
                Back
              </button>
              <button className="btn btn--primary" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}
 
        {step === 3 && (
          <div className="profile__step">
            <h2 className="profile__title">Practical Experience</h2>
            <Inputs
              label="Company Name"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
            />
            <Inputs
              label="Position Title"
              name="positionTitle"
              type="text"
              value={formData.positionTitle}
              onChange={handleChange}
            />
            <Inputs
              label="Job Responsiblities"
              name="jobResponsiblities"
              type="textArea"
              value={formData.jobResponsiblities}
              onChange={handleChange}
            />
            <Inputs
              label="Joining Date"
              name="joiningDate"
              type="date"
              value={formData.joiningDate}
              onChange={handleChange}
            />
            <Inputs
              label="Resigning Date"
              name="leavingDate"
              type="date"
              value={formData.leavingDate}
              onChange={handleChange}
            />
            <div className="profile__actions">
              <button className="btn btn--ghost" onClick={handlePrevious}>
                Back
              </button>
              <button className="btn btn--primary" onClick={handleSubmit}>
                Preview
              </button>
            </div>
          </div>
        )}
 
        {step === 4 && isSubmitted && (
          <div className="profile__step">
            <h2 className="profile__title">Preview</h2>
            <Preview
              name={formData.name}
              city={formData.city}
              email={formData.email}
              contactNo={formData.contactNo}
              schoolName={formData.schoolName}
              titleStudy={formData.titleStudy}
              studyGrade={formData.studyGrade}
              dateStudy={formData.dateStudy}
              companyName={formData.companyName}
              positionTitle={formData.positionTitle}
              jobResponsiblities={formData.jobResponsiblities}
              joiningDate={formData.joiningDate}
              leavingDate={formData.leavingDate}
            />
            <div className="profile__actions profile__actions--end">
              <button className="btn btn--ghost" onClick={handlePrevious}>
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
