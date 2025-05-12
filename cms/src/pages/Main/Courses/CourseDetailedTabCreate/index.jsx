import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import apiClient from '../../../../api/apiClient';
import Form from '../../../../components/Form';
import CourseDetailTabsSection from '../CourseDetailTabsSection';

const CourseDetailedTabCreate = () => {
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
      id: 'tab_name',
      type: 'text',
      label: 'Tab Name',
      value: '',
      warning: 'Please enter the tab name.',
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
    <div className="space-y-6">
      <Form
        sectionName="Course Tab Create Section"
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
        apiEndpoint="/courses/course-tab-entry/"
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
      <CourseDetailTabsSection />
    </div>
  );
};

export default CourseDetailedTabCreate;