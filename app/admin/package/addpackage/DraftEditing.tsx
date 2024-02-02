import React from "react";
import { Editor } from "@tinymce/tinymce-react";



interface DraftEditingProps {
  name: string;
  value: string;
  customValue: string;
  onEditorChange: (initialValue: string) => void;
}

export default function DraftEditing({
  value,
  onEditorChange,
}: DraftEditingProps) {
  const handleEditorChange = (content: any, editor: any) => {
    console.log("Content was updated:", content);
    onEditorChange(content);
  };

  return (
    <Editor
      apiKey={"azqt4vmow77bdh7mzzwm60rxbt26j893pjd86wik5qa1069g"}
      value={value}
      init={{
        height: 300,
        menubar: true,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar: `undo redo | formatselect | |
        bold italic backcolor | alignleft aligncenter alignright alignjustify | 
        bullist numlist outdent indent | removeformat | help redo | |
        formatselect | bold italic underline strikethrough bullist numlist | help`,
      
      }}
      onEditorChange={handleEditorChange}
    />
  );
}
