import '../styles/Preview.css'
export default function Preview({ name, city, email, contactNo, schoolName, titleStudy, studyGrade, dateStudy, companyName, positionTitle, jobResponsiblities, joiningDate, leavingDate }) {
  return (
    <div className="preview">
      <header className="preview__header">
        <h1 className="preview__name">{name}</h1>
        <div className="preview__contact">
          <span>{city}</span>
          <span className="preview__dot">·</span>
          <span>{email}</span>
          <span className="preview__dot">·</span>
          <span>{contactNo}</span>
        </div>
      </header>
 
      <section className="preview__section">
        <h2 className="preview__section-title">Education</h2>
        <div className="preview__entry">
          <div className="preview__entry-row">
            <h3 className="preview__entry-title">{titleStudy}</h3>
            <span className="preview__entry-date">{dateStudy}</span>
          </div>
          <div className="preview__entry-sub">
            <span>{schoolName}</span>
            <span className="preview__dot">·</span>
            <span>{studyGrade}</span>
          </div>
        </div>
      </section>
 
      <section className="preview__section">
        <h2 className="preview__section-title">Experience</h2>
        <div className="preview__entry">
          <div className="preview__entry-row">
            <h3 className="preview__entry-title">{positionTitle}</h3>
            <span className="preview__entry-date">
              {joiningDate} — {leavingDate}
            </span>
          </div>
          <div className="preview__entry-sub">{companyName}</div>
          <p className="preview__desc">{jobResponsiblities}</p>
        </div>
      </section>
    </div>
  );
}
