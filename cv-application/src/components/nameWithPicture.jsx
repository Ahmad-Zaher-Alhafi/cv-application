function NameWithPicture({ name, picUrl }) {
  return (
    <div className="nameWithPicture">
      <div className="name">{name}</div>
      <img src={picUrl} alt="cv picture" />
    </div>
  );
}

export default NameWithPicture;
