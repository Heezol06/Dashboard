
import React, { useCallback, useState } from "react";
import { PieChart, Pie } from "recharts";

const data = [
    { name: "80%", value: 200 },
    { name: "95%", value: 300 },
    { name: "59%", value: 300 },
    { name: "Group D", value: 200 }
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
        percent,
        value
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
        <PieChart width={200} height={250}>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx={100}
                cy={150}
                innerRadius={50}
                outerRadius={60}
                fill="#64FFDA"
                dataKey="value"
                onMouseEnter={onPieEnter}
            />
        </PieChart>
    );
}
