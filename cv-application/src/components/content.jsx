import { useState } from "react";
import "/src/styles/content.css";
import EditContent from "./edit-section/editContent";
import ResultContent from "./result-section/resultContent";

function Content() {
  const [fullName, setFullName] = useState("Ahmad Zaher Alhafi");
  const [imgUrl, setImgUrl] = useState("./src/assets/CV photo.jpg");

  const [address, setAddress] = useState("Izmit, Turkey");
  const [phoneNumber, setPhoneNumber] = useState("+905315190382");
  const [email, setEmail] = useState("z1_ahmad@hotmail.com");

  const [languages, setLanguages] = useState([
    { name: "English", fluency: "Advanced", key: crypto.randomUUID() },
  ]);

  return (
    <div className="content">
      <EditContent
        setFullName={setFullName}
        setImgUrl={setImgUrl}
        setAddress={setAddress}
        setPhoneNumber={setPhoneNumber}
        setEmail={setEmail}
        languages={languages}
        setLanguages={setLanguages}
      ></EditContent>

      <ResultContent
        name={fullName}
        imgUrl={imgUrl}
        address={address}
        phoneNumber={phoneNumber}
        email={email}
        languages={languages}
      ></ResultContent>
    </div>
  );
}

export default Content;
