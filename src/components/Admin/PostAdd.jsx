import React, { useEffect, useState } from "react";

import google from "../../assets/google.png";
import { AiOutlineCheck } from "react-icons/ai";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./admin.scss";

const PostAdd = () => {
  let userId = JSON.parse(localStorage.getItem("login"));

  console.log("userId", userId);
  const [currentImage, setCurrentImage] = useState("Choose image");
  const [imagePreview, setImagePreview] = useState("");

  const [selling, setSell] = useState("websell");
  const [data, setData] = useState({
    url: "",
    niche: "",
    income: "",
    price: "",
    image: "",
  });

  const [monetization, setMone] = useState([]);

  const [trend, setTrend] = useState("");

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const fileHandle = (e) => {
    if (e.target.files.length !== 0) {
      setCurrentImage(e.target.files[0].name);
      setData({
        ...data,
        [e.target.name]: e.target.files[0],
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // console.log("data", data);
  // console.log("monetization", monetization);
  // console.log("trend", trend);
  // console.log("selling", selling);

  const reset = () => {
    setCurrentImage("Choose image");
    setImagePreview("");
    setData({ url: "", niche: "", income: "", price: "", image: "" });
    setMone([]);
    setTrend("");
  };

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user", userId._id);
    formData.append("url", data.url);
    formData.append("niche", data.niche);
    formData.append("source", monetization);
    formData.append("trend", trend);
    formData.append("income", data.income);
    formData.append("price", data.price);
    formData.append("file", data.image);
    formData.append("type", selling);

    try {
      let response = await axios.post(
        "http://localhost:4000/post/create",
        // "https://ahsan-fyp-backend.herokuapp.com/post/create",

        formData
      );

      console.log("sss", response);

      toast.success("Your order is placed successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      reset();
    } catch (err) {
      toast.error("Your order is not placed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className="sellOrder">
        <div className="text-main">Post Add</div>
        <div className="valuate-form">
          <div className="step1">
            <div className="title">WHAT IS YOUR URL?</div>

            <div className="para">Let us check out your website!</div>

            <input
              placeholder="https://www.yourURL.com"
              name="url"
              type="text"
              value={data.url}
              onChange={handleInput}
            />
          </div>

          <div className="step1">
            <div className="title">Website Niche</div>

            <div className="para">What is your website topic?</div>

            <input
              placeholder="eg: Technology"
              name="niche"
              type="text"
              value={data.niche}
              onChange={handleInput}
            />
          </div>

          <div className="step4">
            <div className="title">MONETIZATION METHOD</div>

            <div className="para">How is your site earning income?</div>

            <div className="mone">
              <div
                className="checkimg"
                onClick={() => {
                  monetization.includes("amazon")
                    ? setMone((preVal) => {
                        return monetization.filter((data) => data != "amazon");
                      })
                    : setMone((preVal) => {
                        return [...preVal, "amazon"];
                      });
                }}
              >
                <img
                  src="https://www.motioninvest.com/wp-content/uploads/2021/06/Icon_AmazonAssociates.png"
                  alt=""
                />
                {monetization.includes("amazon") && (
                  <AiOutlineCheck className="icon" />
                )}
              </div>

              <div
                className="checkimg"
                onClick={() => {
                  monetization.includes("google")
                    ? setMone((preVal) => {
                        return monetization.filter((data) => data != "google");
                      })
                    : setMone((preVal) => {
                        return [...preVal, "google"];
                      });
                }}
              >
                <img src={google} alt="" />
                {monetization.includes("google") && (
                  <AiOutlineCheck className="icon" />
                )}
              </div>
            </div>
          </div>

          <div className="step5">
            <div className="title">Trend</div>

            <div className="para">
              How has your site been trending over the last 6 months?
            </div>

            <div className="trend">
              <div
                className="checkimg"
                onClick={() => {
                  setTrend("inc");
                }}
              >
                <img
                  src="https://www.motioninvest.com/wp-content/uploads/2021/07/increasing-1.png"
                  alt=""
                />
                {trend === "inc" && <AiOutlineCheck className="icon" />}
              </div>

              <div
                className="checkimg"
                onClick={() => {
                  setTrend("dec");
                }}
              >
                <img
                  src="https://www.motioninvest.com/wp-content/uploads/2021/07/decreasing-1.png"
                  alt=""
                />
                {trend === "dec" && <AiOutlineCheck className="icon" />}
              </div>

              <div
                className="checkimg"
                onClick={() => {
                  setTrend("flat");
                }}
              >
                <img
                  src="https://www.motioninvest.com/wp-content/uploads/2021/07/flat-1.png"
                  alt=""
                />
                {trend === "flat" && <AiOutlineCheck className="icon" />}
              </div>

              <div
                className="checkimg"
                onClick={() => {
                  setTrend("hill");
                }}
              >
                <img
                  src="https://www.motioninvest.com/wp-content/uploads/2021/07/hilly-1.png"
                  alt=""
                />
                {trend === "hill" && <AiOutlineCheck className="icon" />}
              </div>
            </div>
          </div>

          <div className="step1">
            <div className="title">INCOME </div>

            <div className="para">
              What is your sites average monhtly profit over the last 6 months?
            </div>

            <input
              placeholder="$1000.00"
              name="income"
              type="number"
              value={data.income}
              onChange={handleInput}
            />
          </div>

          <div className="step1">
            <div className="title">Selling Price </div>

            <div className="para">
              What is the price you are selling this website?
            </div>

            <input
              placeholder="$1000.00"
              name="price"
              type="number"
              value={data.price}
              onChange={handleInput}
            />
          </div>

          {false ? (
            <div className="step1">
              <div className="title">Analytics</div>

              <div className="para">
                Please share your Google Analytics with us. Our email is
                websell@gmail.com
              </div>
            </div>
          ) : (
            <div className="step1">
              <div className="title">Website ScreenShot</div>

              <div className="para">
                Please provide the website homepage screenshot with us.
              </div>

              {imagePreview ? (
                <div className="imagePreivew">
                  <img src={imagePreview} />
                </div>
              ) : null}

              <div className="group">
                <label htmlFor="image" className="image__label">
                  {/* {currentImage} */}
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={fileHandle}
                />
              </div>
            </div>
          )}

          <div className="btn-c" style={{ marginTop: "30px" }} onClick={submit}>
            Place Order
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default PostAdd;
