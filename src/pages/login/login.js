import InputItem from "../../components/InputItem";
import ButtonItem from "../../components/ButtonItem";
function Login(props) {
    return (
        <>
            <div className="login-head">
                <img src={'/static/time.png'} />
                <span>煎饼计划</span>
            </div>
            <InputItem title="邮箱" placeholder="请输入邮箱"/>
            <InputItem title="密码" placeholder="请输入密码" type="password"/>

            <ButtonItem href="/home/home" text="登录" className="top"/>
            <ButtonItem href="/regist/regist" text="注册" className="ghost botton"/>


        </>
    )
}

export default Login