export default function Inputs({ label, name, value, type, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      {type === "textArea" ? (
        <textarea
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} />
      )}

      <br />
      <br />
    </div>
  );
}
