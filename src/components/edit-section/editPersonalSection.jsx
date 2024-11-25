import LabeledInput from "./labeledInput";
import "/src/styles/edit-section/editPersonalSection.css";

function EditPersonalSection({ onNameChanged, onImgChanged }) {
  return (
    <div className="editPersonalSection">
      <div className="editPersonalSectionTitle">Personal info</div>
      <LabeledInput
        label={"Full name: "}
        placeholder={"your full name"}
        onValueChange={onNameChanged}
      ></LabeledInput>
      <LabeledInput
        label={"Picture link: "}
        placeholder={"https:/example.jpg"}
        onValueChange={onImgChanged}
      ></LabeledInput>
    </div>
  );
}

export default EditPersonalSection;
