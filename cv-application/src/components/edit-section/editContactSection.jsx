import LabeledInput from "./labeledInput";
import "/src/styles/edit-section/editContactSection.css";

function EditContactSection({ setAddress, setPhoneNumber, setEmail }) {
  return (
    <div className="editContactSection">
      <div className="editSectionTitle">Contact</div>
      <LabeledInput
        label={"Address: "}
        placeholder={"City, Country"}
        onValueChange={setAddress}
      ></LabeledInput>

      <LabeledInput
        label={"Phone: "}
        inputType="tel"
        placeholder={"+xx-xxx-xxx-xxx"}
        onValueChange={setPhoneNumber}
      ></LabeledInput>

      <LabeledInput
        label={"Email: "}
        inputType="email"
        placeholder={"example@hotmail.com"}
        onValueChange={setEmail}
      ></LabeledInput>
    </div>
  );
}

export default EditContactSection;
