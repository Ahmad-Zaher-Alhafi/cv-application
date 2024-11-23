function LanguagesSection({ languages }) {
  return (
    <div className="resultLanguagesSection">
      <div className="resultSectiontitle">Languages</div>
      {
        <ol className="languagesList">
          {languages.map(language => {
            return (
              <div className="languageSection" key={language.key}>
                <li className="language">
                  {language.name + ": " + language.fluency}
                </li>
              </div>
            );
          })}
        </ol>
      }
    </div>
  );
}

export default LanguagesSection;
