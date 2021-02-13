import Head from "../../components/Head";
import InputItem from "../../components/InputItem";
import ButtonItem from "../../components/ButtonItem";

function Regist(props) {
    return (
        <>
            <Head title="注册"/>    
            <div className="regist-input">
                <InputItem title="昵称" placeholder="请输入昵称"/>
                <InputItem title="邮箱" placeholder="请输入邮箱"/>
                <InputItem title="QQ号" placeholder="请输入QQ号"/>
                <InputItem title="密码" placeholder="请输入密码" type="password"/>
                <InputItem title="确认密码" placeholder="请确认密码" type="password"/>
            </div>
            <ButtonItem text="注册" className="regist top"/>
            
        </>
    )
}

export default Regist