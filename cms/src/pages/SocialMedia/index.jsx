import React, { useState } from "react";
import Form from "../../components/Form";

const SocialMedia = () => {
  const initialFields = [
    {
      id: "facebook",
      type: "text",
      label: "Facebook",
      value: "",
      warning: "Please enter the facebook link.",
      showWarning: true,
    },
    {
      id: "instagram",
      type: "text",
      label: "Instagram",
      value: "",
      warning: "Please enter the instagram link.",
      showWarning: true,
    },
    {
      id: "linkedin",
      type: "text",
      label: "Linkedin",
      value: "",
      warning: "Please enter the linkedin link.",
      showWarning: true,
    },
    {
      id: "youtube",
      type: "text",
      label: "Youtube",
      value: "",
      warning: "Please enter the youtube link.",
      showWarning: true,
    },
    {
      id: "whatsapp",
      type: "number",
      label: "Whatsapp",
      value: "",
      warning: "Please enter the whatsapp number.",
      showWarning: true,
    },
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <Form
        sectionName="Social Media Management"
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
        apiEndpoint="/social-media/social-media-links/"
        identifierField="id"
        showAddItems={false}
      />
    </div>
  );
};

export default SocialMedia;