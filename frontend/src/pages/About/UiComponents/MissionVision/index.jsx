import React, { useState, useEffect } from "react";
import { VideoPlay } from "../../../../components/Icons";
import apiService from "../../../../api/apiService";

const MissionVision = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [missionVisionData, setMissionVisionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService
      .getAboutMissionVision()
      .then((response) => {
        const data = response.data.length > 0 ? response.data[0] : null;
        setMissionVisionData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load mission and vision data.");
        setLoading(false);
        console.error(err);
      });
  }, []);

  const handleVideoPlayClick = () => {
    setShowVideo(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !missionVisionData) {
    return <div>{error || "No mission and vision data available."}</div>;
  }

  return (
    <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-x-8 h-full">
      <div className="group relative w-full md:w-1/2 flex-1">
        {showVideo ? (
          <video
            src={missionVisionData.video}
            alt="Mission and Vision Video"
            className="w-full h-full object-cover"
            autoPlay
            controls
            loop
          />
        ) : (
          <>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group-hover:animate-pulse"
              onClick={handleVideoPlayClick}
            >
              <VideoPlay />
            </div>
            <img
              src={missionVisionData.video_thumbnail_image}
              alt="Overview of Mission and Vision"
              className="w-full h-full object-cover blur-[1.5px] group-hover:blur-none transition-all duration-300"
            />
          </>
        )}
      </div>
      <div className="w-full md:w-1/2 flex flex-col flex-1">
        <div className="bg-gray-50 flex flex-col sm:flex-row items-center h-1/2">
          <div className="w-full sm:w-1/2 order-1 sm:order-2">
            <img
              src={missionVisionData.mission_image}
              alt="Our Mission Illustration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full sm:w-1/2 text-center p-4 flex flex-col justify-center">
            <div
              dangerouslySetInnerHTML={{ __html: missionVisionData.mission_title }}
            />
            <div
              className="mt-2"
              dangerouslySetInnerHTML={{ __html: missionVisionData.mission_description }}
            />
            <div className="hidden lg:block absolute -bottom-[25px] left-1/2 rotate-45 transform -translate-x-1/2 w-8 h-8 bg-gray-50">
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col sm:flex-row items-center h-1/2">
          <div className="relative w-full sm:w-1/2 text-center p-4 order-2 sm:order-1 flex flex-col justify-center">
            <div className="hidden lg:block absolute -top-[15px] left-1/2 rotate-45 transform -translate-x-1/2 w-8 h-8 bg-gray-50">
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: missionVisionData.vision_title }}
            />
            <div
              className="mt-2"
              dangerouslySetInnerHTML={{ __html: missionVisionData.vision_description }}
            />
          </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mt-4 md:mt-0 lg:mt-0 xl:mt-0">
            <img
              src={missionVisionData.vision_image}
              alt="Our Vision Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;