import React, { useState } from "react";
import Form from "../../../../../../../components/Form";

const CountryListing = () => {
    const initialFields = [
        {
            id: "destination_image",
            type: "image",
            label: "Destination Image",
            value: null,
            warning: "Please upload a destination image.",
            showWarning: true,
        },
        {
            id: "destination_name",
            type: "textEditor",
            label: "Destination Name",
            value: "",
            warning: "Please enter the name.",
            showWarning: true,
        },
        {
            id: "destination_description",
            type: "textEditor",
            label: "Destination Description",
            value: "",
            warning: "Please enter the description.",
            showWarning: true,
        },
        {
            id: "slug",
            type: "text",
            label: "Path (ex: country-germany)",
            value: "",
            warning: "Please enter the path.",
            showWarning: true,
        },
    ];

    const [mainSet, setMainSet] = useState(initialFields);
    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            <Form
                sectionName="Know your destination section"
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
                apiEndpoint="/service/service-destination-listings/"
                identifierField="slug"
                showAddItems={true}
            />
        </div>
    );
};

export default CountryListing;