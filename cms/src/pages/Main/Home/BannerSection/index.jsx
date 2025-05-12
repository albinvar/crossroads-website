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
    },
    {
      id: "description",
      type: "textEditor",
      label: "Description",
      value: "",
      warning: "Please enter the description.",
      showWarning: true,
    },
    {
      id: "link",
      type: "text",
      label: "Link",
      value: "",
      warning: "Please enter the course slug (e.g., mbbs).",
      showWarning: true,
    },
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
        apiEndpoint="/home/home-banner/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default BannerSection;