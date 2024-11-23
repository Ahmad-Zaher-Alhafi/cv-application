import LabeledInput from "./labeledInput";

function EditPersonalSection({ onNameChanged, onImgChanged }) {
  return (
    <div className="editPersonalSection">
      <div className="editSectionTitle">Personal info</div>
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
