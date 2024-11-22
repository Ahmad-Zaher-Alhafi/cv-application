import EditPersonalSection from "./editPersonalSection";

function EditContent({ setFullName, setImgUrl }) {
  return (
    <div className="editSection">
      <EditPersonalSection
        onNameChanged={setFullName}
        onImgChanged={setImgUrl}
      ></EditPersonalSection>
      {/* 
    contact section
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
