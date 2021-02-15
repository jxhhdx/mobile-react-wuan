import Head from "../../components/Head";
import ButtonItem from "../../components/ButtonItem";
function SelectGroup(props) {
    const x = <i className="iconfont icon-gou"/>
    return (
        <div className="select-group-main">
            <Head title="请选择分组" isBack={ false }/>
            <div className="select-group">
                <h4>请选择分组</h4>
                <div className="group-item">Web前端组{x}</div>
                <div className="group-item">UI设计组</div>
                <div className="group-item">产品经理组</div>
                <div className="group-item">Java组</div>
            </div>

            <ButtonItem text="提交" className="submit"/>
        </div>
    )
}

export default SelectGroup;