import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import apiClient from '../../../../api/apiClient';
import Form from '../../../../components/Form';
import FreeEducationCountryRequirementsListing from '../FreeEducationRequirementsListing';

const FreeEducationCountryRequirementsTitle = () => {
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
      id: "requirement_background_image",
      type: "image",
      label: "Requirements Section Background Image",
      value: "",
      warning: "Please upload the background image.",
      showWarning: true,
    },
    {
      id: "requirement_title",
      type: "textEditor",
      label: "Requirements Section Main Title",
      value: "",
      warning: "Please enter the main title.",
      showWarning: true,
    },
    {
      id: "requirement_description",
      type: "textEditor",
      label: "Requirements Section Description",
      value: "",
      warning: "Please enter the description.",
      showWarning: true,
    },
    {
      id: "content",
      type: "textEditor",
      label: "Requirements Section Additional Information",
      value: "",
      warning: "Please enter the additional information.",
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
    <div className='space-y-6'>
      <Form
        sectionName="Free Education Country Requirements Title Section"
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
        apiEndpoint="/free-education/free-education-country-requirements-title-entry/"
        identifierField="id"
        showAddItems={true}
      />
      <FreeEducationCountryRequirementsListing/>
    </div>
  );
};

export default FreeEducationCountryRequirementsTitle;