import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import apiClient from '../../../../api/apiClient';
import Form from '../../../../components/Form';

const FreeEducationCountryBanner = () => {
  const [data, setData] = useState([]);

  const sanitizeLabel = (html) => {
    return sanitizeHtml(html, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim();
  };

  useEffect(() => {
    apiClient
      .get('/free-education/free-education-country/')
      .then((response) => {
        const cleanedData = response.data.map((item) => ({
          value: item.id, 
          label: sanitizeLabel(item.country_name || 'Unnamed Country'),
        }));
        setData(cleanedData);
      })
      .catch((err) => console.error('Error fetching free education countries:', err));
  }, []);

  const initialFields = [
    {
      id: 'free_education_country',
      type: 'select',
      label: 'Select a Free Education Country',
      value: '',
      options: data,
      warning: 'Please select a Free Education Country.',
      showWarning: true,
    },
    {
      id: "banner_image",
      type: "image",
      label: "Free Education Country Banner Image",
      value: "",
      warning: "Please choose the banner image.",
      showWarning: true,
    },
    {
      id: "banner_title",
      type: "textEditor",
      label: "Free Education Country Banner Title",
      value: "",
      warning: "Please enter the banner title.",
      showWarning: true,
    },
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setMainSet((prev) =>
      prev.map((field) =>
        field.id === 'free_education_country' ? { ...field, options: data } : field
      )
    );
  }, [data]);

  return (
    <div>
      <Form
        sectionName="Free Education Dedicated Page Banner Section"
        dataSets={[
          {
            name: 'Fields',
            fields: mainSet,
            setFields: setMainSet,
            template: initialFields,
            showEntryButtons: true,
          },
        ]}
        editMode={editMode}
        setEditMode={setEditMode}
        apiEndpoint="/free-education/free-education-country-banner-entry/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default FreeEducationCountryBanner;