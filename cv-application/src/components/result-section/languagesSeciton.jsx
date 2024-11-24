import "/src/styles/result-section/languagesSection.css";

function LanguagesSection({ languages }) {
  return (
    <div className="resultLanguagesSection">
      <div className="resultLanguageSectionTitle">Languages</div>

      <ol className="languagesList">
        {languages.map((language) => {
          return (
            <li className="language" key={language.key}>
              {language.name + ": " + language.fluency}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default LanguagesSection;
