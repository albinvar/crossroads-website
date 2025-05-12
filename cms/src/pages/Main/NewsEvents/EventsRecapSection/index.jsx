import React, { useState, useEffect } from 'react';
import apiClient from '../../../../api/apiClient';
import Form from '../../../../components/Form';

const EventsRecapSection = () => {
  const [popularRecaps, setPopularRecaps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const removeHtmlTags = (str) => {
    if (typeof str !== 'string' || !str) return 'Untitled Event';
    return str.replace(/<\/?[^>]*>/g, '').trim();
  };

  useEffect(() => {
    const fetchPastEvents = async () => {
      setIsLoading(true);
      setError(null);
      const today = new Date();
      const todayStr = today.toISOString().split('T')[0]; 
      try {
        const response = await apiClient.get(
          `/news-and-events/news-events-listing/?date__lt=${todayStr}&ordering=-date`
        );
        console.log('API response:', response.data); 
        const pastEvents = response.data
          .filter((recap) => {
            if (!recap.date) {
              console.log(`Excluded event ID ${recap.id}: No date`);
              return false;
            }
            try {
              const eventDate = new Date(recap.date);
              const isPast = eventDate < today;
              console.log(`Event ID ${recap.id}: Date ${recap.date}, IsPast: ${isPast}`);
              return isPast;
            } catch (e) {
              console.log(`Excluded event ID ${recap.id}: Invalid date ${recap.date}`);
              return false;
            }
          })
          .map((recap) => ({
            value: recap.id,
            label: removeHtmlTags(recap.title),
          }));
        console.log('Filtered past events:', pastEvents); 
        setPopularRecaps(pastEvents);
        if (pastEvents.length === 0) {
          setError('No past events found.');
        }
      } catch (err) {
        console.error('Error fetching past events:', err);
        setError('Failed to load past events. Please try again.');
        setPopularRecaps([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPastEvents();
  }, []);

  const initialFields = [
    {
      id: 'event',
      type: 'select',
      label: 'Select the Past Event',
      value: '',
      options: popularRecaps,
      warning: 'Please select a past event.',
      showWarning: true,
    },
    {
      id: 'image',
      type: 'image',
      label: 'Popular Recap Image',
      value: '',
      warning: 'Please choose the recap image.',
      showWarning: true,
    },
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setMainSet((prev) =>
      prev.map((field) =>
        field.id === 'event' ? { ...field, options: popularRecaps } : field
      )
    );
  }, [popularRecaps]);

  return (
    <div>
      {isLoading ? (
        <div className="text-center text-gray-500 py-4">
          Loading past events...
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-4">
          {error}
        </div>
      ) : popularRecaps.length === 0 ? (
        <div className="text-center text-gray-500 py-4">
          No past events available.
        </div>
      ) : (
        <Form
          sectionName="Add Past Events Recap Images"
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
          apiEndpoint="/news-and-events/news-events-recap/"
          identifierField="id"
          showAddItems={true}
        />
      )}
    </div>
  );
};

export default EventsRecapSection;