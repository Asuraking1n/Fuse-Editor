import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'

const Editor = (props) => {

    const {language,displayName,value,onChange} = props
    const [open, setOpen] = useState(true)
    function handelChange(editor, data,value){
        onChange(value)
    }
    return (
        <>
            <div className={`editor-container ${open ? '':'collapsed'}`}>
                <div className="editor-title">
                    {displayName}
                    <button
                    type="button"
                    className="expand-collapse-btn"
                    onClick={()=> setOpen(prevOpen=>!prevOpen)}
                    >
                        {open ? <i class="fas fa-compress-alt"></i> : <i class="fas fa-expand-alt"></i>}
                    </button>
                </div>
                <ControlledEditor
                    onBeforeChange={handelChange}
                    value={value}
                    className="code-mirror-wrapper"
                    options={{
                        lineWrapping:true,
                        lintL:true,
                        mode:language,
                        theme:"material",
                        lineNumbers:true
                    }}

                />
            </div>
        </>
    )
}

export default Editor;
