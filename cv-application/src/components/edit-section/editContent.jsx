import EditPersonalSection from "./editPersonalSection";
import EditContactSection from "./editContactSection";
import EditLanguagesSection from "./editLanguagesSection";
import EditLinksSection from "./editLinksSection";
import EditUlSection from "./editUlSection";
import EditSummarySection from "./editSummarySection";
import "/src/styles/edit-section/editContent.css";

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
  skills,
  setSkills,
  experiences,
  setExperiences,
}) {
  return (
    <div className="editSection">
      <EditPersonalSection
        onNameChanged={setFullName}
        onImgChanged={setImgUrl}
      ></EditPersonalSection>

      <EditSummarySection
        summary={summary}
        setSummary={setSummary}
      ></EditSummarySection>

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
        title={"Add education: "}
        inputLabel={"Degree: "}
        inputPlaceholder={"e.g Bachelor of Computer engineering"}
      ></EditUlSection>

      <EditUlSection
        values={skills}
        setValues={setSkills}
        title={"Add skills: "}
        inputLabel={"Skill: "}
        inputPlaceholder={"e.g React"}
      ></EditUlSection>

      <EditUlSection
        values={experiences}
        setValues={setExperiences}
        title={"Add experiences: "}
        inputLabel={"Experience: "}
        inputPlaceholder={"e.g I haev 5 years experience in game development"}
        useTextAreasInsteadOfInputs={true}
      ></EditUlSection>

      {/* 
   
    experience section
     */}
    </div>
  );
}

export default EditContent;
