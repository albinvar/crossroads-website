import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import apiClient from '../../../../api/apiClient';
import Form from '../../../../components/Form';

const CourseDetailedBannerSection = () => {
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
          value: item.id,
          label: sanitizeLabel(item.title || 'Unnamed Course Listing'),
        }));
        setCourseListingData(cleanedData);
      })
      .catch((err) => console.error('Error fetching course listings:', err));
  }, []);

  const initialFields = [
    {
      id: 'course_listing',
      type: 'select',
      label: 'Select a Course Listing',
      value: '',
      options: [],
      warning: 'Please select a Course Listing.',
      showWarning: true,
    },
    {
      id: 'banner_image',
      type: 'image',
      label: 'Course Banner Image',
      value: '',
      warning: 'Please choose the banner image.',
      showWarning: true,
    },
    {
      id: 'banner_title',
      type: 'textEditor',
      label: 'Course Banner Title',
      value: '',
      warning: 'Please enter the banner title.',
      showWarning: true,
    },
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setMainSet((prev) =>
      prev.map((field) =>
        field.id === 'course_listing' ? { ...field, options: courseListingData } : field
      )
    );
  }, [courseListingData]);

  return (
    <div>
      <Form
        sectionName="Courses Dedicated Page Banner Section"
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
        apiEndpoint="/courses/course-banner-entry/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default CourseDetailedBannerSection;