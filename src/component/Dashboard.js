import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "../App.css";
import './Dashboard.css'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    // Tooltip,
    // Legend
} from "recharts";
import CircleChart from './CircleChart';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


// charts mobile file 
const dataMobile = [
    {
        name: "20",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "",
        uv: 5000,
        pv: 6000,
        amt: 7000
    },
    {
        name: "25",
        uv: 6000,
        pv: 7000,
        amt: 8000
    },
    {
        name: "",
        uv: 7000,
        pv: 8000,
        amt: 9000
    },
    {
        name: "30",
        uv: 8000,
        pv: 9000,
        amt: 10000
    },
    {
        name: "",
        uv: 9000,
        pv: 10000,
        amt: 11000
    },
    {
        name: "35",
        uv: 10000,
        pv: 11000,
        amt: 12000
    }
];
// chart desktop 
const data = [
    {
        name: "20",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "",
        uv: 5000,
        pv: 6000,
        amt: 7000
    },
    {
        name: "25",
        uv: 6000,
        pv: 7000,
        amt: 8000
    },
    {
        name: "",
        uv: 7000,
        pv: 8000,
        amt: 9000
    },
    {
        name: "30",
        uv: 8000,
        pv: 9000,
        amt: 10000
    },
    {
        name: "",
        uv: 9000,
        pv: 10000,
        amt: 11000
    },
    {
        name: "35",
        uv: 10000,
        pv: 11000,
        amt: 12000
    },
    {
        name: "",
        uv: 11000,
        pv: 12000,
        amt: 12000
    },
    {
        name: "40",
        uv: 12000,
        pv: 13000,
        amt: 14000
    },
    {
        name: "",
        uv: 13000,
        pv: 14000,
        amt: 15000
    },
    {
        name: "45",
        uv: 14000,
        pv: 15000,
        amt: 16000
    },
    {
        name: "50",
        uv: 15000,
        pv: 16000,
        amt: 17000
    },
    {
        name: "",
        uv: 16000,
        pv: 17000,
        amt: 18000
    },
    {
        name: "55",
        uv: 17000,
        pv: 18000,
        amt: 19000
    },
];

// slider 
const PrettoSlider = styled(Slider)({
    color: '#2ba9ff',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#2ba9ff',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

// textarea 




const Dashboard = () => {

    return (
        <div className='my-5 d-sm-inline-flex flex-md-column' style={{ minWidth: "270px" }}>
            {/* dashboard navigation for mobile  */}
            <div className='for-sm-nav w-100'>
                <div className='show-in-bottom w-100'>
                    <Col xs={1} className='d-flex justify-content-between p-0 align-items-end' style={{ minWidth: "270px" }}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-solid fa-house"></i>
                        <i class="fa-solid fa-newspaper"></i>
                        <i class="fa-solid fa-table-list"></i>
                        <i class="fa-solid fa-user"></i>
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </Col>
                </div>
            </div>
            <Row className='py-3 d-flex  container mx-auto rounded dashboard-sm' style={{ backgroundColor: "#FAFAFA", }}>
                {/* dashboard navigation  */}
                <Col xs={1} className='d-flex flex-column justify-content-between p-0 navbar-sm' style={{ color: "gray" }}>
                    <div className='d-flex flex-column'>
                        <img src="https://i.ibb.co/X8WyXqG/wings.png" className='w-25 mx-auto mb-4' alt="" />
                        <i class="fa-solid fa-magnifying-glass mb-5"></i>
                    </div>
                    <div className='d-flex flex-column'>
                        <i class="fa-solid fa-house mb-3"></i>
                        <i class="fa-solid fa-newspaper mb-3"></i>
                        <i class="fa-solid fa-table-list mb-3"></i>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div className='d-flex flex-column'>
                        <i class="fa-solid fa-bell my-2"></i>
                        <i class="fa-solid fa-arrow-right-from-bracket my-2"></i>
                    </div>
                </Col>
                {/* dashboard profile */}
                <Col xs={2} className='p-5 rounded ' style={{ backgroundColor: "#F5F5F5", width: "305px" }}>
                    <div className='d-flex mt-3 profile-sm' style={{ width: "100%" }}>
                        <div className='profile-name-pic'>
                            <img src="https://i.ibb.co/BKPjRLp/photo-1552374196-c4e7ffc6e126.png" className=' rounded-circle ' style={{ width: "60px" }} alt="" />
                        </div>
                        <div>
                            <h4>Hi Mike,</h4>
                            <p>welcome back.</p>
                        </div>
                    </div>
                    <div className='text-start'>
                        <h6>Today</h6>
                        <h4>$19,892</h4>
                        <p className='color-gray'>Account Balance</p>
                        <h6>$4,000</h6>
                        <p className='color-gray'>Year-to-Date Contributions</p>
                        <h6>$1,892</h6>
                        <p className='color-gray'>Total Interest</p>
                    </div>
                    <div className='text-start'>
                        <button className='text-white py-2 px-4 rounded' style={{ border: 0, backgroundColor: "#651FFF" }}>i want to <i class="fa-solid fa-caret-down"></i></button>

                        <h6 className='my-3 small-text'>Recent Transactions</h6>
                    </div>
                    <div className='text-start'>
                        <div className='my-3 small-text' style={{ borderBottom: "1px solid #BDBDBD" }}>
                            <p className=''>2020-08-09</p>
                            <p className=''>Withdrawal Transfer to Bank-XXX11</p>
                        </div>
                        <div className='my-3 small-text' style={{ borderBottom: "1px solid #BDBDBD" }}>
                            <p>2020-08-07</p>
                            <p className=''>Withdrawal Transfer to Bank-XXX11</p>
                        </div>
                        <div className='my-3 small-text' style={{ borderBottom: "1px solid #BDBDBD" }}>
                            <p>2020-08-07</p>
                            <p className=''>Withdrawal Transfer to Bank-XXX11</p>
                        </div>
                    </div>
                </Col>

                {/* chart's */}
                <Col xs={6} className="text-start p-5 chart-sm">
                    {/* headding  */}
                    <div>
                        <h1 className='color-Deep-Purple small-text'>Retirement Income</h1>
                        <h5>Starting Year 2056</h5>
                    </div>
                    {/* improvement of user  */}
                    <div className='d-flex my-5 me-5'>
                        <Col xs={4} style={{ borderBottom: "1px solid #651FFF" }} className="me-4">
                            <h5>$300,000</h5>
                            <p className='small-text color-gray'>My Goal</p>
                        </Col>
                        <div className='d-lg-flex '>
                            <Col xs={4} style={{ borderBottom: "1px solid #651FFF" }} className="mx-4">
                                <h5>59%</h5>
                                <p className='small-text color-gray'>Goal Achieved</p>
                            </Col>
                            <Col xs={4} style={{ borderBottom: "1px solid #651FFF" }} className="">
                                <h5>$300</h5>
                                <p className='small-text color-gray'>Est. Monthly Income</p>
                            </Col>
                        </div>
                    </div>
                    {/* Contributions overtime chart */}
                    <div className='my-5 d-flex flex-column'>
                        <h6>Contributions Overtime</h6>
                        <div className='d-flex w-100'>
                            <p className='fw-bold'>
                                <div style={{ background: "#1A237E", width: "2px" }}></div>
                                <span className='color-gray'>Employer:</span>
                                K 73,500
                            </p>
                            <p className='fw-bold'>
                                <div style={{ background: "#1A237E", width: "2px" }}></div>
                                <span className='color-gray'>Employer:</span>
                                K 73,500
                            </p>
                            <p className='fw-bold'>
                                <div style={{ background: "#1A237E", width: "2px" }}></div>
                                <span className='color-gray'>Employer:</span>
                                K 73,500
                            </p>
                        </div>
                        {/* desktop chart */}
                        <div className='d-flex justify-content-start desktop-chart'>
                            <BarChart
                                className=''
                                width={600}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 0,
                                    bottom: 5
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                {/* <Tooltip />
      <Legend /> */}
                                <Bar dataKey="pv" barSize={10} stackId="a" fill="#1A237E" />
                                <Bar dataKey="uv" stackId="a" fill="#9FA8DA" />
                                <Bar dataKey="amt" stackId="a" fill="#E8EAF6" />
                            </BarChart>
                        </div>
                        {/* mobile chart */}
                        <div className='d-flex justify-content-start mobile-chart'>
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart
                                    className=''
                                    width={600}
                                    height={300}
                                    data={dataMobile}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 0,
                                        bottom: 5
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    {/* <Tooltip />
      <Legend /> */}
                                    <Bar dataKey="pv" barSize={10} stackId="a" fill="#1A237E" />
                                    <Bar dataKey="uv" stackId="a" fill="#9FA8DA" />
                                    <Bar dataKey="amt" stackId="a" fill="#E8EAF6" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    {/* Compare peers  */}
                    <div>
                        <h6>How do i compare to my peers?</h6>
                        <p className='small-text color-gray'>These numbers represent current goal achievement</p>
                    </div>
                    <div className='d-flex'>
                        <div className='col-lg-3'>
                            <div class="d-flex align-items-center my-3 border-bottom">
                                <h6>Age:</h6>
                                <select class="form-select " aria-label="Default select example" style={{ boxShadow: "0px, 0px, 0px, 0px black", border: "none", background: "transparent" }}>
                                    <option selected>Select Age</option>
                                    <option value="1">Under 30</option>
                                    <option value="2">Under 40</option>
                                    <option value="3">Under 50</option>
                                </select>
                            </div>
                            <div class="d-flex align-items-center my-3 border-bottom">
                                <h6>Salary:</h6>
                                <select class="form-select" aria-label="Default select example" style={{ boxShadow: "0px, 0px, 0px, 0px black", border: "none", background: "transparent" }}>
                                    <option selected>Select Salary</option>
                                    <option value="1">20k - 30k</option>
                                    <option value="2">30k - 40k</option>
                                    <option value="3">40k - 50k</option>
                                </select>
                            </div>
                            <div class="d-flex align-items-center border-bottom">
                                <h6>Gender:</h6>
                                <select class="form-select" aria-label="Default select example" style={{ boxShadow: "0px, 0px, 0px, 0px black", border: "none", background: "transparent" }}>
                                    <option selected>Select Gender</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        {/* pie chart  */}
                        <div className='d-flex col-lg-6'>
                            <CircleChart></CircleChart>
                            <CircleChart></CircleChart>
                            <CircleChart></CircleChart>
                        </div>
                    </div>
                </Col>



                <Col xs={2} className=""  >
                    <div className='mt-5 rounded p-3' style={{ borderBottom: "1 px solid ", backgroundColor: "#F5F5F5", minWidth: "270px" }}>
                        <h5>Retirement Strategy</h5>
                        <Box sx={{ m: 3 }} />
                        <Typography gutterBottom className='text-start fw-bolder'>Employee Contribution</Typography>
                        <PrettoSlider
                            valueLabelDisplay="auto"
                            aria-label="pretto slider"
                            defaultValue={20}
                        />
                        <Box sx={{ m: 3 }} />
                        <Typography gutterBottom className='text-start fw-bolder'>Retirement Age</Typography>
                        <PrettoSlider
                            valueLabelDisplay="auto"
                            aria-label="pretto slider"
                            defaultValue={20}
                        />
                        <div className='' style={{ borderBottom: "1px solid lightGray" }}></div>
                        <div className='small-text fw-bold  d-flex justify-content-between mt-5 mb-4'>Employer Contribution 8.4%</div>
                        <div className='small-text fw-bold  d-flex justify-content-between mb-5'><span>Interest Rate</span> <span>5%</span></div>
                        <button className='text-white py-3 px-5 rounded' style={{ border: 0, backgroundColor: "#651FFF" }}>Update</button>
                        <p className='color-Deep-Purple small-text mt-5'>View Help Docs <i class="fa-solid fa-angle-right"></i></p>
                    </div>
                    <div className='mt-5 text-start p-3' style={{ borderLeft: "1px solid #651FFF", minWidth: "270px" }}>
                        <h6 className='fw-normal'>Are you considering a <span className='fw-bold'>Housing advance?</span></h6>
                        <p className='color-gray small-text my-1'>Limited time reduced interest</p>
                        <p className='color-Deep-Purple small-text'>View Help Docs <i class="fa-solid fa-angle-right"></i></p>
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default Dashboard;