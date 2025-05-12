import React, { useState } from "react";
import Form from "../../../../components/Form";
import EventsRecapSection from "../EventsRecapSection";

const EventsSection = () => {
  const initialFields = [
    {
      id: 'image',
      type: 'image',
      label: 'Event Card Image',
      value: '',
      warning: 'Please choose the event card image.',
      showWarning: true,
    },
    {
      id: 'title',
      type: 'textEditor',
      label: 'Event Card Title',
      value: '',
      warning: 'Please enter the event card title.',
      showWarning: true,
    },
    {
      id: 'description',
      type: 'textEditor',
      label: 'Event Card Description',
      value: '',
      warning: 'Please enter the event card description.',
      showWarning: true,
    },
    {
      id: 'link',
      type: 'text',
      label: 'Event Link (Slug)',
      value: '',
      warning: 'Please enter a unique link (e.g., event-2025-conference).',
      showWarning: true,
    },
    {
      id: 'date',
      type: 'date',
      label: 'Event Expiry Date',
      value: new Date().toISOString().split('T')[0],
      warning: 'Please select the event date.',
      showWarning: true,
    },
    {
      id: 'detailed_page_image',
      type: 'image',
      label: 'Detailed Page Image',
      value: '',
      warning: 'Please choose the detailed page image.',
      showWarning: false,
    },
    {
      id: 'detailed_page_title',
      type: 'textEditor',
      label: 'Detailed Page Title',
      value: '',
      warning: 'Please enter the detailed page title.',
      showWarning: false,
    },
    {
      id: 'detailed_page_description',
      type: 'textEditor',
      label: 'Detailed Page Description',
      value: '',
      warning: 'Please enter the detailed page description.',
      showWarning: false,
    },
    {
      id: 'detailed_page_date',
      type: 'textEditor',
      label: 'Detailed Page Event Date (e.g., Jan 15, 2025)',
      value: '',
      warning: 'Please enter the detailed page date.',
      showWarning: false,
    },
    {
      id: 'detailed_page_time',
      type: 'textEditor',
      label: 'Detailed Page Time (e.g., 10:00 AM - 2:00 PM)',
      value: '',
      warning: 'Please enter the detailed page time.',
      showWarning: false,
    },
    {
      id: 'detailed_page_event_location',
      type: 'textEditor',
      label: 'Detailed Page Event Location',
      value: '',
      warning: 'Please enter the event location.',
      showWarning: false,
    },
    {
      id: 'detailed_page_event_category',
      type: 'textEditor',
      label: 'Detailed Page Event Category (e.g., Conference, Workshop)',
      value: '',
      warning: 'Please enter the event category.',
      showWarning: false,
    },
    {
      id: 'detailed_page_additional_information',
      type: 'textEditor',
      label: 'Detailed Page Additional Information',
      value: '',
      warning: 'Please enter additional information.',
      showWarning: false,
    },
    {
      id: 'google_map_latitude',
      type: 'textEditor',
      label: 'Detailed Page Location Latitute (e.g., 19.0760)',
      value: '',
      warning: 'Please enter Detailed Page location latitute.',
      showWarning: false,
    },
    {
      id: 'google_map_longitude',
      type: 'textEditor',
      label: 'Detailed Page Location Longitude (e.g., 72.8777)',
      value: '',
      warning: 'Please enter detailed page location longitude.',
      showWarning: false,
    },
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="space-y-8">
      <Form
        sectionName="News and Events Section"
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
        apiEndpoint="/news-and-events/news-events-listing/"
        identifierField="id"
        showAddItems={true}
      />
      <EventsRecapSection/>
    </div>
  );
};

export default EventsSection;