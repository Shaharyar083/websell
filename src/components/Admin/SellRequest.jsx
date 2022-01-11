import React, { useState, useEffect } from "react";
import axios from "axios";

// Material
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { label: "URL" },
  { label: "Trend", align: "right" },
  { label: "Monetization", align: "right" },
  { label: "Income", align: "right" },
  { label: "Price", align: "right" },

  { label: "Accept", align: "right" },
];

const rows = [
  { title: "hello world", date: "12/12/2021", edit: "edit", delete: "delete" },

  { title: "hello world", date: "12/12/2021", edit: "edit", delete: "delete" },
];

const SellRequest = () => {
  const [state, setState] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const callApi = async () => {
    try {
      let response = await axios.get("http://localhost:4000/post/get-admin");
      console.log("sell request result===========>", response.data.data);
      setState(response.data.data);
    } catch (err) {
      console.log("err=====>", err);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="sell-request">
      <div className="text-main">Sell Request</div>

      <div className="published-table">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      align={column.align}
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {state
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ width: 300, color: "#6754e2" }}
                        align={"start"}
                      >
                        {row.url}
                      </TableCell>
                      <TableCell style={{ width: 100 }} align={"right"}>
                        {row.trend}
                      </TableCell>
                      <TableCell style={{ width: 100 }} align={"right"}>
                        {row.source[0]}
                      </TableCell>

                      <TableCell style={{ width: 100 }} align={"right"}>
                        {row.income}
                      </TableCell>

                      <TableCell style={{ width: 100 }} align={"right"}>
                        {row.price}
                      </TableCell>

                      <TableCell style={{ width: 100 }} align={"right"}>
                        <div
                          style={{
                            padding: "5px",
                            background: "#2dc799",
                            width: "max-content",
                            marginLeft: "auto",
                            color: "#fdfdfd",
                            cursor: "pointer",
                          }}
                        >
                          Accept
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default SellRequest;
