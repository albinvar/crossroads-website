import React, { useState, useEffect } from 'react';
import Form from '../../../../../components/Form';
import apiClient from '../../../../../api/apiClient';

const Course = () => {
  const [popularCourses, setPopularCourses] = useState([]);

  const removeHtmlTags = (str) => {
    if (typeof str !== 'string') return '';
    return str.replace(/<\/?[^>]*>/g, '').trim();
  };

  useEffect(() => {
    apiClient
      .get('/courses/popular-courses/')
      .then((response) => {
        const cleanedCourses = response.data.map((course) => ({
          value: course.id,
          label: removeHtmlTags(course.tab_name), 
        }));
        setPopularCourses(cleanedCourses);
      })
      .catch((err) => console.error('Error fetching popular courses:', err));
  }, []);

  const initialFields = [
    {
      id: 'popular_course',
      type: 'select',
      label: 'Select a course',
      value: '',
      options: popularCourses,
      warning: 'Please select a course.',
      showWarning: true,
    },
    {
      id: 'image',
      type: 'image',
      label: 'Popular Course Image',
      value: '',
      warning: 'Please choose the course image.',
      showWarning: true,
    },
    {
      id: 'title',
      type: 'textEditor',
      label: 'Popular Course Title',
      value: '',
      warning: 'Please enter the course title.',
      showWarning: true,
    },
    {
      id: 'description',
      type: 'textEditor',
      label: 'Popular Course Description',
      value: '',
      warning: 'Please enter the course description.',
      showWarning: true,
    },
    {
      id: 'link',
      type: 'text',
      label: 'Link',
      value: '',
      warning: 'Please enter the link.',
      showWarning: true,
    },
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setMainSet((prev) =>
      prev.map((field) =>
        field.id === 'popular_course' ? { ...field, options: popularCourses } : field
      )
    );
  }, [popularCourses]);

  return (
    <div>
      <Form
        sectionName="Add Courses"
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
        apiEndpoint="/courses/course-listings/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default Course;