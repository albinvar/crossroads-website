import React, { useState } from 'react';
import Form from '../../../../../../../components/Form';

const Tab = () => {
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

  return (
    <div>
      <Form
        sectionName="Add Tabs"
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
        apiEndpoint="/service/service-documentation-assistance-tabs/"
        identifierField="id"
        showAddItems={true}
      />
    </div>
  );
};

export default Tab;