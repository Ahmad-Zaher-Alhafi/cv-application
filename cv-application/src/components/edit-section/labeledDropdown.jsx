function LabeledDropdown({ label, options, onValueChanged, dropDownVlaue }) {
  return (
    <div className="labeledInput">
      <label htmlFor="dropdown">{label}</label>
      <select
        name="dropDown"
        id="dropdown"
        value={dropDownVlaue}
        onChange={(event) => onValueChanged(event.target.value)}
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
