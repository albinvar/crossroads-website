import React, { useState, useEffect } from "react";
import apiClient from "../../../../../../api/apiClient";
import Form from "../../../../../../components/Form";

const AddVideo = () => {
  const [galleryTabs, setGalleryTabs] = useState([]);
  const [mainSet, setMainSet] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const removeHtmlTags = (str) => {
    if (typeof str !== "string") return "";
    return str.replace(/<\/?[^>]*>/g, "").trim();
  };

  useEffect(() => {
    apiClient
      .get("/gallery/gallery-create/")
      .then((response) => {
        const cleanedTabs = response.data.map((tab) => ({
          value: tab.id,
          label: removeHtmlTags(tab.title),
        }));
        setGalleryTabs(cleanedTabs);
      })
      .catch((err) => console.error("Error fetching gallery tabs:", err));
  }, []);

  const initialFields = [
    {
      id: "gallery",
      type: "select",
      label: "Select a gallery",
      value: "",
      options: galleryTabs,
      warning: "Please select a gallery.",
      showWarning: true,
    },
    {
      id: "video",
      type: "video",
      label: "Gallery Video",
      value: "",
      warning: "Please upload a video.",
      showWarning: true,
      accept: "video/*",
    },
  ];

  useEffect(() => {
    setMainSet(
      initialFields.map((field) =>
        field.id === "gallery" ? { ...field, options: galleryTabs } : field
      )
    );
  }, [galleryTabs]);

  return (
    <Form
      sectionName="Add Video to Gallery"
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
      apiEndpoint="/gallery/gallery-video-listing/"
      identifierField="id"
      showAddItems={true}
    />
  );
};

export default AddVideo;