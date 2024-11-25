import "/src/styles/result-section/ulSection.css";

function UlSection({ title, contents, ulClassName = "ulSectionContent" }) {
  return (
    <div className="ulSection">
      <div className="ulSectionTitle">{title}</div>

      <ul className={ulClassName}>
        {contents.map((content) => {
          return (
            <li key={content.key}>
              <pre className="textContent">{content.value}</pre>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UlSection;
