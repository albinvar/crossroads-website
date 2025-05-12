import React, { useState } from "react";
import Form from "../../../../components/Form";

const AboutSection = () => {
  const initialFields = [
    {
      id: "title",
      type: "textEditor",
      label: "Title",
      value: "",
      warning: "Please enter the title.",
      showWarning: true,
    },
    {
      id: "subtitle",
      type: "textEditor",
      label: "Subtitle",
      value: "",
      warning: "Please enter the subtitle.",
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
      warning: "Please enter the link.",
      showWarning: true,
    }
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <Form
        sectionName="About Section"
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
        apiEndpoint="/about/about-highlights/"
        identifierField="id"
        showAddItems={false}
      />
    </div>
  );
};

export default AboutSection;