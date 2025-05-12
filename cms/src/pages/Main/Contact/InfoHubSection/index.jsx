import React, { useState } from "react";
import Form from "../../../../components/Form";

const InfoHubSection = () => {
  const initialFields = [
    {
      id: "address",
      type: "textEditor",
      label: "Address",
      value: "",
      warning: "Please enter the address.",
      showWarning: true,
    },
    {
      id: "phone",
      type: "textEditor",
      label: "Phone",
      value: "",
      warning: "Please enter the phone number.",
      showWarning: true,
    },
    {
      id: "email",
      type: "textEditor",
      label: "Email",
      value: "",
      warning: "Please enter the email address.",
      showWarning: true,
    }
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <Form
        sectionName="Info Section"
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
        apiEndpoint="/contact/contact-info-hub/"
        identifierField="id"
        showAddItems={false}
      />
    </div>
  );
};

export default InfoHubSection;