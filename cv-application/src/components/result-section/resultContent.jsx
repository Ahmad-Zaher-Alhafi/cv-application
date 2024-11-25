import "/src/styles/result-section/resultContent.css";
import PersonalSection from "./personalSection";
import ContactSection from "./contactSection";
import LanguagesSection from "./languagesSeciton";
import LinksSection from "./linksSeciton";
import UlSection from "./ulSection";
import SummarySection from "./summarySection";

function ResultContent({
  name,
  imgUrl,
  address,
  phoneNumber,
  email,
  languages,
  links,
  educations,
  summary,
  skills,
  experiences,
}) {
  return (
    <div className="resultSection">
      <div className="leftSection">
        <div className="leftSectionHeader"></div>

        <div className="leftSectionContent">
          <PersonalSection name={name} imgUrl={imgUrl}></PersonalSection>
          <ContactSection
            address={address}
            phoneNumber={phoneNumber}
            email={email}
          ></ContactSection>
          <LanguagesSection languages={languages}></LanguagesSection>
          <LinksSection links={links}></LinksSection>
          <UlSection title={"Education"} contents={educations}></UlSection>
        </div>
      </div>
      <div className="rightSection">
        <div className="rightSectionContent">
          <SummarySection summary={summary}></SummarySection>
          <UlSection title={"Skills"} contents={skills} ulClassName="ulSkillsContent"></UlSection>
          <UlSection title={"Experince"} contents={experiences}></UlSection>
        </div>

        <div className="rightSectionHeader"></div>
      </div>
    </div>
  );
}

export default ResultContent;
