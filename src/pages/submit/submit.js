import Head from "../../components/Head";
import Textarea from "../../components/Textarea";
import ButtonItem from "../../components/ButtonItem";
function Submit(props) {
    return (
        <>
            <Head title="提交周报"/>
            <div className="info-model">
                <div className="info-title">第276周</div>
                <div className="info-group">Web前端组: 12121</div>
            </div> 
            <div className="submit-info">
                <Textarea title="本周完成" placeholder="必填"/>
                <Textarea title="所遇问题" placeholder="必填"/>
                <Textarea title="下周计划" placeholder="必填"/>
                <Textarea title="作品链接" placeholder="Github、站酷等，选填"/>
                <ButtonItem text="提交" className="submit"/>
            </div>
        </>
    )
}
export default Submit;