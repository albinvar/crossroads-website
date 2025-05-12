import React, { useEffect, useRef } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const TextEditor = ({
  value,
  onChange,
  placeholder,
  customStyle = {},
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: ["", "center", "right", "justify"] }], 
      ["link", "image"],
      [
        { color: ["#000000", "#808080", "#FFFFFF", "#00334D", "#F9920A"] },
        { background: ["#000000", "#808080", "#FFFFFF", "#00334D", "#F9920A"] },
      ],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "link",
    "image",
    "color",
    "background",
    "align", 
  ];

  const { quill, quillRef } = useQuill({
    modules,
    formats,
    placeholder,
  });
  const isUpdating = useRef(false);

  useEffect(() => {
    if (quill) {
      const currentContent = quill.root.innerHTML;
      if (value !== currentContent && !isUpdating.current) {
        isUpdating.current = true;
        quill.clipboard.dangerouslyPasteHTML(value || "");
        isUpdating.current = false;
      }

      const handleTextChange = () => {
        if (!isUpdating.current) {
          const content = quill.root.innerHTML;
          if (content !== value) {
            onChange(content);
          }
        }
      };

      quill.on("text-change", handleTextChange);

      return () => {
        quill.off("text-change", handleTextChange);
      };
    }
  }, [quill, value, onChange]);

  useEffect(() => {
    if (quill) {
      const editorElement = quillRef.current.querySelector(".ql-editor");
      if (document.activeElement !== editorElement) {
        quill.focus();
      }
    }
  }, [quill, quillRef, value]);

  return (
    <div className="text-editor-container mb-4" style={customStyle}>
      <div
        ref={quillRef}
        className="text-editor w-full h-auto border border-gray-300"
      />
    </div>
  );
};

export default TextEditor;