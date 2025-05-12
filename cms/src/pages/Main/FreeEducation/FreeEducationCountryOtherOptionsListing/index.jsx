import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import apiClient from '../../../../api/apiClient';
import Form from '../../../../components/Form';

const FreeEducationCountryOtherOptionsListing = () => {
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
      id: 'list_title',
      type: 'textEditor',
      label: 'Other Option Title',
      value: '',
      warning: 'Please enter the option title.',
      showWarning: true,
    },
    {
      id: 'content',
      type: 'textEditor',
      label: 'Other Option Content',
      value: '',
      warning: 'Please enter the option content.',
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
        sectionName="Free Education Country Other Options Listing Section"
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
        apiEndpoint="/free-education/free-education-country-other-options-listing-entry/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default FreeEducationCountryOtherOptionsListing;