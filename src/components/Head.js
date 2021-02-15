
function Head(props) {
    const { title, isBack } = props 
    
    return (
        <div className="head">
            { isBack===undefined?<i className="iconfont icon-left" onClick={()=>{ history.back() }}/> : "" }
            <span>{ title }</span>
        </div>
    )
}

export default Head;