import Head from "../../components/Head";
import Textarea from "../../components/Textarea";
import ButtonItem from "../../components/ButtonItem";
import { useState } from "react";
import { leave } from "../../axios/index.js";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import graceChecker from "../../utils/graceChecker";
import { Toast } from "antd-mobile";
import { userInfoAction } from "../../redux/action";
function Leave(props) {
    const [weekNum, setWeekNum] = useState(1);
    const [reason, setReason] = useState('');
    const userInfo = useSelector((state) => state.data);
    const router = useRouter()
    const dispatch = useDispatch();

    function toast(params) {
        Toast.info(params, 1);
    }
    function selectLeave() {
        let weekn = ['一周', '二周', '三周']
        return weekn.map((item, index) =>
            <div onClick={()=>setWeekNum(index+1)} key={index} className={ weekNum == (index+1)?"select-leave-active":"" }>
                { weekNum == (index+1)? <i className="iconfont icon-gou"></i>:''}
                { item }
            </div>
        )
    }
    function toLeave() {
        var rule = [
            { name: 'reason', checkType: 'notnull', checkRule: '', errorMsg: '请填写请假理由' },
        ];
        var checkRes = graceChecker.check({reason}, rule);
        if (!checkRes) {
            toast(graceChecker.error);
        } else {
            console.log("login");
            leave({weekNum, reason, userId:userInfo.userId, groupId:userInfo.groupId}).then(({ data, status })=>{
                console.log(data)
                switch (data.infoCode+"") {
                    case '200':
                        toast(data.infoText);
                        let now = Object.assign({}, userInfo)
                        now.status = 3
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
            <Head title="我要请假" />
            <div className="info-model">
                <div className="info-title">第276周</div>
                <div className="info-group">Web前端组: 12121</div>
            </div>
            <div className="submit-info">
                <Textarea bind={(e) => { setReason(e) }} title="请假理由" placeholder="必填" />
                <div className="select textarea">
                    <span>请假期限(必填)</span>
                    <div className="select-leave">
                        {selectLeave()}
                    </div>
                </div>
            </div>
            <ButtonItem bind={()=>{ toLeave() }}  text="提交" className="submit" />
        </>
    )

}

export default Leave;