import React from 'react'
import "./MobileNavBar.scss"
import { NavLink } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from "react-router-dom"


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
import NavBar from './NavBar';

import navlogo from "../../../assets/navlogo.png"
import dashboard from "../../../assets/dashboard.png"
import admin from "../../../assets/admin.png"
import question from "../../../assets/question.png"
import pin from "../../../assets/pin.png"
import pricing from "../../../assets/pricing.png"
import account from "../../../assets/account.png"
import notify from "../../../assets/notify.png"
import setting from "../../../assets/setting.png"

const MobileNavBar = () => {

    let { path, url } = useRouteMatch()
    const [state, setState] = React.useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 270 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div>
                <NavBar />
                {/* <div>hllo</div> */}
            </div>
        </Box>
    );

    return (
        <div>
            <div className="mobile__navbar">

                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <div className="burger" onClick={toggleDrawer(anchor, true)}>
                            <MenuIcon />
                            <div className="icons">
                                <NavLink to="/dashboard" activeClassName="active__link" className="nb__body1">
                                    <div><img src={dashboard} alt="" className="body1__icon" /></div>
                                </NavLink>
                                <NavLink activeClassName="active__link" to="/admin" className="nb__body1">
                                    <div><img src={admin} alt="" className="body1__icon" /></div>

                                </NavLink>
                                
                                <NavLink activeClassName="active__link" to="/pin" className="nb__body1">
                                    <div><img src={pin} alt="" className="body1__icon" /></div>

                                </NavLink>
                                <NavLink activeClassName="active__link" to="/pricing" className="nb__body1">
                                    <div><img src={pricing} alt="" className="body1__icon" /></div>

                                </NavLink>
                               
                               
                               
                            </div>

                        </div>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default MobileNavBar
