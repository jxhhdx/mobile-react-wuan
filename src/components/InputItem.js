import { useState } from "react";
function InputItem(props) {
    const { title, noTitle, placeholder, type, className, clear, bind } = props
    const cn = className ? className : "";
    const [val, setVal] = useState("")
    const model = (event) => {
        setVal(event.target.value);
        typeof bind == 'function' ? bind(event.target.value) : ''
    }
    function selectInputType(params = "text") {
        // params: password、text、other
        return <input type={params} placeholder={placeholder} value={val} onChange={model} />;
    }
    return (
        <div className={"conponent-input " + cn}>

            {noTitle === undefined || noTitle == false ? <div>{title}</div> : <span> </span>}
            { selectInputType(type)}
            {clear === true ? <i className="iconfont icon-clear" /> : ""}
        </div>
    )

}

export default InputItem