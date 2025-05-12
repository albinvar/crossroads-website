import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import apiService from "../../../../api/apiService";

const stripHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const WhyCrossroads = () => {
  const scrollRef = useRef(null);
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(20);
  const [titleData, setTitleData] = useState({ title: "", description: "", highlights: "", image: "" });
  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    const thumbSize = Math.max((clientHeight / scrollHeight) * clientHeight, 20);
    const thumbOffset = scrollRatio * (clientHeight - thumbSize);

    setThumbTop(thumbOffset);
    setThumbHeight(thumbSize);
  };

  useEffect(() => {
    apiService
      .getAboutWhyCrossroadsTitle()
      .then((response) => {
        const data = response.data[0] || { title: "", description: "", highlights: "", image: "" };
        setTitleData({
          title: data.title || "",
          description: data.description || "",
          highlights: data.highlights || "",
          image: data.image || "",
        });
      })
      .catch((err) => {
        console.error("Error fetching title data:", err);
        setError("Failed to load title data");
      });

    apiService
      .getAboutWhyCrossroads()
      .then((response) => {
        setListItems(response.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching list items:", err);
        setError("Failed to load list items");
        setLoading(false);
      });

    handleScroll();
  }, []);

  const hasData =
    (stripHtml(titleData.title) || stripHtml(titleData.description) || stripHtml(titleData.highlights) || titleData.image) &&
    listItems.length > 0;

  if (loading) {
    return <div className="text-center py-28 text-white">Loading...</div>;
  }

  if (error || !hasData) {
    return null;
  }

  return (
    <>
    <div className="flex flex-col md:flex-row items-stretch justify-center h-full w-full">
      <div className="pl-4 sm:pl-4 lg:pl-28 w-full md:w-1/2 flex-1 bg-primary-dark flex flex-col justify-start relative">
        <div className="py-10 sm:py-10 lg:py-28 relative">
            <div  className="mb-4" dangerouslySetInnerHTML={{ __html: titleData.title }} />
            <div className="mb-4" dangerouslySetInnerHTML={{ __html: titleData.description }} />
          <div className="relative">
            <div className="absolute top-0 left-0 h-[350px] sm:h-[350px] lg:h-[200px] w-[2px] bg-gray-400 rounded-full z-10" />
            <div
              className="absolute left-0 w-[2px] bg-primary-orange rounded-full z-20 transition-all duration-100"
              style={{ top: `${thumbTop}px`, height: `${thumbHeight}px` }}
            />
            <div
              className="hide-scrollbar overflow-y-auto max-h-[410px] sm:max-h-[410px] lg:max-h-[200px] pr-4"
              ref={scrollRef}
              onScroll={handleScroll}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <ul className="pl-6 list-disc list-inside text-gray-300 space-y-4">
                {listItems.map((item, index) => (
                  <li key={index} className="flex flex-col text-left">
                    <div className="flex items-center justify-start space-x-4">
                      <FontAwesomeIcon icon={faCheck} size="xs" className="bg-[#F9920A] p-1 rounded-full" />
                      <span className="font-semibold" dangerouslySetInnerHTML={{ __html: item.list_title}} />
                    </div>
                    <div className="mt-2 text-gray-300" dangerouslySetInnerHTML={{ __html:item.list_description}}/>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex-1">
        <img src={titleData.image} alt="Why Crossroads Illustration" className="w-full h-full object-cover" />
      </div>
    </div>

    <div className="my-8 text-center px-3" dangerouslySetInnerHTML={{ __html: titleData.highlights }} />       
    </>
  );
};

export default WhyCrossroads;