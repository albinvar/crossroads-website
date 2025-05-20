import React, { useEffect, useRef, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const TextEditor = ({
  value,
  onChange,
  placeholder,
  customStyle = {},
  warningMessage,
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: ['', 'center', 'right', 'justify'] }],
      ['link', 'image'],
      [
        { color: ['#000000', '#808080', '#FFFFFF', '#00334D', '#F9920A'] },
        { background: ['#000000', '#808080', '#FFFFFF', '#00334D', '#F9920A'] },
      ],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    'header',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'link',
    'image',
    'color',
    'background',
    'align',
  ];

  const { quill, quillRef } = useQuill({
    modules,
    formats,
    placeholder,
  });

  const isUpdating = useRef(false);
  const prevValue = useRef(value);
  const [isEditorReady, setIsEditorReady] = useState(false);

  // Effect to set editor readiness
  useEffect(() => {
    if (quill) {
      setIsEditorReady(true);
    }
  }, [quill]);

  // Effect to handle content synchronization and text-change events
  useEffect(() => {
    if (!isEditorReady || !quill) return;

    if (value !== prevValue.current && !isUpdating.current) {
      isUpdating.current = true;
      try {
        if (value) {
          quill.clipboard.dangerouslyPasteHTML(value);
        } else {
          quill.setText('');
        }
      } catch (err) {
        console.error('Error setting Quill content:', err);
      }
      isUpdating.current = false;
      prevValue.current = value;
    }

    const handleTextChange = () => {
      if (!isUpdating.current) {
        isUpdating.current = true;
        const content = quill.root.innerHTML === '<p><br></p>' ? '' : quill.root.innerHTML;
        if (content !== value) {
          onChange(content);
          prevValue.current = content;
        }
        isUpdating.current = false;
      }
    };

    quill.on('text-change', handleTextChange);

    return () => {
      quill.off('text-change', handleTextChange);
    };
  }, [isEditorReady, quill, value, onChange]);

  // Effect to handle editor focus
  useEffect(() => {
    if (!isEditorReady || !quill || !quillRef.current) return;

    if (!value) {
      const editorElement = quillRef.current.querySelector('.ql-editor');
      if (editorElement && document.activeElement !== editorElement) {
        quill.focus();
      }
    }
  }, [isEditorReady, quill, quillRef, value]);

  return (
    <div className="text-editor-container mb-4" style={customStyle}>
      <div
        ref={quillRef}
        className="text-editor w-full h-auto border border-gray-300"
      />
      {warningMessage && (
        <p className="text-xs text-red-500 mt-1">{warningMessage}</p>
      )}
    </div>
  );
};

export default TextEditor;