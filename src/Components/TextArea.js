import React,{useState} from 'react'

export default function TextArea(props) {

     /* useState is the hooks which helps in using class's features without making class */
    /* if we have something in default so it is the state of that element */
    /* text is the state variable which consist of the default value(state) that is defined after =,and i am updating my text whenever i type with the help of setText function 
    we need function to update state in react we cannot update it directly*/

    let Uppercase = ()=>{
        let upper=text.toUpperCase();
        setText(upper) /*setText function will change the state and it will rerendered. anything comes inside setText function so, function will set it equal to text*/
        props.ShowAlert("Converted to UpperCase","success")
    }

    let Lowercase=()=>{

        let lower=text.toLowerCase();
        setText(lower)
        props.ShowAlert("Converted to LowerCase","success")
        
    }
    
    let WhiteSpaces=()=>{
        
        let str=text.split(/\s+/).join(" ")
        setText(str)
        props.ShowAlert("White Spaces Removed","success")
        
    }

    let CopyText=()=>{

        navigator.clipboard.writeText(text);
        props.ShowAlert("Copied to Clipboard","success")
     }
    
    let ClearText=()=>{
        setText("");
        props.ShowAlert("Text Cleared","success")
    }

    // handling event
    let OnChangeFunc=(event)=>{
       setText(event.target.value)
    }

    // setting state using hooks
    const [text, setText] = useState("");
    
    return (
        <>
        <div  style={{color: props.mode==='dark'?'white':'black'}}>

            <h1 className='my-3' >TextCookie - Word Counter, Character Counter, Uppercase to Lowercase, Lowercase to Uppercase </h1>
            <div className="mb-3 ">
                {/* we want to change the bgcolor and color of text so we use props.mode for bgcolor and color inside an object */}
              <textarea className="form-control " style={{backgroundColor: props.mode==='dark'?'#24252A':'white', color:props.mode==='dark'?'white':'black'}} onChange={OnChangeFunc} value={text} id="myTextArea" rows="10"></textarea>
            </div>

            <button disabled={text.length===0} className="btn-u btn-info mx-1 my-2 rounded" onClick={Uppercase}>Uppercase</button>
            <button disabled={text.length===0} className="btn-l btn-info mx-1 my-2 rounded" onClick={Lowercase}>Lowercase</button>
            <button disabled={text.length===0} className="btn-l btn-info mx-1 my-2 rounded" onClick={ClearText}>Clear Text</button>
            <button disabled={text.length===0} className="btn-l btn-info mx-1 my-2 rounded" onClick={CopyText}>Copy Text</button>
            <button disabled={text.length===0} className="btn-l btn-info mx-1 my-2 rounded" onClick={WhiteSpaces}>White Spaces</button>
         

        </div>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 className="ts">Text Summary</h2>
            {/* /\s+/ regular expression which splits spaces including new line and one or more */}
            <p className="ts">{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words , {text.length} Characters</p>  
            <h2>Preview</h2>
            <p>{text===''?'Nothing to Preview':text}</p>

        </div>
        </>
    )
}
