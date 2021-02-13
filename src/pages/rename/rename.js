import Head from "../../components/Head";
import InputItem from "../../components/InputItem";
import ButtonItem from "../../components/ButtonItem";
function Rename() {
    return (
        <div className="rename-main">
            <Head title="修改昵称" />
            <InputItem noTitle="false" placeholder="请输入要修改的昵称"  clear={ true }  />
            <div className="rename-tips">昵称必须为2-12个字符，仅支持英文、中文字符。</div>
            <ButtonItem text="确认修改" className="user"/>
        </div>
    )
}

export default Rename;