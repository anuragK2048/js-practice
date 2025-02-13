import data from "../data/folderData";
import Folder from "./Folder";

function MainComponent() {
  console.log(data.isFolder);
  return (
    <div>
      <Folder data={data} />
    </div>
  );
}

export default MainComponent;
