import { useRouter } from 'next/router'

function Into(props) {
    const { title, text, isBack, status, href } = props;
    const router = useRouter();
    return (
        <div onClick={() => { href ? router.push(href) : "" }} className={`into-main${status === false ? " into-main-ban" : ""}`}>
            <span className="into-title">{title}</span>
            { text === undefined ? "" : <span>{text}</span>}
            { isBack === false ? "" : <i className="iconfont icon-jinru"></i>}
        </div>
    )
}

export default Into;