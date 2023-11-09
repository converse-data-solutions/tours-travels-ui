"use client";
import React from "react";
import AddUser from "../AddUser";

const EditUser = ({ params }: { params: { id: number } }) => {
  const id = params.id;

  return (
    <>
      <div>
        <AddUser isEditMode={true} isHeadpart={true} />
      </div>
    </>
  );
};
export default EditUser;
