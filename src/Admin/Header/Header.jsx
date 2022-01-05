import React, { useState } from 'react'
import "./Header.scss"


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import profile from "../../assets/profile.png"
import { useHistory } from 'react-router-dom';

const Header = () => {

    const [expanded, setExpanded] = useState(false)
    let history = useHistory()
    const logout = ()=>{
        localStorage.clear()
        history.push("/signin")
        
    }

    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <div className="header__container">
                <div className="allC__accor">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}



                        >
                            <div className="allC__box">
                                <img src={profile} alt="" className="box__img" />
                                <div className="box__paras">
                                    <p className="para1"><strong>George Saad</strong></p>
                                    <p className="para2">Super Admin</p>
                                </div>

                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="allC__expanded__view">

                                <div className="btn2 cursor">Email</div>
                                <div onClick={logout} className="btn1 cursor">LOG OUT</div>

                            </div>


                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default Header
