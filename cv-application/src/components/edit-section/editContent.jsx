import EditPersonalSection from "./editPersonalSection";
import EditContactSection from "./editContactSection";
import EditLanguagesSection from "./editLanguagesSection";
import EditLinksSection from "./editLinksSection";

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
