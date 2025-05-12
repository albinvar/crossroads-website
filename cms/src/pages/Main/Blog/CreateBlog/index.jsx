import React, { useState } from "react";
import Form from "../../../../components/Form";

const CreateBlog = () => {
    const initialFields = [
        {
            id: "image",
            type: "image",
            label: "Blog Image",
            value: "",
            warning: "Please upload a banner image.",
            showWarning: true,
        },
        {
            id: "title",
            type: "textEditor",
            label: "Blog Title",
            value: "",
            warning: "Please enter the title.",
            showWarning: true,
        },
        {
            id: "dedicated_page_title",
            type: "textEditor",
            label: "Blog Detail Page Title",
            value: "",
            warning: "Please enter the title.",
            showWarning: true,
        },
        {
            id: "description",
            type: "textEditor",
            label: "Description",
            value: "",
            warning: "Please enter the description.",
            showWarning: true,
        },
        {
            id: "date_manual",
            type: "textEditor",
            label: "Date (e.g., Feb 28, 2025).",
            value: "",
            warning: "Please enter the date.",
            showWarning: true,
        },
        {
            id: "link",
            type: "text",
            label: "Slug",
            value: "",
            warning: "Please enter the slug.",
            showWarning: true,
        },
        {
            id: "content",
            type: "textEditor",
            label: "Contents",
            value: "",
            warning: "Please enter the contents.",
            showWarning: true,
        },
    ];

    const [mainSet, setMainSet] = useState(initialFields);
    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            <Form
                sectionName="Create Blog Post"
                dataSets={[
                    {
                        name: "Fields",
                        fields: mainSet,
                        setFields: setMainSet,
                        template: initialFields,
                        showEntryButtons: false,
                    },
                ]}
                editMode={editMode}
                setEditMode={setEditMode}
                apiEndpoint="/blog/blog-post-create/"
                identifierField="id"
                showAddItems={false}
            />
        </div>
    );
};

export default CreateBlog;