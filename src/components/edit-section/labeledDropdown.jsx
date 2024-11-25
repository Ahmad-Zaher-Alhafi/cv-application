import { useState } from "react";

function LabeledDropdown({ label, options, onValueChange }) {
  const [dropdownValue, setdropdownValue] = useState("");

  return (
    <div className="labeledInput">
      <label htmlFor="dropdown">{label}</label>
      <select
        name="dropDown"
        id="dropdown"
        value={dropdownValue}
        onChange={(event) => {
          setdropdownValue(event.target.value);
          onValueChange(event.target.value);
        }}
      >
        {options.map((option) => {
          return (
            <option value={option.value} key={option.key}>
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default LabeledDropdown;
