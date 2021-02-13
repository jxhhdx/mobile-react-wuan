import Head from "../../components/Head";
import InputItem from "../../components/InputItem";
import ButtonItem from "../../components/ButtonItem";
function ExitGroup(props) {
    return (
        <div className="exit-group passwd-main">
            <Head title="退出分组" />
            <div className="text">
                <h1>你要知道，退出分组后：</h1>
                <p>除了分组信息被清空外，你的账号、周报数据会继续保留</p>
                <p>原来的账号依然可直接用于登录，不过需要重新选择分组</p>
                <p>总之欢迎回来</p>
                <p>还有，不要忘记退出相应的QQ群哦</p>
            </div>
            <ButtonItem text="我知道了，继续退出" className="user"/>
        </div>
    )
}

export default ExitGroup;