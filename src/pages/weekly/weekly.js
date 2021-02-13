import Index from "../../components/Index";
import Head from "../../components/Head";
function Weekly(props) {
    return (
        <>
            <Head title="我的周报" isBack={ false }/>
            <div className="info-model">
                <div className="info-title">第276周</div>
                <div className="info-group">Web前端组: 12121</div>
            </div> 
            <Index active="1"/>
        </>
    )
}

export default Weekly;