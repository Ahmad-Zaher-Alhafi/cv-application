import { useState } from "react";
import "/src/styles/content.css";
import EditContent from "./edit-section/editContent";
import ResultContent from "./result-section/resultContent";

function Content() {
  const [fullName, setFullName] = useState("Your name");
  const [imgUrl, setImgUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAk0_WV-nb1sB6OuvVJ1gdmpxWzxU5GfGjng&s");

  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [languages, setLanguages] = useState([]);

  const [links, setLinks] = useState([]);

  const [educations, setEducations] = useState([]);

  const [summary, setSummary] = useState("");

  const [skills, setSkills] = useState([]);

  const [experiences, setExperiences] = useState([]);

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
        links={links}
        setLinks={setLinks}
        educations={educations}
        setEducations={setEducations}
        summary={summary}
        setSummary={setSummary}
        skills={skills}
        setSkills={setSkills}
        experiences={experiences}
        setExperiences={setExperiences}
      ></EditContent>

      <div className="splitter"></div>

      <ResultContent
        name={fullName}
        imgUrl={imgUrl}
        address={address}
        phoneNumber={phoneNumber}
        email={email}
        languages={languages}
        links={links}
        educations={educations}
        summary={summary}
        skills={skills}
        experiences={experiences}
      ></ResultContent>
    </div>
  );
}

export default Content;
