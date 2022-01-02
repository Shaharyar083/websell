import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./websiteValuation.scss";
import google from "../../assets/google.png";
import { AiOutlineCheck } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const WebsiteValuation = () => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(12);

  const [data, setData] = useState({
    email: "",
    fullName: "",
    lastName: "",
    url: "",
    niche: "",
    income: "",
  });

  const [monetization, setMone] = useState({ amazon: false, adsense: false });

  const [trend, setTrend] = useState("");

  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleStep = () => {
    setStep(step + 1);
    setStatus(status + 12);
  };

  const submit = () => {
    if (trend === "inc") {
      let income = parseInt(`${data.income}`);
      let final = income * 12;
      setValue(final);
    } else if (trend === "dec") {
      let income = parseInt(`${data.income}`);
      let final = income * 3;
      setValue(final);
    } else if (trend === "falt") {
      let income = parseInt(`${data.income}`);
      let final = income * 6;
      setValue(final);
    } else if (trend === "hill") {
      let income = parseInt(`${data.income}`);
      let final = income * 9;
      setValue(final);
    }
  };

  return (
    <>
      <Navbar />

      <div className="websiteValuation">
        <div className="hero">
          <di className="left">
            <img
              src="https://www.motioninvest.com/wp-content/uploads/2021/06/Evaluation_Hero.png"
              alt=""
            />
          </di>

          <div className="right">
            <div className="title">Evaluate your sites worth!</div>
            <div className="para">
              Submit your site to be evaluated by our team. Instant valuation on
              your site, easy & free!
            </div>{" "}
          </div>
        </div>

        {value === "" ? (
          <div className="valuate">
            <div className="step">Step {step} of 8</div>

            <div className="progress">
              <span
                className="status"
                style={{
                  width: status === 96 ? "100%" : `${status}%`,
                  background: "#6754E2",
                  borderRadius: status === 96 ? "10px" : "10px 0 0 10px",
                }}
              ></span>
            </div>

            <div className="valuate-form">
              {step === 1 && (
                <div className="step1">
                  <div className="title">EMAIL ADDRESS</div>

                  <div className="para">What is the best way to reach you?</div>

                  <input
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={handleInput}
                  />

                  <div
                    className="btn-c"
                    onClick={() => {
                      handleStep();
                    }}
                  >
                    Continue
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="step2">
                  <div className="title">NAME OF SELLER</div>

                  <div className="para">Let us know your first & last name</div>

                  <div className="input-wrap">
                    <input
                      placeholder="First Name"
                      name="fullName"
                      type="text"
                      value={data.fullName}
                      onChange={handleInput}
                    />

                    <input
                      placeholder="Last Name"
                      name="lastName"
                      type="text"
                      value={data.lastName}
                      onChange={handleInput}
                    />
                  </div>

                  <div
                    className="btn-c"
                    onClick={() => {
                      handleStep();
                    }}
                  >
                    Next Step
                  </div>
                </div>
              )}

              {step === 3 && (
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

                  <div
                    className="btn-c"
                    onClick={() => {
                      handleStep();
                    }}
                  >
                    Next Step
                  </div>
                </div>
              )}

              {step === 4 && (
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

                  <div
                    className="btn-c"
                    onClick={() => {
                      handleStep();
                    }}
                  >
                    Next Step
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="step4">
                  <div className="title">MONETIZATION METHOD</div>

                  <div className="para">How is your site earning income?</div>

                  <div className="mone">
                    <div
                      className="checkimg"
                      onClick={() => {
                        setMone({
                          ...monetization,
                          amazon: !monetization.amazon,
                        });
                      }}
                    >
                      <img
                        src="https://www.motioninvest.com/wp-content/uploads/2021/06/Icon_AmazonAssociates.png"
                        alt=""
                      />
                      {monetization.amazon && (
                        <AiOutlineCheck className="icon" />
                      )}
                    </div>

                    <div
                      className="checkimg"
                      onClick={() => {
                        setMone({
                          ...monetization,
                          adsense: !monetization.adsense,
                        });
                      }}
                    >
                      <img src={google} alt="" />
                      {monetization.adsense && (
                        <AiOutlineCheck className="icon" />
                      )}
                    </div>
                  </div>

                  <div
                    className="btn-c"
                    onClick={() => {
                      handleStep();
                    }}
                  >
                    Next Step
                  </div>
                </div>
              )}

              {step === 6 && (
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

                  <div
                    className="btn-c"
                    onClick={() => {
                      handleStep();
                    }}
                  >
                    Next Step
                  </div>
                </div>
              )}

              {step === 7 && (
                <div className="step1">
                  <div className="title">INCOME PROOF</div>

                  <div className="para">
                    What is your sites average monhtly profit over the last 6
                    months?
                  </div>

                  <input
                    placeholder="$1000.00"
                    name="income"
                    type="number"
                    value={data.income}
                    onChange={handleInput}
                  />

                  <div
                    className="btn-c"
                    onClick={() => {
                      handleStep();
                    }}
                  >
                    Next Step
                  </div>
                </div>
              )}

              {step === 8 && (
                <div className="step1">
                  <div className="title">Analytics</div>

                  <div className="para">
                    Please share your Google Analytics with us. Our email is
                    websell@gmail.com
                  </div>

                  <div
                    className="btn-c"
                    style={{ marginTop: "30px" }}
                    onClick={() => {
                      submit();
                    }}
                  >
                    Submit
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="estimate">
            <div className="title">Estimated Website Valuation</div>

            <div className="para">
              The estimate valuation of selling your website in our marketplace
              is:
            </div>

            <div className="price">
              $<span>{value}</span>
            </div>
          </div>
        )}

        <div className="help">
          <div className="inner">
            <div className="left">
              <div className="title">Our Helpdesk has all the answers</div>

              <div className="para">
                If you have any questions about buying or selling your website,
                Or if you just want to get in touch with us and ask us a
                question directly, visit our Helpdesk!
              </div>

              <Link
                to="/contact-us"
                style={{ textDecoration: "none", marginTop: "50px" }}
                className="btn"
              >
                VISIT OUR HELPDESK
              </Link>
            </div>

            <div className="right">
              <img
                src="https://www.motioninvest.com/wp-content/uploads/2021/06/HelpDesk_Illustration.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WebsiteValuation;
