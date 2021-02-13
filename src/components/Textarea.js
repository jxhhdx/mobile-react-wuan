function Textarea(props) {
    const { title, placeholder } = props
    return (
        <div className="textarea">
            <span>{ title }</span>
            <textarea placeholder={ placeholder }></textarea>
        </div>
    )
}

export default Textarea;