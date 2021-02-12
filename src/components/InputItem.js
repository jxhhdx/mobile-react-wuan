function InputItem(props) {
    const { title, placeholder, type, className } = props
    const cn  = className ? className : "";

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
            <div>{title}</div>
            { selectInputType(type) }
        </div>
    )

}

export default InputItem