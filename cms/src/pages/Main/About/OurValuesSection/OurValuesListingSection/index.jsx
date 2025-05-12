import React, { useState } from "react";
import Form from "../../../../../components/Form";

const OurValuesListingSection = () => {
  const initialFields = [
    {
      id: "image",
      type: "image",
      label: "Image",
      value: "",
      warning: "Please choose the file.",
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
        sectionName="Our Values Section"
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
        apiEndpoint="/about/about-our-values/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default OurValuesListingSection;