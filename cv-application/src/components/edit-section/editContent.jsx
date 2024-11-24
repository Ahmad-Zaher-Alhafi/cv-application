import EditPersonalSection from "./editPersonalSection";
import EditContactSection from "./editContactSection";
import EditLanguagesSection from "./editLanguagesSection";
import EditLinksSection from "./editLinksSection";
import EditUlSection from "./editUlSection";
import EditSummarySection from "./editSummarySection";

function EditContent({
  setFullName,
  setImgUrl,
  setAddress,
  setPhoneNumber,
  setEmail,
  languages,
  setLanguages,
  links,
  setLinks,
  educations,
  setEducations,
  summary,
  setSummary,
}) {
  return (
    <div className="editSection">
      <EditPersonalSection
        onNameChanged={setFullName}
        onImgChanged={setImgUrl}
      ></EditPersonalSection>

      <EditContactSection
        setAddress={setAddress}
        setPhoneNumber={setPhoneNumber}
        setEmail={setEmail}
      ></EditContactSection>

      <EditLanguagesSection
        languages={languages}
        setLanguages={setLanguages}
      ></EditLanguagesSection>

      <EditLinksSection links={links} setLinks={setLinks}></EditLinksSection>

      <EditUlSection
        values={educations}
        setValues={setEducations}
        title={"Add more education info: "}
      ></EditUlSection>

      <EditSummarySection
        summary={summary}
        setSummary={setSummary}
      ></EditSummarySection>

      {/* 
    education section
    summary section
    skills section
    experience section
     */}
    </div>
  );
}

export default EditContent;
