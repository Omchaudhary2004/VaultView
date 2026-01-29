import React, { useState } from 'react';

function InputCheck() {
  const [text, setText] = useState("");

  // Check if trimmed length is 0
  const isEmpty = text.trim().length === 0;

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
      
      {/* Conditionally show a message */}
      {isEmpty ? <p style={{color: 'red'}}>Input is empty!</p> : <p>Great, you're typing!</p>}
      
      {/* Disable button if empty */}
      <button disabled={isEmpty}>Submit</button>
    </div>
  );
}
export default InputCheck;