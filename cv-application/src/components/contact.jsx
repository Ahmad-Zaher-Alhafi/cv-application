import LabeledInput from "./labeledInput";

function Contact() {
  return (
    <div className="contact">
      <div className="title">Contact</div>
      <LabeledInput label={"Address:"}/>
      <LabeledInput label={"Phone:"} inputType="tel"/>
      <LabeledInput label={"Email:"} inputType="email"/>
    </div>
  );
}

export default Contact;
