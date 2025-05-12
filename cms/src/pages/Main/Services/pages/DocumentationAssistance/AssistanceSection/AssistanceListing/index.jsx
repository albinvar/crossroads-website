import React, { useState, useEffect } from 'react';
import apiClient from '../../../../../../../api/apiClient';
import Form from '../../../../../../../components/Form';

const AssistanceListing = () => {
  const [assistanceTabs, setAssistanceTabs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const removeHtmlTags = (str) => {
    if (typeof str !== 'string') return '';
    return str.replace(/<\/?[^>]*>/g, '').trim();
  };

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get('/service/service-documentation-assistance-tabs/')
      .then((response) => {
        const tabs = response.data.map((item) => ({
          value: item.id,
          label: removeHtmlTags(item.tab_name),
        }));
        setAssistanceTabs(tabs);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching tabs:', err);
        setError('Failed to load tabs.');
        setIsLoading(false);
      });
  }, []);

  const initialFields = [
    {
      id: 'tab',
      type: 'select',
      label: 'Select Tab',
      value: '',
      options: assistanceTabs,
      warning: 'Please select a tab.',
      showWarning: true,
    },
    {
      id: 'image',
      type: 'image',
      label: 'Assistance Image',
      value: null,
      warning: 'Please choose an assistance image.',
      showWarning: true,
    },
    {
      id: 'title',
      type: 'textEditor',
      label: 'Assistance Title',
      value: '',
      warning: 'Please enter the assistance title.',
      showWarning: true,
    },
    {
      id: 'description',
      type: 'textEditor',
      label: 'Assistance Description',
      value: '',
      warning: 'Please enter the assistance description.',
      showWarning: true,
    }
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setMainSet((prev) =>
      prev.map((field) =>
        field.id === 'tab' ? { ...field, options: assistanceTabs } : field
      )
    );
  }, [assistanceTabs]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div>
      <Form
        sectionName="Add Assistance Listings"
        dataSets={[
          {
            name: 'Listing Fields',
            fields: mainSet,
            setFields: setMainSet,
            template: initialFields,
            showEntryButtons: true,
          },
        ]}
        editMode={editMode}
        setEditMode={setEditMode}
        apiEndpoint="/service/service-documentation-assistance-listings/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default AssistanceListing;