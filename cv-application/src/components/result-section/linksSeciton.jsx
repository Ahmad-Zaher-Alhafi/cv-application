function LinksSection({ links }) {
  return (
    <div className="resultLinksSection">
      <div className="resultSectionTitle">Links</div>
      {
        <ul className="LinksList">
          {links.map((link) => {
            return (
              <div className="LinkSection" key={link.key}>
                <li className="Link">
                  <a href={link.url}>{link.name}</a>
                </li>
              </div>
            );
          })}
        </ul>
      }
    </div>
  );
}

export default LinksSection;
