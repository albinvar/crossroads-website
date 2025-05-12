import React, { useState } from "react";
import Form from "../../../../components/Form";

const MissionVisionFormSection = () => {
  const initialFields = [
    {
      id: "video",
      type: "video",
      label: "Mission Vision Video",
      value: "",
      warning: "Please upload a video.",
      showWarning: true,
    },
    {
      id: "video_thumbnail_image",
      type: "image",
      label: "Video Thumbnail Image",
      value: "",
      warning: "Please upload a thumbnail image.",
      showWarning: true,
    },
    {
      id: "mission_image",
      type: "image",
      label: "Mission Image",
      value: "",
      warning: "Please upload a mission image.",
      showWarning: true,
    },
    {
      id: "mission_title",
      type: "textEditor",
      label: "Mission Title",
      value: "",
      warning: "Please enter the mission title.",
      showWarning: true,
    },
    {
      id: "mission_description",
      type: "textEditor",
      label: "Mission Description",
      value: "",
      warning: "Please enter the mission description.",
      showWarning: true,
    },
    {
      id: "vision_image",
      type: "image",
      label: "Vision Image",
      value: "",
      warning: "Please upload a vision image.",
      showWarning: true,
    },
    {
      id: "vision_title",
      type: "textEditor",
      label: "Vision Title",
      value: "",
      warning: "Please enter the vision title.",
      showWarning: true,
    },
    {
      id: "vision_description",
      type: "textEditor",
      label: "Vision Description",
      value: "",
      warning: "Please enter the vision description.",
      showWarning: true,
    },
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <Form
        sectionName="Mission Vision Section"
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
        apiEndpoint="/about/about-mission-vision/"
        identifierField="id"
        showAddItems={false}
      />
    </div>
  );
};

export default MissionVisionFormSection;