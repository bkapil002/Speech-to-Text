import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Recipe = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleStart = () => {
    resetTranscript(); 
    SpeechRecognition.startListening({ continuous: true, language: selectedLanguage });
  };

  const handlePause = () => {
    SpeechRecognition.abortListening(); 
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <h1>Speech to Text</h1>
      <textarea class="form-control my-4" id="exampleFormControlTextarea1" rows="8"  value={transcript || ''} onChange={(event) => {}} readOnly ></textarea>
      <div className='mx-2 my-3'>
        <label htmlFor="language" class="dropdown-menu ">Select Language:</label>
        <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="en-US">English (US)</option>
          <option value="es-ES">Spanish (Spain)</option>
          <option value="hi-IN">Hindi (India)</option>
        </select>
      </div>
      <div>
        <button onClick={handleStart} disabled={listening} className="btn btn-success mx-2 my-4" type='button'>Start</button>
        <button onClick={handlePause} disabled={!listening} className="btn btn-danger" type='button'>Pause</button>
      </div>
    </div>
  );
};

export default Recipe;
