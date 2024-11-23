import "/src/styles/edit-section/addInfoConfiguration.css";
import LabeledInput from "./labeledInput";

function AddInfoConfiguration({
  configurationTitle,
  label,
  inputValue,
  setInputValue,
  placeholder,
  onButtonclick,
}) {
  return (
    <div className="addInfoConfiguration">
      <div className="addInfoTitle">{configurationTitle}</div>

      <div className="addInfoContent">
        <LabeledInput
          label={label}
          placeholder={placeholder}
          onValueChange={(value) => setInputValue(value)}
          inputValue={inputValue}
        ></LabeledInput>

        <button className="addButton" onClick={onButtonclick}>
          +
        </button>
      </div>
    </div>
  );
}

export default AddInfoConfiguration;
