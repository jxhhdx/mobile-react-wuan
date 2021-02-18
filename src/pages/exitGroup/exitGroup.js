import Head from "../../components/Head";
import ButtonItem from "../../components/ButtonItem";
import { quitGroup } from "../../axios/index.js";
import { userInfoAction, emailAction } from "../../redux/action";
import { Toast, Modal } from "antd-mobile";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
function ExitGroup(props) {
    
    const userInfo = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const router = useRouter();
    function toast(params) {
        Toast.info(params, 1);
    }
    function toQuitGroup() {

        quitGroup({ id: userInfo.userId }).then(({ data, status }) => {
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
            <ButtonItem bind={(e) => {
                Modal.alert('退出分组', '你确定要退出分组？', [
                        { text: '取消', onPress: () => console.log('cancel') },
                        { text: '确定', onPress: toQuitGroup },
                    ])
            }} text="我知道了，继续退出" className="user" />
        </div>
    )
}

export default ExitGroup;