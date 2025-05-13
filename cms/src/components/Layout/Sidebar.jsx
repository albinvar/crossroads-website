import React, { useState } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Settings,
  Users,
  BarChart,
  Cog,
  ChevronDown,
  FolderCog,
  Link2Icon,
} from "lucide-react";

const iconComponents = {
  LayoutDashboard: LayoutDashboard,
  Settings: Settings,
  Users: Users,
  BarChart: BarChart,
  Cog: Cog,
  ChevronDown: ChevronDown,
  FolderCog: FolderCog,
 Link2: Link2Icon
};

const cmsLinks = [
  { to: "home-section", label: "Home" },
  { to: "about-section", label: "About Us" },
  { to: "services-section", label: "Services" },
  { to: "testimonials-section", label: "Testimonials" },
  { to: "blog-section", label: "Blog" },
  { to: "gallery-section", label: "Gallery" },
  { to: "contact-section", label: "Contact Us" },
  { to: "news-and-events-section", label: "News & Events" },
  { to: "terms-and-conditions-section", label: "Terms and Conditions" },
  { to: "privacy-policy-section", label: "Privacy Policy" },
  { to: "free-education-country-page-section", label: "Free Education" },
  { to: "course-page-section", label: "Courses" }
];

const Dropdown = ({ label, links, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = iconComponents[icon];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <div className="relative">
      <motion.button
        onClick={toggleDropdown}
        className="text-sm font-medium group flex items-center p-2 rounded-xs transition-all duration-200 relative overflow-hidden text-gray-800 w-full"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <IconComponent className="w-5 h-5 mr-3 transition-colors duration-300" />
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0"
        >
          <ChevronDown className="w-4 h-4 ml-2" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, height: 0 },
              visible: {
                opacity: 1,
                height: "200px",
                transition: {
                  duration: 0.3,
                  when: "beforeChildren",
                  staggerChildren: 0.05,
                },
              },
              exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
            }}
            className="w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-y-auto mt-2" // Removed absolute, added overflow-y-auto
          >
            {links.map((link) => (
              <motion.div key={link.to} variants={dropdownVariants}>
                <NavLink
                  to={link.to}
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Sidebar = ({ isOpen }) => {
  const sidebarVariants = {
    open: {
      width: 300,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const navigationItems = [
    {
      type: "link",
      to: "/",
      label: "Dashboard",
      icon: "LayoutDashboard",
      activeStyles: { background: "bg-blue-50", text: "text-blue-800" },
      inactiveStyles: { text: "text-gray-800" },
      hoverStyles: { background: "bg-gray-100", text: "text-gray-800" },
    },
    {
      type: "dropdown",
      label: "CMS",
      icon: "FolderCog",
      links: cmsLinks,
    },
    {
      type: "link",
      to: "/social-media",
      label: "Social Media Management",
      icon: "Link2",
      activeStyles: { background: "bg-blue-50", text: "text-blue-800" },
      inactiveStyles: { text: "text-gray-800" },
      hoverStyles: { background: "bg-gray-100", text: "text-gray-800" },
    },
    {
      type: "link",
      to: "/profile",
      label: "Profile Settings",
      icon: "Settings",
      activeStyles: { background: "bg-blue-50", text: "text-blue-800" },
      inactiveStyles: { text: "text-gray-800" },
      hoverStyles: { background: "bg-gray-100", text: "text-gray-800" },
    },
  ];

  return (
    <motion.aside
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      className="fixed top-16 bottom-0 bg-white shadow-md overflow-hidden flex flex-col z-40"
    >
      <motion.div
        className="h-full p-4 pt-4 flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="space-y-2">
          {navigationItems.map((item, index) => {
            if (item.type === "link") {
              const IconComponent = iconComponents[item.icon];
              return (
                <motion.div
                  key={item.to}
                  custom={index}
                  initial="hidden"
                  animate={isOpen ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm font-medium group flex items-center p-2 rounded-xs transition-all duration-200 relative overflow-hidden ${isActive
                        ? `${item.activeStyles.background} ${item.activeStyles.text}`
                        : item.inactiveStyles.text
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <motion.div
                          className={`absolute inset-0 ${item.hoverStyles.background}`}
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: isActive ? 0 : 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="relative flex items-center">
                          <IconComponent
                            className={`w-5 h-5 mr-3 transition-colors duration-300 ${isActive
                                ? item.activeStyles.text
                                : `${item.inactiveStyles.text} group-hover:${item.hoverStyles.text}`
                              }`}
                          />
                          <span
                            className={`${isActive
                                ? item.activeStyles.text
                                : `${item.inactiveStyles.text} group-hover:${item.hoverStyles.text}`
                              } transition-colors duration-300`}
                          >
                            {item.label}
                          </span>
                        </div>
                      </>
                    )}
                  </NavLink>
                </motion.div>
              );
            } else if (item.type === "dropdown") {
              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={isOpen ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <Dropdown label={item.label} links={item.links} icon={item.icon} />
                </motion.div>
              );
            }
            return null;
          })}
        </nav>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;