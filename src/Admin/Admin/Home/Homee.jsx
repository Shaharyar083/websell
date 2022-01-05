import React, { useEffect } from 'react'
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom"
// import Notify from '../../Notify/Notify'
// import PinFactory from '../../PinFactory/PinFactory'
import Pricing from '../../Pricing/Pricing'
// import Account from '../../Profile/Account/Account'
// import QuizPage from '../../QuizPage/QuizPage'
import Admins from '../Admins/Admins'
import Dashboard from '../Dashboard/Dashboard'
import NavBar from '../LeftNavbar/NavBar'
// import PopUp from "../../Popup/PopUp"
import "./Home.scss"
// import People from '../../Profile/People/People'
import MobileNavBar from '../LeftNavbar/MobileNavBar'
import PinFactory from '../../PinFactory/PinFactory'

const Homee = () => {
    let history = useHistory()

    let { path, url } = useRouteMatch()

    // console.log("PATH ========= ", path)
    // console.log("URL ========= ", url)
    useEffect(() => {
        history.push("/dashboard")
    }, [])

    return (
        <>
            <div className="home__containerr">
                <div className="navbar1"><NavBar /></div>
                <div className="mobile__navbar"><MobileNavBar /></div>
                {/* <Switch> */}
                    <Route path={`${url}dashboard`} >
                        <div className="dashboard"><Dashboard /></div>
                    </Route>
                    <Route path={`${url}admin`}>
                        <div className="dashboard"> <Admins /></div>

                    </Route>
                    {/* <Route path={`${url}question`}>
                        <div className="dashboard"> <QuizPage /></div>

                    </Route> */}
                    <Route path={`${url}pin`}>
                        <div className="dashboard"> <PinFactory /></div>
                    </Route>
                    <Route path={`${url}pricing`}>
                        <div className="pricing"> <Pricing /></div>
                    </Route>
                    {/* <Route path={`${url}account`}>
                        <div className="dashboard"> <People /></div>
                    </Route>
                    <Route path={`${url}notification`}>
                        <div className="pricing"> <Notify /></div>
                    </Route> */}

                {/* </Switch> */}

            </div>
        </>
    )
}

export default Homee
