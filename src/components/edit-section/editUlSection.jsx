import { useState } from "react";
import AddInfoConfiguration from "./addInfoConfiguration";

function EditUlSection({
  values,
  setValues,
  title,
  inputLabel,
  inputPlaceholder,
  useTextAreasInsteadOfInputs = false,
}) {
  const [valuesInputs, setValuesInputs] = useState([]);

  function addValue() {
    const inputKey = crypto.randomUUID();

    const newValues = [...values];
    newValues.push({
      key: inputKey,
    });
    setValues(newValues);

    const newValuesInputs = [...valuesInputs];
    newValuesInputs.push({
      label: inputLabel,
      onValueChanged: (value) => {
        onValueChanged(newValues, inputKey, value);
      },
      placeholder: inputPlaceholder,
      key: inputKey,
    });

    setValuesInputs(newValuesInputs);
  }

  function onValueChanged(newValues, key, newValue) {
    const changedValue = newValues.find((value) => value.key === key);
    changedValue.value = newValue;
    setValues((previousValues) => [...previousValues]);
  }

  function deleteValue(valueKey) {
    const newValues = [...values].filter((value) => value.key !== valueKey);
    setValues(newValues);

    const newValuesInputs = valuesInputs.filter(
      (valueInput) => valueInput.key !== valueKey
    );
    setValuesInputs(newValuesInputs);
  }

  return (
    <div className="editValuesSection">
      <AddInfoConfiguration
        configurationTitle={title}
        inputs={valuesInputs}
        onAddButtonclick={addValue}
        onDeleteButtonClicked={(valueKey) => deleteValue(valueKey)}
        useTextAreasInsteadOfInputs={useTextAreasInsteadOfInputs}
      ></AddInfoConfiguration>
    </div>
  );
}

export default EditUlSection;
