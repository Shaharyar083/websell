import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../My Orders/myOrders.scss";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  { label: "ID" },
  { label: "URL", align: "start" },
  { label: "Price", align: "start" },
  { label: "Delete", align: "right" },
  { label: "Offers", align: "right" },
];

const columns1 = [
  { label: "ID" },
  { label: "Email", align: "start" },
  { label: "Price", align: "start" },
  { label: "Accept", align: "right" },
];

const rows = [
  { title: "hello world", date: "12/12/2021", edit: "edit", delete: "delete" },
  { title: "hello world", date: "12/12/2021", edit: "edit", delete: "delete" },
];

const BuyOrders = () => {
  let sellerEmail = JSON.parse(localStorage.getItem("login"));

  const [state, setState] = useState([]);
  const [offer, setOffer] = useState([]);
  const [webURL, setUrl] = useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const DeleteAdd = async (id) => {
    console.log("post id ======>", id);
    try {
      let response = await axios.post("http://localhost:4000/post/delete", {
        id: id,
      });

      toast.success("Post delete successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      console.log("err=====>", err);
      toast.error("Server error and post not deleted", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const AcceptOffer = async (userEmail, price) => {
    console.log(userEmail);
    try {
      let response = await axios.post("http://localhost:4000/post/adaccept", {
        userEmail,
        price,
        url: webURL,
        type: "Accept",
      });

      toast.success("Accept message send to buyer", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      console.log("Accept Offer ===========>", response);
    } catch (err) {
      console.log("err=====>", err);
      toast.error("Server error and msg not send to buyer", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const callApi = async () => {
    try {
      let login = JSON.parse(localStorage.getItem("login"));
      console.log("login===========>", login);
      let response = await axios.post("http://localhost:4000/post/my", {
        id: login._id,
      });

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
      <div className="myorders admin-orders">
        <div className="text-main">My Orders:</div>

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
                          style={{ width: 20 }}
                        >
                          {index}
                        </TableCell>
                        <TableCell style={{ color: "#6754e2" }} align={"start"}>
                          {row.url}
                        </TableCell>

                        <TableCell style={{ width: 200 }} align={"start"}>
                          $ {row.price}
                        </TableCell>

                        <TableCell style={{ width: 100 }} align={"right"}>
                          <div
                            style={{
                              padding: "5px",
                              background: "rgba(255, 0, 0, 0.6)",
                              width: "max-content",
                              marginLeft: "auto",
                              color: "#fdfdfd",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              DeleteAdd(row._id);
                            }}
                          >
                            Delete
                          </div>
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
                              setOffer(row.bid);
                              setUrl(row.url);
                            }}
                          >
                            View Offer
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

      <div className="myorders admin-orders">
        <div className="text-main">Offer:</div>

        <div className="published-table">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns1.map((column, index) => (
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
                  {offer
                    ?.sort((a, b) => {
                      return b.ammount - a.ammount;
                    })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow key={index}>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ width: 20 }}
                        >
                          {index}
                        </TableCell>
                        <TableCell style={{ color: "#6754e2" }} align={"start"}>
                          {row.user.email}
                        </TableCell>

                        <TableCell style={{ width: 200 }} align={"start"}>
                          $ {row.ammount}
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
                              AcceptOffer(row.user.email, row.ammount);
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
      <ToastContainer />
    </>
  );
};

export default BuyOrders;
