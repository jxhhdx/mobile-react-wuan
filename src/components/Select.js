function Select(props) {
    const { title } = props;

    return (
        <div className="select textarea">
            <span>{ title }</span>
            <div className="select-leave">
                <div>
                    <i className="iconfont icon-gou"></i>
                    一周
                </div>
                <div>
                    <i className="iconfont icon-gou"></i>
                    两周
                </div>
                <div>
                    <i className="iconfont icon-gou"></i>
                    三周
                </div>
            </div>
        </div>
    )
}

export default Select;