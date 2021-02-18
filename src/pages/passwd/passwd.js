import Head from "../../components/Head";
import InputItem from "../../components/InputItem";
import ButtonItem from "../../components/ButtonItem";
import { useSelector } from 'react-redux';
import { updateUserName } from "../../axios/index.js";
import { useDispatch } from 'react-redux';
import { Toast } from "antd-mobile";
import { userInfoAction, emailAction } from "../../redux/action";
import { useRouter } from 'next/router';
import { useState } from "react";
import graceChecker from "../../utils/graceChecker";
function Passwd(props) {
    const userInfo = useSelector((state) => state.data);
    console.log(JSON.stringify(userInfo, null, 2))
    const [password, setPassword] = useState('');
    const [confirmPasswd, setConfirmPasswd] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const router = useRouter()
    const dispatch = useDispatch();
    function toast(params) {
        Toast.info(params, 1);
    }
    function toUpdatePasswd() {
        var rule = [
            { name: 'password', checkType: 'password', errorMsg: '密码长度为6~20字符' },
            { name: 'password', checkType: 'notnull', errorMsg: '请填写密码后再提交' },
            { name: 'confirmPasswd', checkType: 'password', errorMsg: '密码长度为6~20字符' },
            { name: 'confirmPasswd', checkType: 'notnull', errorMsg: '请填写密码后再提交' },
            { name: 'newPassword', checkType: 'password', errorMsg: '密码长度为6~20字符' },
            { name: 'newPassword', checkType: 'notnull', errorMsg: '请填写密码后再提交' },

        ];
        if(confirmPasswd !== newPassword){
            toast('前后密码不一致');
            return ;
        }
        if(password == newPassword){
            toast('新密码和旧密码一致');
            return ;
        }
        var checkRes = graceChecker.check({ confirmPasswd, newPassword, password, userId:userInfo.userId }, rule);
        if (!checkRes) {
            toast(graceChecker.error);
        } else {
            console.log("login");
            updateUserName({ confirmPasswd, newPassword, password, userId:userInfo.userId }).then(({ data, status }) => {
                console.log(data)
                switch (data.infoCode) {
                    case '200':
                        toast(data.infoText);
                        dispatch(userInfoAction({}))
                        dispatch(emailAction(''))
                        router.push("/login/login")
                        break;
                    default:
                        toast(data.infoText);
                        break;
                }
            })
        }
    }
    return (
        <div className="passwd-main">
            <Head title="修改密码" />
            <InputItem type="password" title="原密码" placeholder="请输入原密码" bind={(e)=>{setPassword(e)}}/>
            <InputItem type="password" title="新密码" placeholder="请输入新密码" bind={(e)=>{setNewPassword(e)}}/>
            <InputItem type="password" title="确认新密码" placeholder="请再次输入密码" bind={(e)=>{setConfirmPasswd(e)}}/>
            <div className="passwd-tips">新密码长度必须为6-20个字符，由数字、英文字母、特殊符号组成。</div>
            <ButtonItem text="确认修改" className="user" bind={()=>{toUpdatePasswd()}}/>
        </div>
    )
}

export default Passwd;