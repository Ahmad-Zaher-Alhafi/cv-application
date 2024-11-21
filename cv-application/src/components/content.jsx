import "../styles/content.css";
import NameWithPicture from "./nameWithPicture";
import Contact from "./contact";

function Content() {
  return (
    <>
      <div className="content">
        <div className="leftSection">
          <NameWithPicture
            name={"Ahmad Zaher Alhafi"}
            picUrl={"./src/assets/CV photo.jpg"}
          ></NameWithPicture>

          <Contact></Contact>
        </div>

        <div className="rightSection">
          <h1>Hello wolrd</h1>
        </div>
      </div>
    </>
  );
}

export default Content;
