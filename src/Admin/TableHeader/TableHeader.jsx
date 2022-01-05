import React from 'react'
import "./TableHeader.scss"

import search from "../../Assets/search.png"
const TableHeader = (props) => {
    return (
        <>
            <div className="th__container">
                <div className="data__header">
                    <div className="left">
                        <div className="header__title">
                            <p className="title__para1">{props.title ? props.title : "Accounts"}</p>
                            <p className="title__para2">{props.total ?  `Total Number: ${props.total}` : `Total Number: 0`}</p>
                        </div>
                        <div className="header__search">
                            <div><img src={search} alt="" className="header__search__icon" /></div>
                            <input className="header__input" value={props.searchState} onChange={(e)=> props.setSearchState(e.target.value)} type="text" placeholder="Search List" />

                        </div>
                    </div>





                    <div className="header__btn cursor">
                        <p className="btn__para1">{props.img ? props.img : "+"}</p>
                        <p className="btn__para2">{props.btnpara ? props.btnpara : "DOWNLOAD REPORT"}</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default TableHeader
