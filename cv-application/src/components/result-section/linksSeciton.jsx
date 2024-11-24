import "/src/styles/result-section/linksSection.css";

function LinksSection({ links }) {
  return (
    <div className="resultLinksSection">
      <div className="resultLinksSectionTitle">Links</div>
      {
        <ul className="LinksList">
          {links.map((link) => {
            return (
              <li className="link" key={link.key}>
                <a href={link.url}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}

export default LinksSection;
