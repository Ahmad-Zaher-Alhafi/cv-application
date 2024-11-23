import { useState } from "react";
import AddInfoConfiguration from "./addInfoConfiguration";
import "/src/styles/edit-section/editLinksSection.css";

function EditLinksSection({ links, setLinks }) {
  const [nameInputValue, setNameInputValue] = useState("");
  const [urlInputValue, setUrlInputValue] = useState("");

  function addLink() {
    const newLink = [...links];
    newLink.push({
      name: nameInputValue,
      url: urlInputValue,
      key: crypto.randomUUID(),
    });
    setLinks(newLink);

    resetToDefaultState();
  }

  function resetToDefaultState() {
    setNameInputValue("");
    setUrlInputValue("");
  }

  function deleteLink(linkKey) {
    const newLinks = [...links].filter((link) => link.key !== linkKey);
    setLinks(newLinks);
  }

  const inputs = [
    {
      label: "Link name: ",
      inputValue: nameInputValue,
      setInputValue: setNameInputValue,
      placeholder: "e.g. Linkedin",
    },

    {
      label: "Link url: ",
      inputValue: urlInputValue,
      setInputValue: setUrlInputValue,
      placeholder: "https://linkedin.com/yours",
    },
  ];

  return (
    <div className="editLinksSection">
      <div className="editSectiontitle">Links</div>

      <ul className="linksList">
        {links.map((link) => {
          return (
            <div className="linkSection" key={link.key}>
              <li className="link">
                <a href={link.url}>{link.name}</a>
              </li>
              <button
                className="deleteLinkButton"
                onClick={() => deleteLink(link.key)}
              >
                X
              </button>
            </div>
          );
        })}
      </ul>

      <AddInfoConfiguration
        configurationTitle={"Add more Links:"}
        inputs={inputs}
        onButtonclick={addLink}
      ></AddInfoConfiguration>
    </div>
  );
}
export default EditLinksSection;
