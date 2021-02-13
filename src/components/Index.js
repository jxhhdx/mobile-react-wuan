
function Index(props) {
    let { active="0" } = props;
    let box = [
        { text: "首页", src: "homepage.png"},
        { text: "周报", src: "weekly.png"},
        { text: "我的", src: "we.png"}
    ];
    function returnBox () {
        return box.map((item, num)=>{
            let isActive =  (active == num);
            return (
                <div className="index-item" key={num}>
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