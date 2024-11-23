import "/src/styles/content.css";
import PersonalSection from "./personalSection";
import ContactSection from "./contactSection";
import LanguagesSection from "./languagesSeciton";
import LinksSection from "./linksSeciton";

function ResultContent({
  name,
  imgUrl,
  address,
  phoneNumber,
  email,
  languages,
  links,
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

        <LinksSection links={links}></LinksSection>
      </div>
      <div className="rightSection">
        <h1>Right section</h1>
      </div>
    </div>
  );
}

export default ResultContent;
