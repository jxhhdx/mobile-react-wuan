import Head from "../../components/Head";
import InputItem from "../../components/InputItem";
import ButtonItem from "../../components/ButtonItem";
import { useSelector } from 'react-redux';
import { updateUserName } from "../../axios/index.js";
import { useDispatch } from 'react-redux';
import { Toast } from "antd-mobile";
import { userInfoAction } from "../../redux/action";
import { useRouter } from 'next/router';
import { useState } from "react";
import graceChecker from "../../utils/graceChecker";
function Rename() {
    const userInfo = useSelector((state) => state.data);
    console.log(JSON.stringify(userInfo, null, 2))
    const [userName, setUserName] = useState('');
    const router = useRouter()
    const dispatch = useDispatch();
    function toast(params) {
        Toast.info(params, 1);
    }
    function toRename() {
        var rule = [
            { name: 'userName', checkType: 'notnull', checkRule: '', errorMsg: '请输入昵称' },

        ];
        var checkRes = graceChecker.check({ id: userInfo.userId, userName }, rule);
        if (!checkRes) {
            toast(graceChecker.error);
        } else {
            console.log("login");
            updateUserName({ id: userInfo.userId, userName }).then(({ data, status }) => {
                console.log(data)
                switch (data.infoCode) {
                    case '200':
                        toast(data.infoText);
                        let now = Object.assign({}, userInfo)
                        now.userName = data.userName
                        dispatch(userInfoAction(now))
                        router.push("/user/user")
                        break;
                    default:
                        toast(data.infoText);
                        break;
                }
            })
        }
    }

    return (
        <div className="rename-main">
            <Head title="修改昵称" />
            <InputItem bind={(e) => { setUserName(e) }} noTitle="false" placeholder="请输入要修改的昵称" clear={true} />
            <div className="rename-tips">昵称必须为2-12个字符，仅支持英文、中文字符。</div>
            <ButtonItem bind={() => { toRename() }} text="确认修改" className="user" />
        </div>
    )
}

export default Rename;