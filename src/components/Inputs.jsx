import '../styles/Inputs.css'
export default function Inputs({ label, name, value, type, onChange }) {
  return (
    <div className="field">
      <label className="field__label">{label}</label>
      {type === "textArea" ? (
        <textarea
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="field__control field__control--textarea"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="field__control"
        />
      )}
    </div>
  );
}
