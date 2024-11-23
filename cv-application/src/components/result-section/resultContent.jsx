import "/src/styles/content.css";
import PersonalSection from "./personalSection";
import ContactSection from "./contactSection";
import LanguagesSection from "./languagesSeciton";

function ResultContent({
  name,
  imgUrl,
  address,
  phoneNumber,
  email,
  languages,
}) {
  return (
    <div className="resultSection">
      <div className="leftSection">
        <PersonalSection name={name} imgUrl={imgUrl}></PersonalSection>

        <ContactSection
          address={address}
          phoneNumber={phoneNumber}
          email={email}
        ></ContactSection>

        <LanguagesSection languages={languages}></LanguagesSection>
      </div>
      <div className="rightSection">
        <h1>Right section</h1>
      </div>
    </div>
  );
}

export default ResultContent;
