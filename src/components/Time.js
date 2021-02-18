import dealWithTime from "../utils/dealWithTime";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
function Time(props) {
    // Time.js:6 {left_days: 5, : 0, : 41, : 3}
    const nowinit = dealWithTime()
    const [ days, setDays] = useState(nowinit.left_days)
    const [ hours, setHours] = useState(nowinit.left_hours)
    const [ minutes, setMinutes] = useState(nowinit.left_minutes)
    const [ seconds, setSeconds] = useState(nowinit.left_seconds)
    useEffect(()=>{
        setInterval(() => {
            let now = dealWithTime()
            setDays(now.left_days)
            setHours(now.left_hours)
            setMinutes(now.left_minutes)
            setSeconds(now.left_seconds)
        }, 1000);
    }, [])
    const userInfo = useSelector((state) => state.data);
    console.log(JSON.stringify(userInfo, null, 2));
    return (
        <div className="time">
            <div className="time-circle-border-out">
                <div className="time-circle-border">
                    <div className="time-circle1"></div>
                </div>
            </div>
            <div className="time-circle-border-out1">
                <div className="time-circle-border">
                    <div className="time-circle1"></div>
                </div>
            </div>
            <div className="time-circle-border-out2">
                <div className="time-circle-border">
                    <div className="time-circle1"></div>
                </div>
            </div>
            <div className="time-day">
                <div className="time-day-title">{ userInfo.status == 1?'本周剩余时间':'本周周报' }</div>
                <div className="time-day-num">
                    {
                        userInfo.status == 1?(
                            <>
                                <div className="num">{ days }</div>
                                <div className="num">{ hours }</div>
                                <div className="char">:</div>
                                <div className="num">{ minutes }</div>
                                <div className="char">:</div>
                                <div className="num">{ seconds }</div>
                            </>
                        ):(userInfo.status == 2? "已提交":"已请假")
                    }
                    
                </div>
                {
                    userInfo.status == 1?(
                        <div className="time-day-show">
                            <div>Days</div>
                            <div>Hours</div>
                            <div>Minutes</div>
                            <div>Seconds</div>
                        </div>
                    ):""
                }
                
            </div>
        </div>
    )
    
}

export default Time