import React from 'react';

const OtherOptions = ({ mainTitle, options }) => {
  return (
    <section>
      <div className="mx-auto">
        {mainTitle && (
          <div
            className="text-left mb-8"
            dangerouslySetInnerHTML={{ __html: mainTitle }}
          />
        )}
        {options.length > 0 ? (
          <div className="grid gap-6">
            {options.map((item, index) => (
              <div key={item.id || index}>
                <div
                  className="mb-2"
                  dangerouslySetInnerHTML={{ __html: item.list_title }}
                />
                <div
                  className="ml-6"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No other options available.</p>
        )}
      </div>
    </section>
  );
};

export default OtherOptions;