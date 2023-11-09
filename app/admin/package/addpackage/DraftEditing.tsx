
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

interface DraftEditingProps {
  name: string;
  value: string;
  onEditorChange: (content: string) => void;
}

export default function DraftEditing({ onEditorChange }: DraftEditingProps) {
  const handleEditorChange = (content: any, editor: any) => {
    console.log("Content was updated:", content);
    onEditorChange(content);
  };

  return (
    <Editor
       apiKey={""}
      init={{
        height: 300,
        menubar: true,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic underline strikethrough bullist numlist | help",
      }}
      onEditorChange={handleEditorChange}
    />
  );
}
