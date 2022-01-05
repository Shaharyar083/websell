import React, { useEffect, useState } from 'react'
import "./Dashboard.scss"
import Header from '../../Header/Header';
// import TableHeader from '../../TableHeader/TableHeader';

// API's
// import { dashboardControl } from '../../../Api/dashboard';
// import { getStudents } from '../../../Api/accounts';

// npm
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { Doughnut } from 'react-chartjs-2';
// import LineChart from '../Graph/LineChart';
// import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from 'react-datepicker';

// icons
import download from "../../../assets/download.svg"
import eye from "../../../assets/eye.png"
import celender from "../../../assets/celender.svg"
import dropdown from "../../../assets/dropdown.svg"

// mui
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CircularProgress } from "@mui/material"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';







const Dashboard = () => {
    return (


        <>
        <div className="header__component">
                <Header />
            </div>

        </>
    )
}

export default Dashboard