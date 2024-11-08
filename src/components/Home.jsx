import React, { useState } from 'react'

const Home = (props) => {
    const [text, setText] = useState("Enter your text")

    const checkEmptyText = () => {
        if (text == "") {
            props.showAlert('danger', 'Textarea is empty')
            return true
        }
        return false
    }

    const handleUpperCase = () => {
        if (checkEmptyText()) return
        if (text === text.toUpperCase()) {
            props.showAlert('warning', 'Nothing to Convert')
        } else {
            setText(text.toUpperCase())
            props.showAlert('success', 'Converted to Uppercase')
        }
    }

    const handleLowerCase = () => {
        if (checkEmptyText()) return
        if (text === text.toLowerCase()) {
            props.showAlert('warning', 'Nothing to Convert')
        } else {
            setText(text.toLowerCase())
            props.showAlert('success', 'Converted to Lowercase')
        }
    }

    const handleClearTextArea = () => {
        if (checkEmptyText()) return
        setText("")
        props.showAlert('success', 'Textarea Cleared')
    }

    const handleCopy = () => {
        if (checkEmptyText()) return
        navigator.clipboard.writeText(text);
        props.showAlert('success', 'Text copied to clipboard')
    }

    const handleDownload = () => {
        if (checkEmptyText()) return
        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'text.txt';
        link.click();
        props.showAlert('success', 'Text downloaded');
    }

    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }

    return (
        <div>
            <div className="container mt-4">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong><h3>Example textarea</h3></strong></label>
                <textarea className="form-control" value={text} name={text} onChange={handleChange} placeholder={text} id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className='btn btn-primary mx-2 my-3' onClick={handleUpperCase}>Uppercase</button>
                <button className='btn btn-primary mx-2 my-3' onClick={handleLowerCase}>Lowercase</button>
                <button className='btn btn-success mx-2 my-3' onClick={handleCopy}>Copy</button>
                <button className='btn btn-success mx-2 my-3' onClick={handleDownload}>Download</button>
                <button className='btn btn-danger mx-2 my-3' onClick={handleClearTextArea}>Clear</button>
            </div>
            <div className='container py-3'>
                <div className='row'>
                    <div className='col-4'>
                        <h4>Analyze Your Text</h4>
                        <p><strong>Words Count: </strong>{text.length == 0 ? 0 : text.split(/\S+/g).length - 1}</p>
                        <p><strong>Character Count: </strong>{text.replace(/ /g, "").length}</p>
                        <p><strong>Estimated Reading Time: </strong>{(text.replace(/ /g, "").length / 1200).toFixed(2)} minutes</p>
                    </div>
                    <div className='col-8'>
                        <h4>Preview Text</h4>
                        <p>{text.length > 0 ? text : "No text to display."}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home
