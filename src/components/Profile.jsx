import { useState } from "react";
import Inputs from "./Inputs";
import Preview from "./Preview";

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
    <div>
      <div>
        {step === 1 && (
          <>
            <h2>General Information</h2>
            <form type="submit">
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
              <button onClick={handleNext}>Next</button>
            </form>
          </>
        )}
        {step === 2 && (
          <>
            <h1>Educational Experience</h1>
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
            <button onClick={handlePrevious}>Back</button>
            <button onClick={handleNext}>Next</button>
          </>
        )}

        {step === 3 && (
          <>
            <h1>Practical Experience</h1>
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

            <button onClick={handlePrevious}>Back</button>
            <button onClick={handleSubmit}>Preview</button>
          </>
        )}

        {step === 4 && isSubmitted && (
          <>
            <h1>Preview</h1>
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
            <button onClick={handlePrevious}>Back</button>
            {/* <button onClick={handleSubmit}></button> */}
          </>
        )}
      </div>
    </div>
  );
}
