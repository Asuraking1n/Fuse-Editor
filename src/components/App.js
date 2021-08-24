import React,{useState, useEffect} from 'react';
import '../index.css'
import Editor from './Editor';

function App() {
  const [html, sethtml] = useState('')
  const [css, setcss] = useState('')
  const [js, setjs] = useState('')
  const [srcDoc,setSrcDoc]=useState('')
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setSrcDoc(
        `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `
      )
    },250)
    return () => clearTimeout(timeOut)
  },[html,css,js])
 
  return (
    <>
      <div className="pane top-pane" >
      <Editor 
        language="xml"
        displayName="HTML"
        value={html}
        onChange={sethtml}
      />
      <Editor
        language="css"
        displayName="CSS"
        value={css}
        onChange={setcss}
      />
      <Editor
        language="javascript"
        displayName="JS"
        value={js}
        onChange={setjs}
      /></div>
      <div className="pane ">
      <iframe 
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
     /></div>
    </>
  );
}

export default App;
