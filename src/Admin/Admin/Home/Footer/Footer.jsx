import React from 'react'
import farward from "../../../../Assets/farward.png"
import back from "../../../../Assets/back.png"
import dropdown from "../../../../Assets/dropdown.png"



import "./Footer.scss"


const Footer = () => {
    return (
        <>
            <div className="footer__container">
                <div className="footer__data">
                    <p className="para1">Rows per page </p>
                    <div className="data__number">
                        <p className="number">16</p>
                        <img src={dropdown} alt="Error" className="number__icon" />
                    </div>
                    <p className="data__para1">1-10 of 100</p>
                    <img src={back} alt="" className="back__icon" />
                    <img src={farward} alt="" className="back__icon" />
                </div>
            </div>
        </>
    )
}

export default Footer
