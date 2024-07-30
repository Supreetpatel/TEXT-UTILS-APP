import React,{useState} from 'react'
 
  export default function Textform(props) {
    const handleUpClick=() =>{
      let newText= text.toUpperCase();
      setText(newText);
      props.showAlert("Uppercase has been enabled" , "success");
    }

    const handleLoClick=() =>{
      let newText= text.toLowerCase();
      setText(newText);
      props.showAlert("Lowercase has been enabled" , "success");
    }

    const handleExClick=() =>{
       let newText = text.split(/[ ] +/);
       setText(newText.join(" "));
       props.showAlert("Extra space has been removed " , "success");
    }

    const handleClClick=() =>{
      let newText = " "
      setText(newText);
      props.showAlert("Text has been cleared " , "success");
    }
    

    const handeleOnChange=(event) =>{
      setText(event.target.value);
    }
    const[text,setText] = useState('');

  return (
 <>
   <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
   <h2>{props.heading}</h2>
   <div className="mb-3">
   <textarea className="form-control" value={text} onChange={handeleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white' , color:props.mode==='light'?'black':'white' }} id="mybox" rows="8"></textarea>
   </div>
   <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
   <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
   <button className="btn btn-primary mx-1 my-1" onClick={handleExClick}>Remove Extra Space</button>
   <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear Text</button>
   </div>
   <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
 </>
   )
}
