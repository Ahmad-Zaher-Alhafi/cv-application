function ContactSection({ address, phoneNumber, email }) {
  return (
    <div className="resultContactSection">
      <div className="resultSectionTitle">Contact</div>
      <div className="addressSection">
        <div className="addressTitle">Address:</div>
        <div className="address">{address}</div>
      </div>

      <div className="phoneNumberSection">
        <div className="phoneNumberTitle">Phone:</div>
        <div className="phoneNumber">{phoneNumber}</div>
      </div>

      <div className="emailSection">
        <div className="emailTitle">Email:</div>
        <div className="email">{email}</div>
      </div>
    </div>
  );
}

export default ContactSection;
