import { useState } from 'react';

function TextForm() {
    //** Handel Event
    const handelUpClick = () => {
        console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handelOnChange = (event) => {
        setText(event.target.value);
    }

    //** Use State 
    const [text, setText] = useState('');
    // setText("Text to Analyze");
    return (
        <>
            <div className='container my-3'>
                <h2>TEXT MANAGER</h2>
                <textarea className="form-control mb-3 mt-3" value={text} onChange={handelOnChange} name="Textarea" rows="8" placeholder='enter some text...'></textarea>
                <button className="btn btn-primary" onClick={handelUpClick}>Convert to Uppercase</button>
            </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p><b> {text.split(" ").length} </b> Word and <b>{text.length}</b> Character </p>
                <p> <b>{0.008 * text.split(" ").length}</b> Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm;