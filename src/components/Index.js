import { useRouter } from 'next/router'
function Index(props) {
    let { active="0" } = props;
    let box = [
        { text: "首页", src: "homepage.png", href:"/home/home"},
        { text: "周报", src: "weekly.png", href:"/weekly/weekly"},
        { text: "我的", src: "we.png", href:"/user/user"}
    ];
    function returnBox () {
        return box.map((item, num)=>{
            let isActive =  (active == num);
            const router = useRouter()
            return (
                <div className="index-item" key={num} onClick={()=> !isActive?router.push(item.href): "" }>
                    <img src={ isActive ? `/home/_${item.src}` : `/home/${item.src}` } />
                    <span className={ isActive? "active" : "" }>{ item.text }</span>
                </div>
            )
        })
    }

    return (
        <div className="index">
            { returnBox() }
        </div>
    )

}

export default Index