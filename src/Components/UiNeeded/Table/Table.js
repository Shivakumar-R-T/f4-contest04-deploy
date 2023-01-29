import React,{useState} from "react";

import "./Table.css";

const Table = ({ tableData, apiData }) => {
    
  return (
    <div className="table-container">
      <div className="table-body">
        {/* {console.log("Table",apiData[0]["id"])} */}
        <table border='' >
          <tr>
            {tableData?.map((tableRow) => {
              return <th>{tableRow[0]}</th>;
            })}
          </tr>

          {tableData?.map((tableRow) => {
            return (
              <td>
                {apiData?.map((indivData) => {
                  return <tr>{tableRow[1](indivData)}</tr>;
                })}
              </td>
            );
          })}
         
        </table>
      </div>
      
    </div>
  );
};

export default Table;