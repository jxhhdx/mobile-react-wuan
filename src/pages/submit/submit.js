import Head from "../../components/Head";
import Textarea from "../../components/Textarea";
import ButtonItem from "../../components/ButtonItem";
import { useState } from "react";
import { submit } from "../../axios/index.js";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import graceChecker from "../../utils/graceChecker";
import { Toast } from "antd-mobile";
import { userInfoAction } from "../../redux/action";
function Submit(props) {
    const userInfo = useSelector((state) => state.data);
    const [complete, setComplete] = useState('');
    const [trouble, setTrouble] = useState('');
    const [plane, setPlane] = useState('');
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const router = useRouter()
    function toast(params) {
        Toast.info(params, 1);
    }
    function nowTime() {
        let nowTime = new Date();
        return nowTime.getFullYear() + '-' + (nowTime.getMonth() + 1) + '-' + nowTime.getDate() + ' ' + nowTime.getHours() +
            ':' + nowTime.getMinutes() + ':' + nowTime.getSeconds();
    }
    function toSubmit() {
        var rule = [
            { name: 'complete', checkType: 'notnull', checkRule: '', errorMsg: '请填写本周完成' },
            { name: 'trouble', checkType: 'notnull', checkRule: '', errorMsg: '请填写所遇问题' },
            { name: 'plane', checkType: 'notnull', checkRule: '', errorMsg: '请填写下周计划' },
        ];
        var checkRes = graceChecker.check({complete, trouble, plane, url}, rule);
        if (!checkRes) {
            toast(graceChecker.error);
        } else {
            console.log("login");
            submit({complete, trouble, plane, url,date:nowTime(), userId: userInfo.userId,groupId:userInfo.groupId}).then(({ data, status })=>{
                console.log(data)
                switch (data.infoCode+"") {
                    case '200':
                        toast(data.infoText);
                        let now = Object.assign({}, userInfo)
                        now.status = 2
                        dispatch(userInfoAction(now))
                        router.push("/home/home")
                        break;
                    default:
                        toast(data.infoText);
                        break;
                }
            })
        }
    }
    return (
        <>
            <Head title="提交周报" />
            <div className="info-model">
                <div className="info-title">第276周</div>
                <div className="info-group">Web前端组: 12121</div>
            </div>
            <div className="submit-info">
                <Textarea bind={(e) => { setComplete(e) }} title="本周完成" placeholder="必填" />
                <Textarea bind={(e) => { setTrouble(e) }} title="所遇问题" placeholder="必填" />
                <Textarea bind={(e) => { setPlane(e) }} title="下周计划" placeholder="必填" />
                <Textarea bind={(e) => { setUrl(e) }} title="作品链接" placeholder="Github、站酷等，选填" />
                <ButtonItem bind={()=>{ toSubmit() }} text="提交" className="submit" />
            </div>
        </>
    )
}
export default Submit;