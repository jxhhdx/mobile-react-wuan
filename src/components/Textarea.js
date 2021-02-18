import { useState } from "react";


function Textarea(props) {
    const { title, placeholder, bind } = props;
    const [val, setVal] = useState("");
    const model = (event) => {
        setVal(event.target.value);
        typeof bind == 'function' ? bind(event.target.value) : ''
    }
    return (
        <div className="textarea">
            <span>{ title }</span>
            <textarea  placeholder={ placeholder } value={val} onChange={model}></textarea>
        </div>
    )
}

export default Textarea;