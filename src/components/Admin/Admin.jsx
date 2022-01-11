import React from "react";
import { useHistory } from "react-router-dom";
import "./admin.scss";

import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import PostAdd from "./PostAdd";
import SellRequest from "./SellRequest";
import Messages from "./Messages";

const Admin = () => {
  const history = useHistory();

  const [show, setShow] = React.useState("1");

  return (
    <>
      <div className="admin">
        <div className="sidebar">
          <div>
            <div className="logo">
              <img
                src="https://www.motioninvest.com/wp-content/uploads/2021/10/MIlogofixedd1.png"
                alt=""
              />
            </div>
          </div>

          <div className="main">
            <div
              className="menu"
              onClick={() => {
                setShow("1");
              }}
            >
              <div className={show === "1" ? "back" : "display-none"}>
                <div className="back-inner"></div>
              </div>

              <BsFillFileEarmarkPostFill className="icon" />
              <span>Post Add</span>
            </div>

            <div
              className="menu"
              onClick={() => {
                setShow("2");
              }}
            >
              <div className={show === "2" ? "back" : "display-none"}>
                <div className="back-inner"></div>
              </div>

              <MdOutlineSell className="icon" />
              <span>Sell Request</span>
            </div>

            <div
              className="menu"
              onClick={() => {
                setShow("4");
              }}
            >
              <div className={show === "4" ? "back" : "display-none"}>
                <div className="back-inner"></div>
              </div>

              <AiOutlineMessage className="icon" />
              <span>Messages</span>
            </div>

            <div
              className="menu"
              onClick={() => {
                localStorage.removeItem("login");

                setTimeout(() => {
                  history.push("/login");
                }, 1000);
              }}
            >
              <BiLogOut className="icon" />
              <span>Logout</span>
            </div>
          </div>
        </div>

        <div className="right">
          {show === "1" ? (
            <PostAdd />
          ) : show === "2" ? (
            <SellRequest />
          ) : show === "3" ? (
            <SellRequest />
          ) : show === "4" ? (
            <Messages />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Admin;
