import './CircleChart.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const percentage = 78;
const percentage1 = 95;
const percentage2 = 59;

export default function CircleChart() {

    return (
        <div className='d-flex mobile-CircularProgressbar'>
            {/* desktop-pie-chart  */}
            <CircularProgressbar className='pie-color' value={percentage} text={`${percentage}%`} />
            <CircularProgressbar className='' value={percentage1} text={`${percentage1}%`} />
            <CircularProgressbar className='' value={percentage2} text={`${percentage2}%`} />
        </div>
    );
}
