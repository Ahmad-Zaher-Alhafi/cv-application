import "/src/styles/edit-section/addInfoConfiguration.css";
import LabeledInput from "./labeledInput";

function AddInfoConfiguration({ configurationTitle, inputs, onButtonclick }) {
  return (
    <div className="addInfoConfiguration">
      <div className="addInfoTitle">{configurationTitle}</div>

      <div className="addInfoContent">
        {inputs.map((input, index) => {
          return (
            <LabeledInput
              label={input.label}
              placeholder={input.placeholder}
              onValueChange={(value) => input.setInputValue(value)}
              inputValue={input.inputValue}
              key={index}
            ></LabeledInput>
          );
        })}

        <button className="addButton" onClick={onButtonclick}>
          +
        </button>
      </div>
    </div>
  );
}

export default AddInfoConfiguration;
