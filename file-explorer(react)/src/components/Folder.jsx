import { use, useEffect, useRef, useState } from "react";

function Folder({ data }) {
  const [isClicked, setIsClicked] = useState(false);
  const [addingFolder, setAddingFolder] = useState(false);
  const [itemName, setItemName] = useState("");
  const [addingFile, setAddingFile] = useState(false);

  function handleClick() {
    setIsClicked((cur) => !cur);
  }
  function handleFolderAdd() {
    data.items.push();
  }
  function handleFileAdd() {}
  function handleFolder() {
    setAddingFolder((cur) => !cur);
  }
  function handleFile() {
    setAddingFile((cur) => !cur);
  }

  // handling window click when file or folder added
  const newItemRef = useRef();
  function handleWindowClick(e) {
    console.log("clicked");
    if (newItemRef.current && !newItemRef.current.contains(e.target)) {
      setAddingFolder(false);
      if (addingFolder) handleFolderAdd();
      if (addingFile) handleFileAdd();
    }
  }
  useEffect(() => {
    if (addingFile || addingFolder) {
      console.log("hi");
      document.addEventListener("click", handleWindowClick, true);
    }
    return () => document.removeEventListener("click", handleWindowClick, true);
  }, [addingFile, addingFolder]);
  return (
    <>
      {data.isFolder ? (
        <div>
          <div onClick={handleClick}>
            <span>📁</span>
            <span>{data.name}</span>
            <div style={{ display: "inline", marginLeft: "20px" }}>
              <button onClick={handleFolder}>+ Folder</button>
              <button onClick={handleFile}>+ File</button>
            </div>
          </div>
          {isClicked && (
            <div className="folder-children">
              <div className="folder-children">
                {addingFolder && (
                  <div className="addFolderInput" ref={newItemRef}>
                    <span>📁</span>
                    <input
                      type="text"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                    />
                  </div>
                )}
                {addingFile && (
                  <div className="addFileInput" ref={newItemRef}>
                    <span>🗄️</span>
                    <input
                      type="text"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                    />
                  </div>
                )}
                {data.items.map((item, i) => (
                  <Folder key={i} data={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div onClick={handleClick}>
          <span>🗄️</span>
          <span>{data.name}</span>
          {isClicked && <span>File opened</span>}
        </div>
      )}
    </>
  );
}

export default Folder;
