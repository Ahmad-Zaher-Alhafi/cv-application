import { useState } from "react";
import LabeledInput from "./labeledInput";
import "/src/styles/edit-section/editLinksSection.css";

function EditLinksSection({ links, setLinks }) {
  const [linksInputs, setLinksInputs] = useState([]);

  function addLink() {
    const inputKey = crypto.randomUUID();

    const newLinks = [...links];
    newLinks.push({
      key: inputKey,
    });
    setLinks(newLinks);

    const newLinksInputs = [...linksInputs];
    newLinksInputs.push({
      nameInput: {
        label: "Link name: ",
        onValueChanged: (value) => {
          onLinkNameChanged(newLinks, inputKey, value);
        },
        placeholder: "e.g. Linkedin",
        key: inputKey + "nameKey",
      },

      urlInput: {
        label: "Link url: ",
        onValueChanged: (value) => {
          onLinkUrlChanged(newLinks, inputKey, value);
        },
        placeholder: "https://linkedin.com/yours",
        key: inputKey + "urlKey",
      },

      key: inputKey,
    });

    setLinksInputs(newLinksInputs);
  }

  function onLinkNameChanged(newLinks, key, newName) {
    const changedLink = newLinks.find((link) => link.key.includes(key));
    changedLink.name = newName;
    setLinks((previousLinks) => [...previousLinks]);
  }

  function onLinkUrlChanged(newLinks, key, newUrl) {
    const changedLink = newLinks.find((link) => link.key.includes(key));
    changedLink.url = newUrl;
    setLinks((previousLinks) => [...previousLinks]);
  }

  function deleteLink(linkKey) {
    const newLinks = [...links].filter((link) => !link.key.includes(linkKey));
    setLinks(newLinks);

    const newLinksInputs = linksInputs.filter(
      (linkInput) => !linkInput.key.includes(linkKey)
    );
    setLinksInputs(newLinksInputs);
  }

  return (
    <div className="editLinksSection">
      <div className="addInfoTitle">Add more links: </div>

      {linksInputs.map((linkInputs) => {
        return (
          <div className="addInfoContent" key={linkInputs.key}>
            <LabeledInput
              label={linkInputs.nameInput.label}
              placeholder={linkInputs.nameInput.placeholder}
              onValueChange={(value) =>
                linkInputs.nameInput.onValueChanged(value)
              }
            ></LabeledInput>

            <LabeledInput
              label={linkInputs.urlInput.label}
              placeholder={linkInputs.urlInput.placeholder}
              onValueChange={(value) =>
                linkInputs.urlInput.onValueChanged(value)
              }
            ></LabeledInput>

            <button
              className="deleteButton"
              onClick={() => deleteLink(linkInputs.key)}
            >
              —
            </button>
          </div>
        );
      })}

      <button className="addButton" onClick={addLink}>
        +
      </button>
    </div>
  );
}
export default EditLinksSection;
