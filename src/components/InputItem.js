function InputItem(props) {
    const { title,noTitle, placeholder, type, className, clear } = props
    const cn  = className ? className : "";
    console.log("clear", clear);
    function selectInputType(params="text") {
        switch (params) {
            case "password":
                return <input type="password" placeholder={placeholder} />;
            case "text":
                return <input type="text" placeholder={placeholder} />;
            default:
                return <input type={ params } placeholder={placeholder} />;
        }
    }
    return (
        <div className={"conponent-input " + cn}>
            
            {noTitle===undefined||noTitle==false?<div>{title}</div>:<span> </span>}
            { selectInputType(type) }
            {clear===true ? <i className="iconfont icon-clear"/>:"" }
        </div>
    )

}

export default InputItem