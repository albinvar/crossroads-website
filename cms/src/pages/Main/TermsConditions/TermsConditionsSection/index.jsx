import React, { useState } from "react";
import Form from "../../../../components/Form";

const TermsConditionsSection = () => {
  const initialFields = [
    {
      id: "content",
      type: "textEditor",
      label: "Content",
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
        sectionName="Terms and Conditions Content Section"
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
        apiEndpoint="/terms-and-conditions/terms-conditions-content/"
        identifierField="id"
        showAddItems={false}
      />
    </div>
  );
};

export default TermsConditionsSection;