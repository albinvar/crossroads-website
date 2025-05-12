import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import apiClient from '../../../../api/apiClient';
import Form from '../../../../components/Form';

const CourseDetailWhyChooseSection = () => {
  const [courseListingData, setCourseListingData] = useState([]);

  const sanitizeLabel = (html) => {
    return sanitizeHtml(html, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim();
  };

  useEffect(() => {
    apiClient
      .get('/courses/course-listings/')
      .then((response) => {
        const cleanedData = response.data.map((item) => ({
          value: `listing_${item.id}`,
          label: sanitizeLabel(item.title || 'Unnamed Course Listing'),
        }));
        setCourseListingData(cleanedData);
      })
      .catch((err) => console.error('Error fetching course listings:', err));
  }, []);

  const initialFields = [
    {
      id: 'course',
      type: 'select',
      label: 'Select a Course Listing',
      value: '',
      options: [],
      warning: 'Please select a Course Listing.',
      showWarning: true,
    },
    {
      id: 'title',
      type: 'text',
      label: 'Why Choose Item Title',
      value: '',
      warning: 'Please enter the item title.',
      showWarning: true,
    },
    {
      id: 'description',
      type: 'textEditor',
      label: 'Why Choose Item Description',
      value: '',
      warning: 'Please enter the item description.',
      showWarning: true,
    }
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setMainSet((prev) =>
      prev.map((field) =>
        field.id === 'course' ? { ...field, options: courseListingData } : field
      )
    );
  }, [courseListingData]);

  return (
    <div>
      <Form
        sectionName="Course Why Choose Content Section"
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
        apiEndpoint="/courses/course-why-choose-entry/"
        identifierField="id"
        showAddItems={true}
        transformData={(data) => {
          const transformedData = { ...data };
          if (data.course && data.course.startsWith('listing_')) {
            transformedData.course_listing = parseInt(data.course.replace('listing_', ''));
          } else {
            transformedData.course_listing = null;
          }
          transformedData.course = null;
          delete transformedData.course; 
          return transformedData;
        }}
      />
    </div>
  );
};

export default CourseDetailWhyChooseSection;