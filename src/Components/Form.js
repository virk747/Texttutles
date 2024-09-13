import React, { useState } from 'react';
export default function Form(props) {
    const [text, setText] = useState('');

    const handleonchange = (event) => {
        setText(event.target.value);
    }

    const handleonclick = () => {
        setText(text.toUpperCase());
        props.showAlert("The text is converted to uppercase", "danger");
    }

    const handleonclick1 = () => {
        setText(text.toLowerCase());
        props.showAlert("The text is converted to lowercase", "danger");
    }

    const handleonclick2 = () => {
        navigator.clipboard.writeText(text);
        alert('Copied the text: ' + text); // Optional: Show an alert when the text is copied
        props.showAlert("The text is copied to clipboard", "danger");
    };

    const wordcount = text.trim().split(/\s+/).filter(word => word !== "").length;
    const characters = text.length;

    return (
        <>
            <div className="container my-5">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleonchange} rows="7"></textarea>
                    <button type="button" className="btn btn-secondary my-4" onClick={handleonclick}>To Uppercase</button>
                    <button type="button" className="btn btn-secondary my-4 mx-3" onClick={handleonclick1}>To Lowercase</button>
                    <button type="button" className="btn btn-secondary my-4 mx-3" onClick={handleonclick2}>Copy Text</button>
                </div>
            </div>
            <div className='container my-5'>
                <h1>Text Summary</h1>
                <h4>Preview of Your Text</h4>
                <p>{text}</p>
                <p>There are {wordcount} words in your text.</p>
                <p>There are {characters} characters in your text.</p>
            </div>
        </>
    );
}
