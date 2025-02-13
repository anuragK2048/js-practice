import { useEffect, useState } from "react";
import Page from "./Page";

function MainPage() {
  const [elementPerPage, setElementPerPage] = useState(10);
  const [selectedPage, setSelectedPage] = useState(0);
  const [data, setData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState("");
  const [selectedData, setSelectedData] = useState(null);
  const [allPages, setAllPages] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://dummyjson.com/products?limit=500");
        const receivedData = await res.json();
        setData(receivedData);
        setLoadingData(false);
      } catch (err) {
        setLoadingData(false);
        setError(String(err));
        console.error(err);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      //set selectedData
      //   console.log(data);
      const totalPages = Math.ceil(data.total / elementPerPage);
      //   console.log(totalPages);
      const allPagesArr = [...Array(totalPages).keys()];
      // for (let i = 0; i < totalPages; i++) {
      //   allPagesArr.push(i);
      // }
      setAllPages(allPagesArr);
      const overLimiting = !(
        elementPerPage * selectedPage <=
        data.total - elementPerPage
      );
      const from = !overLimiting
        ? elementPerPage * selectedPage
        : data.total - elementPerPage;
      const to = from + elementPerPage - 1;
      console.log(elementPerPage);
      console.log(from);
      if (overLimiting) setSelectedPage(totalPages - 1);
      setSelectedData(data.products.filter((val, i) => i >= from && i <= to));
    }
  }, [data, elementPerPage, selectedPage]);

  return (
    <div className="main-container">
      <div className="element-p-page">
        <select
          value={elementPerPage}
          onChange={(e) => setElementPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <span> per page</span>
      </div>
      {loadingData && <div>Loading Data </div>}
      {selectedData && (
        <div>
          <Page displayData={selectedData} />
        </div>
      )}
      {allPages && (
        <div className="pages">
          {console.log("selectedPage", selectedPage)}
          {allPages.map((val, i) => {
            return (
              <div key={i}>
                <button
                  className={`${selectedPage == i ? "selectedPage" : ""}`}
                  onClick={() => {
                    setSelectedPage(i);
                  }}
                >
                  {i + 1}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MainPage;
