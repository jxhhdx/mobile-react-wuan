function Into(props) {
    const { title, text, isBack, status } = props
    return (
        <div className={`into-main${ status === false?" into-main-ban":""}`}>
            <span className="into-title">{title}</span>
            { text === undefined ? "" : <span>{text}</span> }
            { isBack === false ? "" : <i className="iconfont icon-jinru"></i>}
        </div>
    )
}

export default Into;