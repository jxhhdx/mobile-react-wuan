import Index from "../../components/Index";
import Head from "../../components/Head";
import Into from "../../components/Into";
import ButtonItem from "../../components/ButtonItem";
import { useSelector } from 'react-redux';

function User(props) {
    const data = useSelector((state) => state.data)
    const email = useSelector((state) => state.email)
    return (
        <div className="user-main">
            <Head title="我的账号" isBack={ false }/>
            <div className="user-logo">
                <img src="/images/logo.png" />
                <span>{ data.groupName }</span>
            </div> 
            <div className="global-hr"></div>
            <Into href="/rename/rename" title="昵称" text={ data.userName }/>
            <Into title="邮箱" text={ email } isBack={ false } status={ false }/>
            <Into href="/passwd/passwd" title="修改密码" />
            <Into href="/exitGroup/exitGroup" title="退出分组" />
            <ButtonItem href="/login/login" text="退出登陆" className="user"/>
            <Index active="2"/>
        </div>
    )
}

export default User;