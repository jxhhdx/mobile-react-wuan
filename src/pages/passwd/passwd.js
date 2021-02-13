import Head from "../../components/Head";
import InputItem from "../../components/InputItem";
import ButtonItem from "../../components/ButtonItem";
function Passwd(props) {
    return (
        <div className="passwd-main">
            <Head title="修改密码" />
            <InputItem title="原密码" placeholder="请输入原密码"/>
            <InputItem title="新密码" placeholder="请输入新密码"/>
            <InputItem title="确认新密码" placeholder="请再次输入密码"/>
            <div className="passwd-tips">新密码长度必须为6-20个字符，由数字、英文字母、特殊符号组成。</div>
            <ButtonItem text="确认修改" className="user"/>
        </div>
    )
}

export default Passwd;