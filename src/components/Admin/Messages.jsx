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

// material
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
  outline: "none",
  fontSize: "16px",
  fontWeight: 500,
};

const columns = [
  { label: "ID" },
  { label: "Name", align: "start" },
  { label: "Email", align: "start" },
  { label: "Date", align: "right" },
  { label: "Message", align: "right" },
];

const rows = [
  { title: "hello world", date: "12/12/2021", edit: "edit", delete: "delete" },

  { title: "hello world", date: "12/12/2021", edit: "edit", delete: "delete" },
];

const Messages = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [msg, setMsg] = useState("");

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
      let response = await axios.get("http://localhost:4000/message/get-msg");
      console.log(
        "admin messages component axios result===========>",
        response.data.data
      );
      setState(response.data.data);
    } catch (err) {
      console.log("err=====>", err);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div className="sell-request">
        <div className="text-main">All Messages</div>

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
                    ?.sort((a, b) => {
                      let dateA = new Date(a.time);
                      let dateB = new Date(b.time);
                      return dateB - dateA;
                    })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow key={index}>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ width: 20, color: "#6754e2" }}
                          align={"start"}
                        >
                          {index}
                        </TableCell>
                        <TableCell style={{ width: 200 }} align={"start"}>
                          {row.name}
                        </TableCell>
                        <TableCell style={{ width: 300 }} align={"start"}>
                          {row.email}
                        </TableCell>

                        <TableCell style={{ width: 300 }} align={"right"}>
                          {new Date(row.time).toString()}
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
                            onClick={() => {
                              handleOpen();
                              setMsg(row.message);
                            }}
                          >
                            View
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

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className="detail-modal"
      >
        <Fade in={open}>
          <Box sx={style}>
            <div
              style={{ fontSize: "18px", fontWeight: "bold", color: "#6754e2" }}
            >
              Message
            </div>
            <div
              style={{
                marginTop: "10px",
                fontSize: "16px",
                fontWeight: "500",
                color: "#2d2d2d",
              }}
            >
              {msg}
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Messages;
