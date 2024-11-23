function LabeledInput({
  label,
  inputType = "text",
  placeholder,
  onValueChange,
  inputValue,
}) {
  return (
    <div className="labeledInput">
      <label htmlFor="input">{label}</label>
      <input
        type={inputType}
        id="input"
        placeholder={placeholder}
        value={inputValue}
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
    </div>
  );
}

export default LabeledInput;
