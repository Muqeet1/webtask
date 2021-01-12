import React from "react";
import { DataGrid } from "@material-ui/data-grid";



const Table = ({ data }) => {


  const columns = [
    { field: "jobname", headerName: "Job Name", width: 230 },
    { field: "id", headerName: "Job ID", width: 130 },
    { field: "customer", headerName: "Customer", width: 300 },
    { field: "location", headerName: "Location", width: 120 },
    { field: "dateStart", headerName: "Starting Date", width: 200 },
    { field: "status", headerName: "status", width: 150 },
  ];
  

  return (
    <div style={{ height: 1000, width: "100%" }}>
      {data ? <DataGrid onCellClick={(cell)=> console.log(cell)} rows={data} columns={columns} pageSize={17} /> : null}
    </div>
  );
};

export default Table;