import "/src/styles/content.css";
import PersonalSection from "./personalSection";
import ResultContact from "./resultContact";

function ResultContent({ name, imgUrl, address, phoneNumber, email }) {
  return (
    <div className="resultSection">
      <div className="leftSection">
        <PersonalSection name={name} imgUrl={imgUrl}></PersonalSection>

        <ResultContact
          address={address}
          phoneNumber={phoneNumber}
          email={email}
        ></ResultContact>
      </div>
      <div className="rightSection">
        <h1>Right section</h1>
      </div>
    </div>
  );
}

export default ResultContent;
