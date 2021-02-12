function ButtonItem(props) {
    let { text, className : cn  } = props
    if(!cn){
        cn = "primary"
    } 
    if(typeof cn === "string" && !cn.includes("ghost") && !cn.includes("primary") ){
        cn = "primary " + cn 
    }
     
    return (
        <div className="button-item">
            <div className={ cn }>{ text }</div>
        </div>
    )
    
}

export default ButtonItem