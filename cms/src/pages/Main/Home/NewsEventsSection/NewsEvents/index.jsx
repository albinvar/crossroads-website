import React, { useState } from "react";
import Form from "../../../../../components/Form";

const NewsEvents = () => {
    const initialFields = [
        {
            id: "image",
            type: "image",
            label: "News Events Image",
            value: "",
            warning: "Please choose the image.",
            showWarning: true,
        },
        {
            id: "title",
            type: "textEditor",
            label: "News Events Title",
            value: "",
            warning: "Please enter the title.",
            showWarning: true,
        },
        {
            id: "description",
            type: "textEditor",
            label: "News Events Description",
            value: "",
            warning: "Please enter the description.",
            showWarning: true,
        },
        {
            id: "link",
            type: "text",
            label: "Link",
            value: "",
            warning: "Please enter the link.",
            showWarning: true,
        }
    ];

    const [mainSet, setMainSet] = useState(initialFields);
    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            <Form
                sectionName="News and Events Section"
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
                apiEndpoint="/home/news-events/"
                identifierField="id"
                showAddItems={true}
            />
        </div>
    );
};

export default NewsEvents;