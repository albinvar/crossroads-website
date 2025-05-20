import React, { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({
  value,
  onChange,
  placeholder,
  customStyle = {},
  warningMessage,
}) => {
  const quillRef = useRef(null);
  const isUpdating = useRef(false);
  const prevValue = useRef(value);

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

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      if (value !== prevValue.current && !isUpdating.current) {
        isUpdating.current = true;
        try {
          quill.clipboard.dangerouslyPasteHTML(value || '');
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
    }
  }, [value, onChange]);

  useEffect(() => {
    if (quillRef.current && !value) {
      const quill = quillRef.current.getEditor();
      const editorElement = quillRef.current.getEditor().root;
      if (editorElement && document.activeElement !== editorElement) {
        quill.focus();
      }
    }
  }, [value]);

  return (
    <div className="text-editor-container mb-4" style={customStyle}>
      <ReactQuill
        ref={quillRef}
        value={value}
        onChange={(content, delta, source, editor) => {
          if (source === 'user' && !isUpdating.current) {
            const html = editor.getHTML() === '<p><br></p>' ? '' : editor.getHTML();
            onChange(html);
          }
        }}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        className="text-editor w-full h-auto border border-gray-300"
      />
      {warningMessage && (
        <p className="text-xs text-red-500 mt-1">{warningMessage}</p>
      )}
    </div>
  );
};

export default TextEditor;