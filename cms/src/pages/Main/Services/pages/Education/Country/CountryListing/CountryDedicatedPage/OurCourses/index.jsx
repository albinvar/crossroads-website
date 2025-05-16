import React, { useState, useEffect } from 'react';
import apiClient from '../../../../../../../../../api/apiClient';
import sanitizeHtml from 'sanitize-html';
import Form from '../../../../../../../../../components/Form';

const OurCourses = () => {
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
            label: 'Course Image',
            value: '',
            warning: 'Please upload the image.',
            showWarning: true,
        },
        {
            id: 'title',
            type: 'textEditor',
            label: 'Course Title',
            value: '',
            warning: 'Please enter the title.',
            showWarning: true,
        },
        {
            id: 'description',
            type: 'textEditor',
            label: 'Course Description',
            value: '',
            warning: 'Please enter the description.',
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
                sectionName="Our Courses Listing Section"
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
                apiEndpoint="/service/service-destination-our-courses-listing/"
                identifierField="id"
                showAddItems={true}
            />
        </div>
    );
};

export default OurCourses;