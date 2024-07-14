import React, { useState, useEffect } from 'react';

const PyodideComponent = () => {
  const [code, setCode] = useState('sum([1, 2, 3, 4, 5])');
  const [output, setOutput] = useState('Initializing...\n');
  const [pyodide, setPyodide] = useState(null);

  useEffect(() => {
    const loadPyodideScript = async () => {
      const pyodideScript = document.createElement('script');
      pyodideScript.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js';
      pyodideScript.onload = async () => {
        const pyodide = await loadPyodide();
        setPyodide(pyodide);
        setOutput((prevOutput) => prevOutput + 'Ready!\n');
      };
      document.body.appendChild(pyodideScript);
    };

    loadPyodideScript();
  }, []);

  const addToOutput = (s) => {
    setOutput((prevOutput) => prevOutput + '>>>' + code + '\n' + s + '\n');
  };

  const evaluatePython = async () => {
    if (!pyodide) return;
    try {
      let result = pyodide.runPython(code);
      addToOutput(result);
    } catch (err) {
      addToOutput(err);
    }
  };

  return (
    <div>
      <p>
        You can execute any Python code. Just enter something in the box below and
        click the button.
      </p>
      <textarea
        value={code}
        rows={4}
        className='w-[60vw] h-[20vh] border border-gray-400 m-2 p-2'
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <button className="m-2 p-1 bg-green-600 border border-green-200" onClick={evaluatePython}>Run</button>
      <br />
      <br />
      <div>Output:</div>
      <textarea
        value={output}
        style={{ width: '100%' }}
        rows="6"
        disabled
      ></textarea>
    </div>
  );
};

export default PyodideComponent;
