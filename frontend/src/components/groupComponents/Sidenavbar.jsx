import React from "react";
import {
  Home,
  Calendar,
  Users,
  User,
  FileText,
  Settings,
  Shield,
  HelpCircle,
  ChevronRight,
  Sun,
  Moon,
  Eye,
  BellRing,
  BellIcon,
  Bot,
  X,
} from "lucide-react";
import { sidebarData } from "../../data";
import { useTheme } from "../../contexts/ThemeContext";

const iconMap = {
  Home: Home,
  Calendar: Calendar,
  Users: Users,
  User: User,
  FileText: FileText,
  Settings: Settings,
  Shield: Shield,
  HelpCircle: HelpCircle,
};

export default function Sidenavbar({ isOpen, onClose }) {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <div
      className={`w-64 h-screen fixed left-0 top-0 z-50 overflow-y-auto flex flex-col flex-shrink-0 transform transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 ${
        isDark
          ? "bg-gray-800 border-r border-gray-700"
          : "bg-gray-50 border-r border-gray-200"
      }`}
    >
      {/* Mobile Close Button */}
      <button
        onClick={onClose}
        className={`lg:hidden absolute top-4 right-4 p-2 rounded-lg transition-colors z-10 ${
          isDark
            ? "hover:bg-gray-700 text-gray-300"
            : "hover:bg-gray-200 text-gray-600"
        }`}
      >
        <X className="w-5 h-5" />
      </button>

      {/* Profile Logo and AI Name Section */}
      <div
        className={`flex flex-col items-center pt-4 pb-2 px-4 border-b ${
          isDark ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-lg"
          style={{ background: colors.gradient }}
        >
          <Bot className="w-8 h-8 text-white" />
        </div>
        <h2
          className={`text-lg font-bold mb-1 ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          MediCare AI
        </h2>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 px-3 mb-6 mt-2">
        <nav className="space-y-1">
          {sidebarData.menuItems.map((item) => {
            const IconComponent = iconMap[item.icon];
            const needsBorder = item.id === 1 || item.id === 5 || item.id === 9;

            return (
              <div key={item.id} className="relative">
                <button
                  className={`w-full flex items-center gap-3 px-4 py-2 text-left rounded-lg text-sm font-medium transition-all duration-200 ${
                    item.active
                      ? `text-white shadow-sm ${
                          isDark ? "bg-blue-600" : "bg-blue-700"
                        }`
                      : `${
                          isDark
                            ? "hover:bg-gray-700 text-gray-300"
                            : "hover:bg-gray-100 text-blue-700"
                        }`
                  } ${
                    needsBorder
                      ? `border-b mb-2 pb-3 ${
                          isDark ? "border-gray-700" : "border-gray-300"
                        }`
                      : ""
                  }`}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                >
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <span className="flex-1">{item.label}</span>
                  {item.hasChevron && (
                    <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                  )}
                </button>

                {/* Right side box for active item */}
                {item.active && (
                  <div
                    className={`absolute -right-3 top-1/2 transform -translate-y-1/2 w-1 h-10 rounded-l-full ${
                      isDark ? "bg-blue-500" : "bg-blue-700"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Bottom Card Section */}
      <div className="p-2 pb-2">
        <div
          className="rounded-xl p-4 text-white relative overflow-hidden"
          style={{ background: colors.gradient }}
        >
          {/* Background decoration */}
          <div className="flex justify-between items-center w-full">
            {/* Left Circle */}
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
              <BellRing className="w-4 h-4" />
            </div>

            {/* Members indicator (Right Side) */}
            <div className="flex items-center gap-1 bg-white bg-opacity-20 rounded-full px-2 py-1">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
                  P
                </div>
                <div className="w-5 h-5 bg-pink-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
                  E
                </div>
                <div className="w-5 h-5 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
                  D
                </div>
              </div>
              <span className="text-xs font-medium ml-2 text-gray-100">
                4 Members
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-3">
            <h3 className="font-bold text-lg mb-2">
              {sidebarData.currentPage}
            </h3>
            <p className="text-xs leading-relaxed mb-4 text-white/90">
              Surgical removal of the appendix, often due to infection. A common
              emergency procedure to prevent rupture.
            </p>

            {/* Bottom section with icon and button */}
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center flex-shrink-0">
                <BellIcon className="w-3.5 h-3.5" />
              </div>

              <button className="bg-white text-gray-700 hover:bg-gray-50 transition-colors px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2">
                <Eye className="w-3.5 h-3.5" />
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

    {/* Theme Toggle Tabs - FIXED VERSION */}
      <div className="px-3 py-4">
        <div
          className={`rounded-full p-1 flex ${
            isDark ? "bg-gray-700" : "bg-gray-600"
          }`}
        >
          <button
            onClick={() => isDark && toggleTheme()} // Switch to light when dark is active
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer ${
              !isDark
                ? "bg-white text-gray-800"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            Light
          </button>
          <button
            onClick={() => !isDark && toggleTheme()} // Switch to dark when light is active
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer ${
              isDark
                ? "bg-gray-800 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}
