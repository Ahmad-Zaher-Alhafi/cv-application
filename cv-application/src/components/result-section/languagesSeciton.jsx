function LanguagesSection({ languages }) {
  return (
    <div className="resultLanguagesSection">
      <div className="resultSectiontitle">Languages</div>
      {
        <ol className="languagesList">
          {languages.map((language, index) => {
            return (
              <div className="languageSection" key={index}>
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
