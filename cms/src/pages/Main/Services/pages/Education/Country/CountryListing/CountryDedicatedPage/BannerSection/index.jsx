import React, { useState, useEffect } from 'react';
import Form from "../../../../../../../../../components/Form";
import apiClient from '../../../../../../../../../api/apiClient';
import sanitizeHtml from 'sanitize-html';

const BannerSection = () => {
  const [data, setData] = useState([]);

  const sanitizeLabel = (html) => {
    return sanitizeHtml(html, {
      allowedTags: [], 
      allowedAttributes: {},
    }).trim();
  };

  useEffect(() => {
    apiClient
      .get('/service/service-destination-listings/')
      .then((response) => {
        const cleanedData = response.data.map((item) => ({
          value: item.slug,
          label: sanitizeLabel(item.destination_name || item.slug),
        }));
        setData(cleanedData);
      })
      .catch((err) => console.error('Error fetching destinations:', err));
  }, []);

  const initialFields = [
    {
      id: 'destination',
      type: 'select',
      label: 'Select a Destination',
      value: '',
      options: data,
      warning: 'Please select a destination.',
      showWarning: true,
    },
    {
      id: 'banner_image',
      type: 'image',
      label: 'Banner Image',
      value: null,
      warning: 'Please choose the image.',
      showWarning: true,
    },
    {
      id: 'banner_title',
      type: 'textEditor',
      label: 'Banner Title',
      value: '',
      warning: 'Please enter the title.',
      showWarning: true,
    },
    {
      id: 'banner_description',
      type: 'textEditor',
      label: 'Banner Description',
      value: '',
      warning: 'Please enter the description.',
      showWarning: true,
    },
    {
      id: 'banner_button_name',
      type: 'text',
      label: 'Button Name',
      value: '',
      warning: 'Please enter the button name.',
      showWarning: true,
    },
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setMainSet((prev) =>
      prev.map((field) =>
        field.id === 'destination' ? { ...field, options: data } : field
      )
    );
  }, [data]);

  return (
    <div>
      <Form
        sectionName="Banner Section"
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
        apiEndpoint="/service/service-destination-banner-entry/"
        identifierField="id" 
        showAddItems={true}
      />
    </div>
  );
};

export default BannerSection;