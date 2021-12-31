

export default function About(props) {


  return (
    <div>
      <h1 className="heading my-5" style={{backgroundColor:props.mode==='dark'?'dark':'light',color:props.mode==='dark'?'white':'black'}}>About Us</h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#333':'white',color:props.mode==='dark'?'white':'black'}}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor:props.mode==='dark'?'#333':'white',color:props.mode==='dark'?'white':'black'}}
            >
              <strong>Easy to Use.</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            All text tools are simple, free and easy to use. Just load text, get result on One Click.
            </div>
          </div>
        </div>
              
        <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#333':'white',color:props.mode==='dark'?'white':'black'}} >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor:props.mode==='dark'?'#333':'white',color:props.mode==='dark'?'white':'black'}}
            >
              <strong>No Garbage.</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            There are no intrusive ads, popups or other garbage.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#333':'white',color:props.mode==='dark'?'white':'black'}}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor:props.mode==='dark'?'#333':'white',color:props.mode==='dark'?'white':'black'}}
            >
              <strong>Perfect in your Browser.</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            
            A text utilities that work right in your browser.

            </div>
          </div>
        </div>
      </div>

      {/* <div className="container my-3">
      <button onClick={toggleStyle} type="button" className="btn-primary">{btntext}</button>
      </div> */}

    </div>
  );
}
