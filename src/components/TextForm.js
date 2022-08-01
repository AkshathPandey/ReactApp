import React,{useState} from 'react';

export default function TextForm(props) {
    const [text,setText]=useState("Enter Text Here")
    //we can not change the value of text as text="enter text here-2"
    // correct way to change the value f text is setText("Enter Text here-2");
    const handleUpperCaseClick=()=>{
        console.log("Upper case button was clicked...");
        let upCase=text.toUpperCase();
        setText(upCase);
    }
    const handleLowerCaseClick=()=>{
        console.log("Lower case button was clicked...");
        let loCase=text.toLowerCase();
        setText(loCase);
    }
    const handleOnChange=(event)=>{
        console.log("On change trigged...");
        setText(event.target.value);
    }
  return (
    <>
    <div className="container">
    <h3>{props.heading}</h3>
    <form>
        <div className="form-group">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-4 mx-2" onClick={handleUpperCaseClick}>Convert To UpperCase</button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleLowerCaseClick}>Convert To LowerCase</button>

    </form>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>Words are {text.split(" ").length} letters are {text.length}</p>
    </div>
    </>
  )
}


