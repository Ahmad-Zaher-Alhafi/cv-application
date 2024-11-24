import "/src/styles/edit-section/addInfoConfiguration.css";
import LabeledInput from "./labeledInput";

function AddInfoConfiguration({
  configurationTitle,
  inputs,
  onAddButtonclick,
  onDeleteButtonClicked,
}) {
  return (
    <div className="addInfoConfiguration">
      <div className="addInfoTitle">{configurationTitle}</div>

      {inputs.map((input) => {
        return (
          <div className="addInfoContent" key={input.key}>
            <LabeledInput
              label={input.label}
              placeholder={input.placeholder}
              onValueChange={(value) => input.onValueChanged(value)}
            ></LabeledInput>

            <button
              className="deleteButton"
              onClick={() => onDeleteButtonClicked(input.key)}
            >
              X
            </button>
          </div>
        );
      })}

      <button className="addButton" onClick={onAddButtonclick}>
        +
      </button>
    </div>
  );
}

export default AddInfoConfiguration;
