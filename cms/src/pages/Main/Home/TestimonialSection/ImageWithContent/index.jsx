import React, { useState } from "react";
import Form from "../../../../../components/Form";

const ImageWithContent = () => {
  const initialFields = [
    {
      id: "name",
      type: "textEditor",
      label: "Testimonial Name",
      value: "",
      warning: "Please enter the name.",
      showWarning: true,
    },
    {
      id: "image",
      type: "image",
      label: "Testimonial Image",
      value: "",
      warning: "Please upload a image.",
      showWarning: true,
    },
    {
      id: "flag",
      type: "image",
      label: "Testimonial Flag",
      value: "",
      warning: "Please upload a flag image.",
      showWarning: true,
    },
    {
      id: "ratings",
      type: "number",
      label: "Testimonial Ratings",
      value: "",
      warning: "Please enter the rating.",
      showWarning: true,
    },
    {
      id: "description",
      type: "textEditor",
      label: "Testimonial Description",
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
        sectionName="Image with Content"
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
        apiEndpoint="/home/testimonial-images/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default ImageWithContent;