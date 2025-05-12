import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import apiClient from '../../../../api/apiClient';
import Form from '../../../../components/Form';
import CourseDetailWhyChooseSection from '../CourseDetailWhyChooseSection';

const CourseDetailWhyChooseTitleCreate = () => {
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
      id: 'title',
      type: 'textEditor',
      label: 'Why Choose Title',
      value: '',
      warning: 'Please enter the why choose title.',
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
    <div className="space-y-6">
      <Form
        sectionName="Course Why Choose Title Create Section"
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
        apiEndpoint="/courses/course-why-choose-title-entry/"
        identifierField="id"
        showAddItems={true}
      />
      <CourseDetailWhyChooseSection />
    </div>
  );
};

export default CourseDetailWhyChooseTitleCreate;