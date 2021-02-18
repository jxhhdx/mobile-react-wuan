import Index from "../../components/Index";
import Head from "../../components/Head";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { Picker, List } from 'antd-mobile';
import { viewReport } from "../../axios/index.js";
import { Toast } from "antd-mobile";

function Weekly(props) {
    const userInfo = useSelector((state) => state.data);
    const [cw, setCw] = useState(userInfo.currWeek); // 设置当前查看的周数
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState(1);
    const [data, setData] = useState({});
    function toast(params) {
        Toast.info(params, 1);
    }
    function clickOpen() {
        if (isOpen) {
            return;
        }
        setIsOpen(!isOpen);
    }
    const dataSource = () => {
        let arr = [];
        for (let i = 0; i < userInfo.currWeek; i++) {
            arr.unshift({ value: `${i}`, label: `第${i + 1}周` })
        }
        return arr
    }
    function onOkCallback([e]) {
        toViewReport((+e) + 1)
        setIsOpen(false)
        console.log((+e) + 1)

    }
    function onDismissCallback() {
        setIsOpen(false)
    }
    function toViewReport(param) {
        if (typeof param != 'number' || param <= 0 || param > userInfo.currWeek || param == cw) {
            return;
        }
        viewReport({ userId: userInfo.userId, weekNum: param }).then(({ data }) => {
            console.log(data)
            switch (data.code) {
                case '200':
                    setCw(param)
                    if(data.data.status == 2){
                        setStatus(2)
                        setData(data.data)
                        break;
                    }
                    setStatus(3)
                    break;
                default:
                    setCw(param);
                    setStatus(1)
                    break;
            }
        })
    }
    return (
        <>
            <Head title="我的周报" isBack={false} />
            <div className="info-model">
                <div className="info-title">{userInfo.groupName}: {userInfo.userName}</div>
                <div className="info-group">提交时间:{ status==1||status==3?'无': data.replyTimeStr}</div>
                <Picker data={dataSource()} cols={1} className="forss" onOk={(e) => onOkCallback(e)} onDismiss={() => onDismissCallback()}>
                    <div className="picker-container" onClick={() => clickOpen()}>
                        第{cw}周
                    <i className={`iconfont ${isOpen ? 'icon-shang' : 'icon-xia'}`} />
                    </div>
                </Picker>

            </div>
            <div className="weekly-content">
                {
                    status==1?(<>
                        <img className="weekly-img" src="/home/weekly_not.JPG"/>
                    </>):(status==3?(<>
                        <img className="weekly-img" src="/home/weekly_leave.JPG"/>
                    </>):(
                        <div className="weekly-content2">
                            <div className="weekly-main">
                                <div className="weekly-title">
                                    <span className="p">·</span>
                                    <span className="name">本周完成：</span>
                                </div>
                                <div className="weekly-text">
                                    { data.complete }
                                </div>
                            </div>
                            <div className="weekly-main">
                                <div className="weekly-title">
                                    <span className="p">·</span>
                                    <span className="name">所遇问题：</span>
                                </div>
                                <div className="weekly-text">
                                    { data.trouble }
                                </div>
                            </div>
                            <div className="weekly-main">
                                <div className="weekly-title">
                                    <span className="p">·</span>
                                    <span className="name">下周计划：</span>
                                </div>
                                <div className="weekly-text">
                                    { data.plane }
                                </div>
                            </div>
                            <div className="weekly-main">
                                <div className="weekly-title">
                                    <span className="p">·</span>
                                    <span className="name">作品链接：</span>
                                </div>
                                <div className="weekly-text">
                                    { data.url }
                                </div>
                            </div>
                        </div>
                    ))    
                }
                
            </div>
            <Index active="1" />


        </>
    )
}

export default Weekly;