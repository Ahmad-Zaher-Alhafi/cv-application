function LabeledInput({
  label,
  inputType = "text",
  placeholder,
  onValueChange,
}) {
  return (
    <div className="labeledInput">
      <label htmlFor="input">{label}</label>
      <input
        type={inputType}
        id="input"
        placeholder={placeholder}
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
    </div>
  );
}

export default LabeledInput;
