import React, { useState } from "react";
import Form from "../../../../../components/Form";

const WhyCrossroadsSection = () => {
    const initialFields = [
        {
            id: "list_title",
            type: "textEditor",
            label: "Why Crossroads List Title",
            value: "",
            warning: "Please enter the list title.",
            showWarning: true,
        },
        {
            id: "list_description",
            type: "textEditor",
            label: "Why Crossroads List Description",
            value: "",
            warning: "Please enter the list description.",
            showWarning: true,
        }
    ];

    const [mainSet, setMainSet] = useState(initialFields);
    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            <Form
                sectionName="Why Crossroads Listing Section"
                dataSets={[
                    {
                        name: "Fields",
                        fields: mainSet,
                        setFields: setMainSet,
                        template: initialFields,
                        showEntryButtons: true,
                    },
                ]}
                editMode={editMode}
                setEditMode={setEditMode}
                apiEndpoint="/about/about-why-crossroads/"
                identifierField="id"
                showAddItems={true}
            />
        </div>
    );
};

export default WhyCrossroadsSection;