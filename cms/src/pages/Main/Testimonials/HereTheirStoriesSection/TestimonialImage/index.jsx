import React, { useState, useEffect } from 'react';
import apiClient from '../../../../../api/apiClient';
import Form from '../../../../../components/Form';

const TestimonialImage = ({ tabId }) => {
  const [testimonialTabs, setTestimonialTabs] = useState([]);
  const [mainSet, setMainSet] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const removeHtmlTags = (str) => {
    if (typeof str !== 'string') return '';
    return str.replace(/<\/?[^>]*>/g, '').trim();
  };

  useEffect(() => {
    apiClient.get('/testimonials/testimonials-tab/')
      .then(response => {
        const cleanedTabs = response.data.map(tab => ({
          value: tab.id,
          label: removeHtmlTags(tab.tab_name),
        }));
        setTestimonialTabs(cleanedTabs);
      })
      .catch(err => console.error('Error fetching testimonial tabs:', err));
  }, []);

  const initialFields = [
    {
      id: 'testimonials',
      type: 'select',
      label: 'Select a testimonial tab',
      value: tabId,
      options: testimonialTabs,
      warning: 'Please select a testimonial tab.',
      showWarning: true,
    },
    {
      id: 'image',
      type: 'image',
      label: 'Testimonial Image',
      value: '',
      warning: 'Please upload an image.',
      showWarning: true,
    },
    {
      id: 'name',
      type: 'textEditor',
      label: 'Name',
      value: '',
      warning: 'Please enter a name.',
      showWarning: true,
    },
    {
      id: 'flag',
      type: 'image',
      label: 'Testimonial Flag',
      value: '',
      warning: 'Please upload a flag image.',
      showWarning: true,
    },
    {
      id: 'rating',
      type: 'number',
      label: 'Testimonial Rating',
      value: '',
      warning: 'Please enter the rating.',
      showWarning: true,
    },
    {
      id: 'description',
      type: 'textEditor',
      label: 'Testimonial Description',
      value: '',
      warning: 'Please enter the description.',
      showWarning: true,
    }
  ];

  useEffect(() => {
    setMainSet(initialFields.map(field => 
      field.id === 'testimonials' ? { ...field, options: testimonialTabs } : field
    ));
  }, [testimonialTabs]);

  return (
    <Form
      sectionName="Add Image Testimonials"
      dataSets={[{
        name: 'Fields',
        fields: mainSet,
        setFields: setMainSet,
        template: initialFields,
        showEntryButtons: true,
      }]}
      editMode={editMode}
      setEditMode={setEditMode}
      apiEndpoint="/testimonials/testimonials-image-listings/"
      identifierField="id"
      showAddItems={true}
    />
  );
};

export default TestimonialImage;