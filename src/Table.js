export default ({ headers, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataItem, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {dataItem.map((di, cellIndex) => (
                <td key={cellIndex}>{di}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
