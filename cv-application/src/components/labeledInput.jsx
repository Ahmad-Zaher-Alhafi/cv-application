function LabeledInput({ label, inputType = "text" }) {
  return (
    <div className="labeledInput">
      <label htmlFor="input">{label}</label>
      <input type={inputType} id="input" />
    </div>
  );
}

export default LabeledInput;
