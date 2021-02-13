import { Icon } from 'antd-mobile';

function Head(props) {
    const { title, isBack } = props 
    
    return (
        <div className="head">
            { isBack===undefined?<i className="iconfont icon-left"/> : "" }
            <span>{ title }</span>
        </div>
    )
}

export default Head;