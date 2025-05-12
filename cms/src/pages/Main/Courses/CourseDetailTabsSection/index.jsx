import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import apiClient from '../../../../api/apiClient';
import Form from '../../../../components/Form';

const CourseDetailTabsSection = () => {
  const [courseListingData, setCourseListingData] = useState([]);
  const [tabData, setTabData] = useState([]);

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

    apiClient
      .get('/courses/course-tab-entry/')
      .then((response) => {
        const cleanedData = response.data.map((item) => ({
          value: item.id,
          label: sanitizeLabel(item.tab_name || 'Unnamed Tab'),
        }));
        setTabData(cleanedData);
      })
      .catch((err) => console.error('Error fetching tabs:', err));
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
      id: 'tab',
      type: 'select',
      label: 'Select a Tab',
      value: '',
      options: [],
      warning: 'Please select a Tab.',
      showWarning: true,
    },
    {
      id: 'background_image',
      type: 'image',
      label: 'Section Image',
      value: '',
      warning: 'Please upload a section image.',
      showWarning: true,
    },
    {
      id: 'content',
      type: 'textEditor',
      label: 'Content',
      value: '',
      warning: 'Please enter the content.',
      showWarning: true,
    }
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setMainSet((prev) =>
      prev.map((field) =>
        field.id === 'course'
          ? { ...field, options: courseListingData }
          : field.id === 'tab'
          ? { ...field, options: tabData }
          : field
      )
    );
  }, [courseListingData, tabData]);

  return (
    <div>
      <Form
        sectionName="Course Tab Content Create Section"
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
        apiEndpoint="/courses/course-tab-content-entry/"
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

export default CourseDetailTabsSection;