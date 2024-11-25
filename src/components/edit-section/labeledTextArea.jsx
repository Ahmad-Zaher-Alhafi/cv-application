import { useState } from "react";

function LabeledTextArea({
  label,
  inputType = "text",
  placeholder,
  onValueChange,
}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="labeledTextArea">
      <label htmlFor="textArea">{label}</label>
      <textarea
        type={inputType}
        id="textArea"
        placeholder={placeholder}
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          onValueChange(event.target.value);
        }}
      />
    </div>
  );
}

export default LabeledTextArea;
