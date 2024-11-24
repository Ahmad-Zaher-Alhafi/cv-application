import "/src/styles/result-section/ulSection.css";

function UlSection({ title, contents }) {
  return (
    <div className="ulSection">
      <div className="ulSectionTitle">{title}</div>

      <ul className="ulSectionContent">
        {contents.map((content) => {
          return (
            <li key={content.key}>
              <pre>{content.value}</pre>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UlSection;
