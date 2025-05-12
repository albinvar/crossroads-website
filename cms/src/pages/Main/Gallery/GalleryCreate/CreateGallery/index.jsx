import React, { useState } from "react";
import Form from "../../../../../components/Form";

const CreateGallery = () => {
  const initialFields = [
    {
      id: "image",
      type: "image",
      label: "Gallery Image",
      value: "",
      warning: "Please upload a gallery image.",
      showWarning: true,
    },
    {
      id: "title",
      type: "textEditor",
      label: "Gallery Title",
      value: "",
      warning: "Please enter the title.",
      showWarning: true,
    },
    {
      id: "year",
      type: "textEditor",
      label: "Year",
      value: "",
      warning: "Please enter the year.",
      showWarning: true,
    },
    {
      id: "link",
      type: "text",
      label: "Slug (e.g., germany)",
      value: "",
      warning: "Please enter the slug.",
      showWarning: true,
    },
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <Form
        sectionName="Gallery Create Section"
        dataSets={[
          {
            name: "Fields",
            fields: mainSet,
            setFields: setMainSet,
            template: initialFields,
            showEntryButtons: false,
          },
        ]}
        editMode={editMode}
        setEditMode={setEditMode}
        apiEndpoint="/gallery/gallery-create/"
        identifierField="id"
        showAddItems={false}
      />
    </div>
  );
};

export default CreateGallery;