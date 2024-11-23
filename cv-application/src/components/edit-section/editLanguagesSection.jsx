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

  const [inputValue, setInputValue] = useState("");
  const [dropDownValue, setDropDownValue] = useState(
    languageFluencyOptions[0].value
  );

  function addLanguage() {
    const newLanguages = [...languages];
    newLanguages.push({
      name: inputValue,
      fluency: dropDownValue,
      key: crypto.randomUUID(),
    });
    setLanguages(newLanguages);

    resetToDefaultState();
  }

  function resetToDefaultState() {
    setInputValue("");
    setDropDownValue(languageFluencyOptions[0].value);
  }

  function deleteLanguage(languageKey) {
    const newLanguages = [...languages].filter(
      (language) => language.key !== languageKey
    );
    setLanguages(newLanguages);
  }

  return (
    <div className="editLanguagesSection">
      <div className="editSectionTitle">Languages</div>

      <ol className="languagesList">
        {languages.map((language) => {
          return (
            <div className="languageSection" key={language.key}>
              <li className="language">
                {language.name + ": " + language.fluency}
              </li>
              <button
                className="deleteLanguageButton"
                onClick={() => deleteLanguage(language.key)}
              >
                X
              </button>
            </div>
          );
        })}
      </ol>

      <div className="addLanguagesConfiguration">
        <div className="addLanguagesTitle">Add more languages:</div>

        <div className="addLanguagesContent">
          <LabeledInput
            label={"Language name: "}
            placeholder={"e.g. Arabic"}
            onValueChange={(value) => setInputValue(value)}
            inputValue={inputValue}
          ></LabeledInput>
          <LabeledDropdown
            label={"Fluency level: "}
            options={languageFluencyOptions}
            onValueChanged={(value) => setDropDownValue(value)}
            dropDownVlaue={dropDownValue}
          ></LabeledDropdown>
          <button
            className="addLanguageButton"
            onClick={() => addLanguage(languages)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
export default EditLanguagesSection;
