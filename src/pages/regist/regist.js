import Head from "../../components/Head";
import InputItem from "../../components/InputItem";
import ButtonItem from "../../components/ButtonItem";
import { regist } from "../../axios/index.js";
import { useState } from "react";
import { Toast } from "antd-mobile";
import graceChecker  from "../../utils/graceChecker";
import { useRouter } from 'next/router'
function Regist(props) {
    const [QQ, setQQ] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const router = useRouter()
    function toast(params) {
        Toast.info(params, 1);
    }
    function toRegist() {
        var rule = [
            { name: 'userName', checkType: 'notnull', checkRule: '4,16',  errorMsg: '请填写昵称后再提交' },
            { name: 'userName', checkType: 'string', checkRule: '2,12', errorMsg: '昵称长度2-12个字符' },
            { name: 'email', checkType: 'notnull', checkRule: '', errorMsg: '请填写邮箱后再提交' },
            { name: 'email', checkType: 'email', checkRule: '', errorMsg: '邮箱格式错误' },
            { name: 'QQ', checkType: 'notnull', checkRule: '', errorMsg: '请填写QQ后再提交' },
            { name: 'password', checkType: 'password', errorMsg: '密码长度为6~20字符' },
            { name: 'password', checkType: 'notnull', errorMsg: '请填写密码后再提交' },
            { name: 'password2', checkType: 'notnull', errorMsg: '请输入确认密码后再提交' },
        ];
        if(password !== password2){
            toast('前后密码不一致');
            return ;
        }
        var checkRes = graceChecker.check({QQ, email, userName, password, password2}, rule);
        if (!checkRes) {
            toast(graceChecker.error);
        } else {
            console.log("regist");
            regist({QQ, email, userName, password, password2}).then(({ data, status })=>{
                console.log(data)
                switch (data.infoCode) {
                    case '200':
                        toast(data.infoText);
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
        <>
            <Head title="注册"/>    
            <div className="regist-input">
                <InputItem title="昵称" placeholder="请输入昵称" bind={(e)=>{setUserName(e)}}/>
                <InputItem title="邮箱" placeholder="请输入邮箱" bind={(e)=>{setEmail(e)}}/>
                <InputItem title="QQ号" placeholder="请输入QQ号" bind={(e)=>{setQQ(e)}}/>
                <InputItem title="密码" placeholder="请输入密码" bind={(e)=>{setPassword(e)}} type="password"/>
                <InputItem title="确认密码" placeholder="请确认密码" bind={(e)=>{setPassword2(e)}} type="password"/>
            </div>
            <ButtonItem text="注册" className="regist top" bind={()=>{toRegist()}}/>
            
        </>
    )
}

export default Regist