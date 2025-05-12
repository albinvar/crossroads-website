import React, { useState } from "react";
import Form from "../../../../../components/Form";

const EducationListing = () => {
  const initialFields = [
    {
      id: "course_image",
      type: "image",
      label: "Free Education Image",
      value: "",
      warning: "Please choose the course image.",
      showWarning: true,
    },
    {
      id: "title",
      type: "textEditor",
      label: "Free Education Title",
      value: "",
      warning: "Please enter the course title.",
      showWarning: true,
    },
    {
      id: "description",
      type: "textEditor",
      label: "Free Education Description",
      value: "",
      warning: "Please enter the course description.",
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
        sectionName="Free Education Courses Listing Section"
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
        apiEndpoint="/courses/free-education-courses/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default EducationListing;