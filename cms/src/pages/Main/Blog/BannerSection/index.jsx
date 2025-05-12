import React, { useState } from "react";
import Form from "../../../../components/Form";

const BannerSection = () => {
  const initialFields = [
    {
      id: "image",
      type: "image",
      label: "Banner Image",
      value: "",
      warning: "Please upload a banner image.",
      showWarning: true,
    },
    {
      id: "title",
      type: "textEditor",
      label: "Title",
      value: "",
      warning: "Please enter the title.",
      showWarning: true,
    }
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <Form
        sectionName="Banner Section"
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
        apiEndpoint="/blog/blog-banner/"
        identifierField="id"
        showAddItems={false}
      />
    </div>
  );
};

export default BannerSection;