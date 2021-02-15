import { useRouter } from 'next/router'

function ButtonItem(props) {
    let { text, className : cn, href  } = props
    if(!cn){
        cn = "primary"
    } 
    if(typeof cn === "string" && !cn.includes("ghost") && !cn.includes("regist") && !cn.includes("white") && !cn.includes("primary") && !cn.includes("none") && !cn.includes("submit") && !cn.includes("user")){
        cn = "primary " + cn 
    }
    const router = useRouter()
    return (
        <div className="button-item">
            <div onClick={()=>{ href?router.push(href):"" }} className={ cn }>{ text }</div>
        </div>
    )
    
}

export default ButtonItem