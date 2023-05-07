import React from 'react';
import TypeWriter from 'typewriter-effect';
import myResume from '../../assets/images/EliPrunedaResume.pdf';
import { saveAs } from 'file-saver';

function downloadPDF() {
  saveAs(myResume, 'EliPrunedaResume.pdf');
}

function PDFViewer(props) {
  return (
    <div>
      <embed src={props.pdf} type="application/pdf" width="100%" height="600px" />
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="resume-title">
      <h1><TypeWriter
      onInit={(typewriter)=>{
        typewriter.typeString(`My Resume:`)
        .callFunction(() =>{
          console.log('Message typed out!');
        })
        .start();
      }}
      />
      </h1> 
      <div>
      <PDFViewer pdf={myResume} />
      </div>
    </div>
  );
}
