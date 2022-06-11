
import React, { useCallback, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import './CircleChart.css'

const data = [
    { name: "80%", value: 200 },
    { name: "95%", value: 300 },
    { name: "59%", value: 300 },
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 90;
    const {
        cx,
        cy,
        midAngle,
        outerRadius,
        fill,
        payload,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;


    return (
        <g>
            <text x={cx} y={cy} dy={4} textAnchor="middle" className="" style={{ textColor: "black" }} fill={fill}>
                {payload.name}
            </text>
        </g>
    );
};

export default function CircleChart() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <div>
            <PieChart width={150} height={150}>
                {/* desktop-pie-chart  */}
                <Pie
                    className="desktop-pie-chart"
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx={50}
                    cy={90}
                    innerRadius={50}
                    outerRadius={55}
                    fill="#64FFDA"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>
            {/* mobile-pie-chart  */}

            <ResponsiveContainer width={'33%'} height={300}>
                <PieChart>
                    <Pie
                        className="mobile-pie-chart"
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={data}
                        cx={30}
                        cy={30}
                        innerRadius={30}
                        outerRadius={35}
                        fill="#64FFDA"
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
