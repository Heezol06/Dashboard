import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "../App.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    // Tooltip,
    // Legend
} from "recharts";
import CircleChart from './CircleChart';

// charts file 
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

const Dashboard = () => {
    return (
        <div className=''>
            <Row className='py-3 d-flex  container mx-auto rounded' style={{ backgroundColor: "#FAFAFA", }}>
                {/* dashboard navigation  */}
                <Col xs={1} className='d-flex flex-column justify-content-center p-0' style={{ width: "4%" }}>
                    <img src="https://i.ibb.co/X8WyXqG/wings.png" className='w-25 mx-auto mb-4' alt="" />
                    <i class="fa-solid fa-magnifying-glass mb-5"></i>
                    <i class="fa-solid fa-house mb-3"></i>
                    <i class="fa-solid fa-newspaper mb-3"></i>
                    <i class="fa-solid fa-table-list mb-3"></i>
                    <i class="fa-solid fa-user"></i>
                </Col>
                {/* dashboard profile */}
                <Col xs={2} className='p-5 rounded' style={{ backgroundColor: "#F5F5F5", width: "25%" }}>
                    <div className='d-flex mt-3'>
                        <div className=''>
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
                <Col xs={6} className="text-start p-5">
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
                        <Col xs={4} style={{ borderBottom: "1px solid #651FFF" }} className="mx-4">
                            <h5>59%</h5>
                            <p className='small-text color-gray'>Goal Achieved</p>
                        </Col>
                        <Col xs={4} style={{ borderBottom: "1px solid #651FFF" }} className="">
                            <h5>$300</h5>
                            <p className='small-text color-gray'>Est. Monthly Income</p>
                        </Col>
                    </div>
                    {/* Contributions overtime chart */}
                    <div className='my-5 d-flex flex-column'>
                        <h6>Contributions Overtime</h6>
                        <div className='d-flex'>
                            <p className='fw-bold me-4'>
                                <div style={{ background: "#1A237E", width: "2px" }}></div>
                                <span className='color-gray'>Employer:</span>
                                K 73,500
                            </p>
                            <p className='fw-bold me-4'>
                                <div style={{ background: "#1A237E", width: "2px" }}></div>
                                <span className='color-gray'>Employer:</span>
                                K 73,500
                            </p>
                            <p className='fw-bold me-4'>
                                <div style={{ background: "#1A237E", width: "2px" }}></div>
                                <span className='color-gray'>Employer:</span>
                                K 73,500
                            </p>
                        </div>
                        <div className='d-flex justify-content-start'>
                            <BarChart
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
                    </div>
                    {/* Compare peers  */}
                    <div>
                        <h6>How do i compare to my peers?</h6>
                        <p className='small-text color-gray'>These numbers represent current goal achievement</p>
                    </div>
                    <div className='d-flex'>
                        <div className='col-lg-3'>
                            <div class="col-md-4">
                                <select style={{ border: 0, }}>
                                    <option >Age</option>
                                    <option>Under 30</option>
                                    <option>Under 40</option>
                                    <option>Under 50</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select style={{ border: 0, }}>
                                    <option >Age</option>
                                    <option>Under 30</option>
                                    <option>Under 40</option>
                                    <option>Under 50</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select style={{ border: 0, }}>
                                    <option >Age</option>
                                    <option>Under 30</option>
                                    <option>Under 40</option>
                                    <option>Under 50</option>
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



                <Col xs={2} className='mt-5 rounded p-3' style={{ backgroundColor: "#F5F5F5", }}>
                    <h5>Retirement Strategy</h5>
                    {/* <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        renderTrack={(props, state) => <div {...props} />}//custom track
                    /> */}
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;