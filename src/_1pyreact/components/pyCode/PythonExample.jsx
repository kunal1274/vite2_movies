

import React, { useEffect, useState } from 'react';

const PyodideExample = () => {
    const [value,setValue]= useState(0);
  useEffect(() => {
    const main = async () => {
      const pyodideScript = document.createElement('script');
      pyodideScript.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js';
      pyodideScript.onload = async () => {
        const pyodide = await loadPyodide();
        // console.log(pyodide.runPython(`
        //   import sys
        //   sys.version
        // `));
        // pyodide.runPython("print(6 +4)");
        function javascriptConvertedOutput(pythonCode){
            const pythonOutput = pyodide.runPython(pythonCode)
            return pythonOutput
        }
        const pythoncodeParam = (a,b)=>{ `
def suma(a,b):
    return (a+b)

suma(a,b)
        `
        }
        
        // const output = pyodide.runPython(`
        //     import sys
        //     x = sys.version

        //     def sum():
        //         return (2+3)
        //     #print(sum())
        //     [x," divider ",sum()]
        //     `);
        const reactOutput = javascriptConvertedOutput(()=>pythoncodeParam(7,4))
        setValue(reactOutput);
      };
      document.body.appendChild(pyodideScript);
    };

    main();
  }, []);

  return (
    <div>
      Pyodide test page <br />
      Open your browser console to see Pyodide output
      <p>Value of the sum : {value}</p>
    </div>
  );
};

export default PyodideExample;
