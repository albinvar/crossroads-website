import React, { useState } from "react";
import Form from "../../../../../../components/Form";

const LanguageLabSection = () => {
  const initialFields = [
    {
      id: "main_title",
      type: "textEditor",
      label: "Main Title",
      value: "",
      warning: "Please enter the title.",
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
            showEntryButtons: true,
          },
        ]}
        editMode={editMode}
        setEditMode={setEditMode}
        apiEndpoint="/service/service-language-lab-listings/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default LanguageLabSection;