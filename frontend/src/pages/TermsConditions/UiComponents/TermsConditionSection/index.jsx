import React, { useState, useEffect } from 'react';
import apiService from '../../../../api/apiService';

const TermsConditionsSection = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService.getTermsConditionsContent()
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setContent(response.data[0].content);
        } else {
          setError('No terms and conditions content found.');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load terms and conditions.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      className="terms-conditions-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default TermsConditionsSection;