import React, { useState } from "react";
import Form from "../../../../../components/Form";

const TitleSection = () => {
    const initialFields = [
        {
            id: "image",
            type: "image",
            label: "Why Crossroads Image",
            value: "",
            warning: "Please upload an image.",
            showWarning: true,
        },
        {
            id: "title",
            type: "textEditor",
            label: "Why Crossroads Title",
            value: "",
            warning: "Please enter the title.",
            showWarning: true,
        },
        {
            id: "description",
            type: "textEditor",
            label: "Why Crossroads Description",
            value: "",
            warning: "Please enter the description.",
            showWarning: true,
        },
        {
            id: "highlights",
            type: "textEditor",
            label: "Why Crossroads Highlights",
            value: "",
            warning: "Please enter the highlights.",
            showWarning: true,
        }
    ];

    const [mainSet, setMainSet] = useState(initialFields);
    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            <Form
                sectionName="Why Crossroads Title Section"
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
                apiEndpoint="/about/about-why-crossroads-title/"
                identifierField="id"
                showAddItems={false}
            />
        </div>
    );
};

export default TitleSection;