import React, { useState } from 'react';
import Editor, { EditorProps } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export type JsonEditorProps = {
  /**
   * a node to be rendered in the special component.
   */
  theme?: 'light' | 'dark';
  readOnly?: boolean;
} & EditorProps;

export function JsonEditor({
  value = '',
  readOnly = false,
  onChange = () => {},
  width = '100%',
  height = '100%',
  theme = 'light',
  ...rest
}: JsonEditorProps) {
  const [errorStyle, setErrorStyle] = useState({});

  const handleEditorValidation = (markers: monaco.editor.IMarker[]) => {
    const errStyleVar = { border: '1px solid red' };
    if (markers.length > 0) {
      setErrorStyle(errStyleVar);
    } else {
      setErrorStyle({});
    }
  };

  const handleMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    const formatDoc = () => editor.getAction('editor.action.formatDocument').run();
    editor.onDidPaste(formatDoc);
    setTimeout(formatDoc, 500);
  };

  return (
    <div style={{ height, width, ...errorStyle }}>
      <Editor
        {...rest}
        language="json"
        value={value}
        onChange={onChange}
        onMount={handleMount}
        onValidate={handleEditorValidation}
        options={{
          readOnly,
          lineNumbers: 'off',
          minimap: {
            enabled: false,
          },
        }}
        theme={theme === 'light' ? 'light' : 'vs-dark'}
      />
    </div>
  );
}
