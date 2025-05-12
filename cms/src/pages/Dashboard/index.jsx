import React from 'react';

const Dashboard = () => {
  const cmsFeatures = [
    {
      title: "Content Creation",
      description: "Create engaging content with our intuitive editor. Add text, images, videos, and more with a simple drag-and-drop interface, perfect for blogs, pages, and articles."
    },
    {
      title: "Content Management",
      description: "Organize your content efficiently with categories, tags, and scheduling. Update or archive content seamlessly to keep your site fresh and relevant."
    },
    {
      title: "Content Publishing",
      description: "Publish your content instantly or schedule it for later. Control visibility with draft, review, and live states to manage your publishing workflow."
    },
    {
      title: "User Management",
      description: "Secure your CMS with single-user access. Manage your content with a dedicated account designed for individual control and simplicity."
    },
    {
      title: "SEO Optimization",
      description: "Boost visibility with integrated SEO tools. Optimize meta tags, keywords, and URLs to improve search engine rankings and drive traffic."
    },
    {
      title: "Media Library",
      description: "Store and manage all your media assets in one place. Upload, edit, and organize images, videos, and documents for easy access across your content."
    }
  ];

  return (
    <div className="w-full mx-auto p-4">
      <h1 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
        Content Management System
      </h1>
      <p className="text-sm text-gray-600 mb-8 max-w-3xl leading-relaxed">
        Welcome to your Content Management System Dashboard. Easily create, edit, and manage your content with powerful tools designed to streamline your workflow and enhance your digital presence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cmsFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {feature.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;