import Head from "../../components/Head";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import ButtonItem from "../../components/ButtonItem";
function Leave(props) {

    return (
        <>
            <Head title="我要请假"/>
            <div className="info-model">
                <div className="info-title">第276周</div>
                <div className="info-group">Web前端组: 12121</div>
            </div> 
            <div className="submit-info">
                <Textarea title="请假理由" placeholder="必填"/>
                <Select title="请假期限(必填)"/>
            </div>
            <ButtonItem text="提交" className="submit"/>
        </>
    )
    
}

export default Leave;