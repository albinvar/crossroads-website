import React, { useState } from "react";
import Form from "../../../../../components/Form";

const VideoWithContent = () => {
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
      id: "video",
      type: "video",
      label: "Testimonial Video",
      value: "",
      warning: "Please upload a video.",
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
        sectionName="Video with Content"
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
        apiEndpoint="/home/testimonial-videos/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default VideoWithContent;