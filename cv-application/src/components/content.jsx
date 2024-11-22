import { useState } from "react";
import "/src/styles/content.css";
import EditContent from "./edit-section/editContent";
import ResultContent from "./result-section/resultContent";

function Content() {
  const [fullName, setFullName] = useState("Ahmad Zaher Alhafi");
  const [imgUrl, setImgUrl] = useState("./src/assets/CV photo.jpg");

  function OnNameChanged(name) {
    setFullName(name);
  }

  function OnImgUrlChanged(imgUrl) {
    setImgUrl(imgUrl);
  }

  return (
    <div className="content">
      <EditContent
        setFullName={OnNameChanged}
        setImgUrl={OnImgUrlChanged}
      ></EditContent>
      <ResultContent name={fullName} imgUrl={imgUrl}></ResultContent>
    </div>
  );
}

export default Content;
