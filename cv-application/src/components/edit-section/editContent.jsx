import EditPersonalSection from "./editPersonalSection";
import EditContactSection from "./editContactSection";

function EditContent({
  setFullName,
  setImgUrl,
  setAddress,
  setPhoneNumber,
  setEmail,
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

      {/* 
    languages section
    links section
    education section
    summary section
    skills section
    experience section
     */}
    </div>
  );
}

export default EditContent;
