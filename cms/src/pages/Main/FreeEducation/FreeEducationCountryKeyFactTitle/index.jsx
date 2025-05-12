import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import apiClient from '../../../../api/apiClient';
import Form from '../../../../components/Form';
import FreeEducationCountryKeyFactListing from '../FreeEducationCountryKeyFactListing';

const FreeEducationCountryKeyFactTitle = () => {
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
      id: "key_fact_main_title",
      type: "textEditor",
      label: "Free Education Country Key Fact Main Title",
      value: "",
      warning: "Please enter the key fact main title.",
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
    <div className='spcae-y-6'>
      <Form
        sectionName="Free Education Key Fact Main Title Section"
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
        apiEndpoint="/free-education/free-education-country-key-fact-title-entry/"
        identifierField="id"
        showAddItems={true}
      />
      <FreeEducationCountryKeyFactListing/>
    </div>
  );
};

export default FreeEducationCountryKeyFactTitle;