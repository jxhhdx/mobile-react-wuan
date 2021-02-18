import InputItem from "../../components/InputItem";
import ButtonItem from "../../components/ButtonItem";
import graceChecker  from "../../utils/graceChecker";
import { useState } from "react";
import { Toast } from "antd-mobile";
import { login } from "../../axios/index.js";
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { userInfoAction,emailAction } from "../../redux/action";
function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const dispatch = useDispatch()
    function toast(params) {
        Toast.info(params, 1);
    }
    function tologin() {
        var rule = [
            { name: 'email', checkType: 'notnull', checkRule: '', errorMsg: '请输入账号后再提交' },
            { name: 'password', checkType: 'notnull', checkRule: '', errorMsg: '请输入密码后再提交' },
        ];
        var checkRes = graceChecker.check({email, password}, rule);
        if (!checkRes) {
            toast(graceChecker.error);
        } else {
            console.log("login");
            login({email, password}).then(({ data, status })=>{
                console.log(data)
                switch (data.infoCode) {
                    case '200':
                        toast(data.infoText);
                        dispatch(userInfoAction(data))
                        dispatch(emailAction(email))
                        if(data.groupId === 0){
                            router.push("/selectGroup/selectGroup")
                            break;
                        }
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
            <div className="login-head">
                <img src={'/static/time.png'} />
                <span>煎饼计划</span>
            </div>
            <InputItem title="邮箱" placeholder="请输入邮箱" bind={(e)=>{setEmail(e)}}/>
            <InputItem title="密码" placeholder="请输入密码" bind={(e)=>{setPassword(e)}} type="password"/>

            <ButtonItem bind={()=>{tologin()}} text="登录" className="top"/>
            <ButtonItem href="/regist/regist" text="注册" className="ghost botton"/>
        </>
    )
}

export default Login