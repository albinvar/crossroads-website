import React, { useState } from "react";
import Form from "../../../../../components/Form";

const CountryListing = () => {
  const initialFields = [
    {
      id: "country_image",
      type: "image",
      label: "Free Education Country Image",
      value: "",
      warning: "Please choose the country image.",
      showWarning: true,
    },
    {
      id: "country_name",
      type: "textEditor",
      label: "Free Education Country Name",
      value: "",
      warning: "Please enter the country name.",
      showWarning: true,
    },
    {
      id: "link",
      type: "text",
      label: "Slug",
      value: "",
      warning: "Please enter a unique slug.",
      showWarning: true,
    },
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <Form
        sectionName="Free Education Country Listing Section"
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
        apiEndpoint="/free-education/free-education-country/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default CountryListing;