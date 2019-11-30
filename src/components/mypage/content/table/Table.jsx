import React from "react";

const tableHeader = ["emp", "correct"];
const tableData = [
  {
    emp: "someone",
    guest: 10
  },
  {
    emp: "anyone",
    guest: 20
  }
];

const renderTableHeader = () => {
  return tableHeader.map(header => {
    return <th>{header}</th>;
  });
};

const renderTableData = () => {
  return tableData.map(data => {
    return (
      <tr>
        <td>
          <h4 className="ui image header">
            <img
              src="/images/avatar2/small/mark.png"
              className="ui mini rounded image"
            />
            <div className="content">{data.emp}</div>
          </h4>
        </td>
        <td>{data.guest}</td>
      </tr>
    );
  });
};

const Table = () => {
  return (
    <table className="ui very basic collapsing celled table">
      <thead>
        <tr>{renderTableHeader()}</tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
};

export default Table;
