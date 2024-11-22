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
      <div className="rightSection">
        <SummarySection summary={summary}></SummarySection>

        <UlSection title={"Skills"} contents={skills}></UlSection>

        <UlSection title={"Experince"} contents={experiences}></UlSection>
      </div>
    </div>
  );
}

export default ResultContent;
