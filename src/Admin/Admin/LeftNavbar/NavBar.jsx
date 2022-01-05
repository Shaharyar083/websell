import React from 'react'
import { NavLink, useHistory } from "react-router-dom"
import "./NavBar.scss"

import navlogo from "../../../assets/navlogo.png"
import dashboard from "../../../assets/dashboard.png"
import admin from "../../../assets/admin.png"
import question from "../../../assets/question.png"
import pin from "../../../assets/pin.png"
import pricing from "../../../assets/pricing.png"
import account from "../../../assets/account.png"
import exit from "../../../assets/exit.png"








const NavBar = () => {
    
    let history = useHistory()
    const logout = ()=>{
        localStorage.clear()
        history.push("/signin")
        
    }

    const handleScroll=()=> {
        window.scrollTo(0, 0)
        
      }

     



    return (
        <>
            <div className="nb__container">
                <div className="nb__header">
                    <img src={navlogo} alt="" className='cursor' />
                </div>

                <div className="nb__body">
                    <NavLink to="/dashboard" activeClassName="active__link" className="nb__body1">
                        <div><img src={dashboard} alt="" className="body1__icon" /></div>
                        <div className="body1__para">Dashboard</div>
                    </NavLink>
                    <NavLink activeClassName="active__link" to="/admin" className="nb__body1">
                        <div><img src={admin} alt="" className="body1__icon" /></div>
                        <div className="body1__para">Admins</div>
                    </NavLink>
                    <NavLink activeClassName="active__link" to="/pin" className="nb__body1">
                        <div><img src={pin} alt="" className="body1__icon" /></div>
                        <div className="body1__para">Pin Factory</div>
                    </NavLink>
                    <NavLink activeClassName="active__link" to="/pricing" className="nb__body1">
                        <div><img src={pricing} alt="" className="body1__icon" /></div>
                        <div className="body1__para">Pricing</div>
                    </NavLink>
                    
                </div>

                <div className="nb__footer">
                    {/* <div className="nb__footer__heading">TEAMS</div> */}
                    <div className="footer__body">
                        {/* <NavLink activeClassName="active__link" to="/notification" className="footer__body1">
                            <div><img src={notify} alt="" className="body1__icon" /></div>
                            <div className="body1__para">Notifications</div>
                            <div className="footer__notify">9</div>
                        </NavLink> */}

                        {/* <div className="footer__body1 cursor">
                            <div><img src={setting} alt="" className="body1__icon" /></div>
                            <div className="body1__para">Settings</div>
                        </div> */}
                    </div>

                </div>
                <div className="footer__bottom">
                    <div onClick={handleScroll} ><img src={exit} alt="" className="bottom__img cursor" /></div>
                    <p  className="bottom__para">Here you can exit the page</p>

                    <div className="bottom__btn cursor">LOGOUT</div>
                </div>

            </div>
        </>
    )
}

export default NavBar
