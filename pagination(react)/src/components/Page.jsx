function Page({ displayData }) {
  return (
    <div>
      {displayData.map((val, i) => {
        return (
          <div key={i} className="item">
            <div className="item-id">{val.id}</div>
            <div className="item-title">{val.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Page;
