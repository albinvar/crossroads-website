import React, { useState, useEffect } from 'react';
import Form from "../../../../../../../../../components/Form";
import apiClient from '../../../../../../../../../api/apiClient';
import sanitizeHtml from 'sanitize-html';

const TitleSection = () => {
  const [data, setData] = useState([]);

  const sanitizeLabel = (html) => {
    return sanitizeHtml(html, {
      allowedTags: [], 
      allowedAttributes: {},
    }).trim();
  };

  useEffect(() => {
    apiClient
      .get('/service/service-destination-banner-entry/')
      .then((response) => {
        const cleanedData = response.data.map((page) => ({
          value: page.id,
          label: sanitizeLabel(page.banner_title || `Page ${page.id}`),
        }));
        setData(cleanedData);
      })
      .catch((err) => console.error('Error fetching pages:', err));
  }, []);

  const initialFields = [
    {
      id: 'subcategory',
      type: 'select',
      label: 'Select a Page',
      value: '',
      options: data,
      warning: 'Please select a page.',
      showWarning: true,
    },
    {
      id: 'image',
      type: 'image',
      label: 'Why Choose Background Image',
      value: '',
      warning: 'Please choose the background image.',
      showWarning: true,
    },
    {
      id: 'title',
      type: 'textEditor',
      label: 'Why Choose Title',
      value: '',
      warning: 'Please enter the title.',
      showWarning: true,
    },
    {
      id: 'description',
      type: 'textEditor',
      label: 'Why Choose Description',
      value: '',
      warning: 'Please enter the description',
      showWarning: true,
    },
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setMainSet((prev) =>
      prev.map((field) =>
        field.id === 'subcategory' ? { ...field, options: data } : field
      )
    );
  }, [data]);

  return (
    <div>
      <Form
        sectionName="Why Choose Title Section"
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
        apiEndpoint="/service/service-destination-choose-title-entry/"
        identifierField="id" 
        showAddItems={false}
      />
    </div>
  );
};

export default TitleSection;