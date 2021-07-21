import React from "react";
import './App.css'

export default function Textbox(){
    function closeBox(e){
        e.preventDefault();
        alert("A stitch in time saves nine! Please input your information now to make your journey with us easier for you later.")
    }
    function handleSubmit(e){
        e.preventDefault();
        alert("Congratulations! You are a part of the Holy City Software family. A welcome email will be sent to you shortly.")
    }
    return(
        <div className="textbox">
            <button className="close" onClick={closeBox}>x</button>
            <h1>Primary Report 2021</h1>
            <p>Enter email addresses seperated by coma</p>
            <input autoFocus={true} type="email" className="email" placeholder="John.doe@pharmacy.net"/>
            <p>Add a note</p>
            <textarea className="text" placeholder="Optional"/>
            <button className="cancel" onClick={closeBox}>Cancel</button>
            <button className="share" onClick={handleSubmit}>Share Report</button>
        </div>
    )
}
