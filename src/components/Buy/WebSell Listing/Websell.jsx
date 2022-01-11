import React, { useState, useEffect } from "react";
import "./websell.scss";
import axios from "axios";

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
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
  outline: "none",
};

const Websell = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [detail, setDetail] = useState();
  console.log("detail", detail);

  const [res, setRes] = useState([]);

  const callApi = async () => {
    try {
      let response = await axios.get("http://localhost:4000/post/get-websell");
      console.log("websell result===========>", response.data.data);
      setRes(response.data.data);
    } catch (err) {
      console.log("err=====>", err);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div className="websell">
        <div className="title-main">WebSell Listing</div>
        {res?.map((data, index) => {
          return (
            <div className="card" key={index}>
              <div className="left">
                <img src={data.img} alt="" />
              </div>

              <div className="right">
                <div className="url">{data.url} </div>

                <div className="price">
                  <span>Price: $</span>
                  <span>{data.price}</span>
                </div>

                <div className="wrap">
                  <div className="text">
                    <div className="title">Niche</div>
                    <div className="sub">{data.niche}</div>
                  </div>

                  <div className="text">
                    <div className="title">$/mo</div>
                    <div className="sub">
                      $<span>{Math.round(data?.income / 6)}</span>
                    </div>
                  </div>

                  <div className="text">
                    <div className="title">Source</div>
                    <div className="sub">{data.source[0]}</div>
                  </div>
                </div>

                <div
                  className="btn-offer"
                  onClick={() => {
                    handleOpen();
                    setDetail(data);
                  }}
                >
                  Detail
                </div>
              </div>
            </div>
          );
        })}
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
            <div className="title-main">Website Detail</div>

            <div className="detail_wrap">
              <div className="image">
                <img src={detail?.img} alt="" />
              </div>

              <div className="text_wrap">
                <div className="title">Website Url:</div>

                <div className="para">{detail?.url}</div>
              </div>

              <div className="text_wrap">
                <div className="title">Website Niche:</div>

                <div className="para">{detail?.niche}</div>
              </div>

              <div className="text_wrap">
                <div className="title">Website Income Source:</div>

                <div className="para">{detail?.source[0]}</div>
              </div>

              <div className="text_wrap">
                <div className="title">Website Trend:</div>

                <div className="inner_image">
                  <img
                    src={
                      detail?.trend === "inc"
                        ? "https://www.motioninvest.com/wp-content/uploads/2021/07/increasing-1.png"
                        : detail?.trend === "dec"
                        ? "https://www.motioninvest.com/wp-content/uploads/2021/07/decreasing-1.png"
                        : detail?.trend === "flat"
                        ? "https://www.motioninvest.com/wp-content/uploads/2021/07/flat-1.png"
                        : detail?.trend === "hill"
                        ? "https://www.motioninvest.com/wp-content/uploads/2021/07/hilly-1.png"
                        : ""
                    }
                    alt=""
                  />
                </div>
              </div>

              <div className="text_wrap">
                <div className="title">Website Income Generate:</div>

                <div className="para">$ {Math.round(detail?.income / 6)}</div>
              </div>

              <div className="text_wrap">
                <div className="title">Website Selling Price:</div>

                <div className="para">$ {detail?.price}</div>
              </div>

              <div className="buy">Buy</div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Websell;
