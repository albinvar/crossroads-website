import React, { useState } from 'react';

const EventForm = ({ latitude, longitude, title, eventType, onJoinEvent }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onJoinEvent) {
      onJoinEvent(formData);
    } else {
      console.log('Form submitted:', formData);
    }
  };

  const mapLocation = latitude && longitude
    ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}%2C${longitude}!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin&q=${latitude},${longitude}&z=15&markers=color:red%7Clabel:P%7C${latitude},${longitude}`
    : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMCw!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin';

  const googleMapsUrl = latitude && longitude
    ? `https://www.google.com/maps/place/${latitude},${longitude}/@${latitude},${longitude},15z`
    : 'https://www.google.com/maps';

  return (
      <div className="bg-[#00334D] text-white p-3 sm:p-4 md:p-6 lg:p-8 h-auto">
        <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-5 mx-auto">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 pl-0 sm:pl-4 md:pl-10 lg:pl-20">
            <div className="w-full h-full py-2 relative">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open map for ${title} location`}>
                <iframe
                  src={mapLocation}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${title || 'Event'} Location`}
                  className="filter grayscale-0 hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </a>
              <p className="mt-2 text-sm sm:text-sm">
                Here’s how to get to the event venue!
              </p>
            </div>
          </div>

          {/* Form/Info Section */}
          <div className="w-full lg:w-1/2 px-0 sm:px-4 md:px-10 lg:px-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6">
              Your Global Journey Starts Here - Join the Event!
            </h3>
            {eventType === 'upcoming' ? (
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full p-2 sm:p-3 border rounded bg-white text-[#00334D] text-sm sm:text-base md:text-lg focus:outline-none"
                    aria-label="Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full p-2 sm:p-3 border rounded bg-white text-[#00334D] text-sm sm:text-base md:text-lg focus:outline-none"
                    aria-label="Phone Number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full p-2 sm:p-3 border rounded bg-white text-[#00334D] text-sm sm:text-base md:text-lg focus:outline-none"
                    aria-label="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    className="w-full p-2 sm:p-3 border rounded bg-white text-[#00334D] text-sm sm:text-base md:text-lg focus:outline-none"
                    aria-label="Message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F9920A] hover:bg-[#fcfcfc] text-white hover:text-[#00334D] py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm sm:text-md font-medium"
                >
                  Join Event
                </button>
              </form>
            ) : (
              <p className="text-sm sm:text-base md:text-lg">
                This event has concluded. Check out our upcoming events for more opportunities!
              </p>
            )}
          </div>
        </div>
      </div>
  );
};

export default EventForm;