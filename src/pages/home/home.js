import Index from "../../components/Index";
import ButtonItem from "../../components/ButtonItem";
import Time from "../../components/Time";
function Home(props) {
    return (
        <>
            <div className="main">
                <div className="main-weekly">第276周</div>
                <div className="main-group"> Web前端组 12112</div>
                <Time />
                <ButtonItem text="提交周报" className="white main-submit"/> 
                <ButtonItem text="我要请假" className="none main-leave"/> 
            </div>
            <Index />
        </>
    )
}

export default Home;