export default function Preview({ name, city, email, contactNo, schoolName, titleStudy, studyGrade, dateStudy, companyName, positionTitle, jobResponsiblities, joiningDate, leavingDate }) {
  return (
    <>
        <h1>{name}</h1>
        <span>{city}</span>
        &nbsp;&nbsp;&nbsp;
        <span>{email}</span>
        &nbsp;&nbsp;&nbsp;
        <span>{contactNo}</span>
        <hr />
        <h2>Educational Qualifications</h2>
        <h3>{titleStudy}</h3>
        <p>{dateStudy}</p>
        <span>{schoolName}</span> &nbsp;&nbsp;&nbsp;
        <span>{studyGrade}</span>
        <hr />
        <h2>Experience</h2>
        <h3>{positionTitle}</h3>
        <span>{companyName}</span> 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span>{joiningDate}</span>
        {" - "}
        <span>{leavingDate}</span>
        <p>{jobResponsiblities}</p>
    </>
  );
}
