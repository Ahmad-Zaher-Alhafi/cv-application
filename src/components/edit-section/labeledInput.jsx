import { useState } from "react";

function LabeledInput({
  label,
  inputType = "text",
  placeholder,
  onValueChange,
}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="labeledInput">
      <label htmlFor="input">{label}</label>
      <input
        type={inputType}
        id="input"
        placeholder={placeholder}
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
          onValueChange(event.target.value);
        }}
      />
    </div>
  );
}

export default LabeledInput;
