import LabeledInput from "../result-section/labeledInput";

function EditPersonalSection({ onNameChanged, onImgChanged }) {
  return (
    <div className="editPersonalSection">
      <div className="editPersonalSectionHeader">Personal info</div>
      <LabeledInput
        label={"Full name: "}
        placeholder={"Ahmad Zaher Alhafi"}
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
