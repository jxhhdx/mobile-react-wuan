import Index from "../../components/Index";
import ButtonItem from "../../components/ButtonItem";
import Time from "../../components/Time";
import { useSelector } from 'react-redux'
function Home(props) {
    const userInfo = useSelector((state) => state.data);
    console.log(JSON.stringify(userInfo, null, 2));
    
    return (
        <>
            <div className="main">
                <div className="main-weekly">第{ userInfo.currWeek }周</div>
                <div className="main-group"> { userInfo.groupName } { userInfo.userName }</div>
                <Time />
                {
                    !(userInfo.status == 1) ? "":(
                        <>
                        <ButtonItem href="/submit/submit" text="提交周报" className="white main-submit" /> 
                        <ButtonItem href="/leave/leave" text="我要请假" className="none main-leave"/>
                        </>
                    )
                }
                 
            </div>
            <Index />
        </>
    )
}

export default Home;