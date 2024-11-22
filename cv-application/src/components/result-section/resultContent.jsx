import "/src/styles/content.css";
import PersonalSection from "./personalSection";

function ResultContent({ name, imgUrl }) {
  return (
    <div className="resultSection">
      <div className="leftSection">
        <PersonalSection name={name} imgUrl={imgUrl}></PersonalSection>
      </div>
      <div className="rightSection">
        <h1>Hello wolrd</h1>
      </div>
    </div>
  );
}

export default ResultContent;
