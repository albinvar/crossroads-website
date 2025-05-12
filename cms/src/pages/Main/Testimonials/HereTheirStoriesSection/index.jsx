import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import apiClient from '../../../../api/apiClient';
import Form from '../../../../components/Form';
import TestimonialImage from './TestimonialImage';
import TestimonialVideo from './TestimonialVideo';

const HereTheirStoriesSection = ({ tabId }) => {
  const [tabs, setTabs] = useState([]);
  const [activeTabId, setActiveTabId] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const contentRef = useRef(null); 
  useEffect(() => {
    apiClient.get('/testimonials/testimonials-tab/')
      .then(response => {
        setTabs(response.data);
        if (response.data.length > 0) {
          const defaultTabId = tabId || response.data[0].id;
          const defaultTabIndex = tabId
            ? response.data.findIndex(tab => tab.id === tabId)
            : 0;
          setActiveTabId(defaultTabId);
          setActiveTabIndex(defaultTabIndex >= 0 ? defaultTabIndex : 0);
        }
      })
      .catch(err => console.error('Error fetching testimonial tabs:', err));
  }, [tabId]);

  const initialFields = [
    {
      id: 'tab_name',
      type: 'textEditor',
      label: 'Tab Name',
      value: '',
      warning: 'Please enter the tab name.',
      showWarning: true,
    },
  ];

  const [mainSet, setMainSet] = useState(initialFields);
  const [editMode, setEditMode] = useState(false);

  const handleTabClick = (tabId, index) => {
    setActiveTabId(tabId);
    setActiveTabIndex(index);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderComponent = () => {
    if (!activeTabId) return null;
    const Component = activeTabIndex % 2 === 0 ? TestimonialImage : TestimonialVideo;
    return (
      <motion.div
        key={activeTabId} 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Component tabId={activeTabId} />
      </motion.div>
    );
  };

  return (
    <div className="space-y-8">
      <Form
        sectionName="Manage Testimonial Tabs"
        dataSets={[{
          name: 'Fields',
          fields: mainSet,
          setFields: setMainSet,
          template: initialFields,
          showEntryButtons: true,
        }]}
        editMode={editMode}
        setEditMode={setEditMode}
        apiEndpoint="/testimonials/testimonials-tab/"
        identifierField="id"
        showAddItems={true}
      />

      {tabs.length > 0 && (
        <div className="flex gap-2 mb-4 pl-4">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, index)}
              className={`px-4 py-2 rounded-md ${
                activeTabId === tab.id ? 'bg-blue-300 text-white text-sm' : 'bg-gray-200 text-gray-700 text-sm'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              dangerouslySetInnerHTML={{ __html: tab.tab_name }}
            />
          ))}
        </div>
      )}

      {activeTabId && (
        <div ref={contentRef} className="space-y-8">
          <AnimatePresence mode="wait">
            {renderComponent()}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default HereTheirStoriesSection;