import LabeledInput from "./labeledInput";
import LabeledDropdown from "./labeledDropdown";

import { useState } from "react";
import "/src/styles/edit-section/editLanguagesSection.css";

function EditLanguagesSection({ languages, setLanguages }) {
  const languageFluencyOptions = [
    { value: "Beginner", key: crypto.randomUUID() },
    { value: "Intermediate", key: crypto.randomUUID() },
    { value: "Advanced", key: crypto.randomUUID() },
    { value: "Native", key: crypto.randomUUID() },
  ];

  const [languagesInputs, setLanguagesInputs] = useState([]);

  function addLanguage() {
    const inputKey = crypto.randomUUID();

    const newLanguages = [...languages];
    newLanguages.push({
      fluency: languageFluencyOptions[0].value,
      key: inputKey,
    });
    setLanguages(newLanguages);

    const newLanguagesInputs = [...languagesInputs];
    newLanguagesInputs.push({
      nameInput: {
        label: "Language name: ",
        onValueChanged: (value) => {
          onLanguageNameChanged(newLanguages, inputKey, value);
        },
        placeholder: "e.g. Arabic",
        key: inputKey + "nameKey",
      },

      fluencyDropdown: {
        label: "Fluency level: ",
        onValueChanged: (value) => {
          onLanguageFluencyChanged(newLanguages, inputKey, value);
        },
        key: inputKey + "fluencyKey",
      },

      key: inputKey,
    });

    setLanguagesInputs(newLanguagesInputs);
  }

  function onLanguageNameChanged(newLanguages, key, newName) {
    const changedlanguage = newLanguages.find((language) =>
      language.key.includes(key)
    );
    changedlanguage.name = newName;
    setLanguages((previousLanguages) => [...previousLanguages]);
  }

  function onLanguageFluencyChanged(newLanguages, key, newFluency) {
    const changedlanguage = newLanguages.find((language) =>
      language.key.includes(key)
    );
    changedlanguage.fluency = newFluency;

    setLanguages((previousLanguages) => [...previousLanguages]);
  }

  function deleteLanguage(languageKey) {
    const newlanguages = [...languages].filter(
      (language) => !language.key.includes(languageKey)
    );
    setLanguages(newlanguages);

    const newlanguagesInputs = languagesInputs.filter(
      (languageInput) => !languageInput.key.includes(languageKey)
    );
    setLanguagesInputs(newlanguagesInputs);
  }

  return (
    <div className="editLanguagesSection">
      <div className="addLanguagesTitle">Add more languages:</div>

      {languagesInputs.map((languageInputs) => {
        return (
          <div className="addInfoContent" key={languageInputs.key}>
            <LabeledInput
              label={languageInputs.nameInput.label}
              placeholder={languageInputs.nameInput.placeholder}
              onValueChange={(value) =>
                languageInputs.nameInput.onValueChanged(value)
              }
            ></LabeledInput>

            <LabeledDropdown
              label={languageInputs.fluencyDropdown.label}
              options={languageFluencyOptions}
              onValueChange={(value) =>
                languageInputs.fluencyDropdown.onValueChanged(value)
              }
            ></LabeledDropdown>

            <button
              className="deletelanguageButton"
              onClick={() => deleteLanguage(languageInputs.key)}
            >
              X
            </button>
          </div>
        );
      })}

      <button className="addButton" onClick={addLanguage}>
        +
      </button>
    </div>
  );
}
export default EditLanguagesSection;
