import React, { useState } from "react";
import Form from "../../../../components/Form";

const ServiceHighlights = () => {
  const initialFields = [
    {
      id: "image",
      type: "image",
      label: "Service Image",
      value: null,
      warning: "Please upload a banner image.",
      showWarning: true,
    },
    {
      id: "title",
      type: "textEditor",
      label: "Service Title",
      value: "",
      warning: "Please enter the title.",
      showWarning: true,
    },
    {
      id: "description",
      type: "textEditor",
      label: "Service Description",
      value: "",
      warning: "Please enter the description.",
      showWarning: true,
    },
    {
      id: "link",
      type: "text",
      label: "Link",
      value: "",
      warning: "Please enter the path.",
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
        apiEndpoint="/service/service-highlights/"
        identifierField="id"
        showAddItems={true} 
      />
    </div>
  );
};

export default ServiceHighlights;