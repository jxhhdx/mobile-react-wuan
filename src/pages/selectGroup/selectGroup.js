import Head from "../../components/Head";
import ButtonItem from "../../components/ButtonItem";
import { findAllGroupInfo, group as goGroup } from "../../axios/index.js";
import { useEffect, useState } from "react";
import { Toast } from "antd-mobile";
import { userInfoAction } from "../../redux/action";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
function SelectGroup(props) {
    const x = <i className="iconfont icon-gou" />;
    const [group, setGroup] = useState(0);
    const [groups, setGroups] = useState([]);
    const userInfo = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const router = useRouter();
    function toast(params) {
        Toast.info(params, 1);
    }
    useEffect(() => {
        findAllGroupInfo({}).then(({ data }) => {
            console.log(data)
            switch (data.infoCode) {
                case '200':
                    setGroups(data.groups)
                    break;
                default:
                    toast(data.infoText);
                    break;
            }
        })
    }, [])
    function groupsMap() {
        return groups.map((item, index) =>
            <div key={index} onClick={() => { setGroup(index); }} className={`group-item${index == group ? ' group-active' : ''}`}>
                <span>{item.groupName}</span> {index == group ? x : ''}
            </div>
        )
    }
    function toSelect() {

        goGroup({ groupId: groups[group].id, userId: userInfo.userId}).then(({ data }) => {
            console.log(data)
            switch (data.infoCode) {
                case '200':
                    toast(data.infoText);
                    let now = Object.assign({}, userInfo)
                    now.groupName = groups[group].groupName
                    now.groupId = groups[group].id
                    dispatch(userInfoAction(now))
                    router.push("/user/user")
                    break;
                default:
                    toast(data.infoText);
                    break;
            }
        })

    }


    return (
        <div className="select-group-main">
            <Head title="请选择分组" isBack={false} />
            <div className="select-group">
                <h4>请选择分组</h4>
                {groupsMap()}
            </div>

            <ButtonItem bind={()=>{toSelect()}} text="提交" className="submit" />
        </div>
    )
}

export default SelectGroup;