import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface DraftEditingProps {
  value: string;
  onEditorChange: (content: string) => void;
}

export default function DraftEditing({
  value,
  onEditorChange,
}: DraftEditingProps) {
  const handleChange = (content: string) => {
    onEditorChange(content);
  };

  return (
    <ReactQuill
      value={value}
      onChange={handleChange}
      className="rounded-lg border-[1px]  border-gray-200 focus:outline-none focus:border-gray-400  h-[150px] "
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
      }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
      ]}
    />
  );
}
