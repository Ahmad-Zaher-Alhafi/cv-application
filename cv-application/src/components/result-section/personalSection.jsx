function PersonalSection({ name, imgUrl }) {
  return (
    <div className="personalSection">
      <div className="name">{name}</div>
      <img src={imgUrl} alt="cv picture" />
    </div>
  );
}

export default PersonalSection;
