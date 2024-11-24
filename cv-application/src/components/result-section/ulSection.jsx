function UlSection({ title, contents }) {
  return (
    <div className="ulSection">
      <div className="ulSectionTitle">{title}</div>

      <div className="ulSectionContent">
        <ul className="ulSection">
          {contents.map((content) => {
            return <li key={content.key}>{content.value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default UlSection;
