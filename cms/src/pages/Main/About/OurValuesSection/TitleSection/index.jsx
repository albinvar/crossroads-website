import React, { useState } from "react";
import Form from "../../../../../components/Form";

const TitleSection = () => {
  const initialFields = [
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
        sectionName="Our Values Title Section"
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
        apiEndpoint="/about/about-our-values-title/"
        identifierField="id"
        showAddItems={false}
      />
    </div>
  );
};

export default TitleSection;