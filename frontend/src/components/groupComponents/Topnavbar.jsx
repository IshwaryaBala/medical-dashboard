import React, { useState, useEffect, useRef } from "react";
import { Search, Bell, ChevronDown, Headset, Menu } from "lucide-react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import { useTheme } from "../../contexts/ThemeContext";

const { RangePicker } = DatePicker;
const dateFormat = "DD/MM/YYYY";

export default function Topnavbar({ onToggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { isDark, colors } = useTheme();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`border-b px-4 py-3 lg:px-6 lg:py-4 transition-colors ${
        isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"
      }`}
    >
      {/* Top Row - Always visible */}
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={onToggleSidebar}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <Menu
              className={`w-5 h-5 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            />
          </button>

          {/* Dashboard Text - Only visible on mobile */}
          <h1
            className={`text-lg lg:text-xl font-semibold lg:hidden ${
              isDark ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Dashboard
          </h1>

          {/* Search Bar - Only visible on desktop in left section */}
          <div className="hidden lg:block relative max-w-md">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isDark ? "text-gray-400" : "text-blue-600"
              }`}
            />
            <input
              placeholder="Search here"
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-sm transition-colors ${
                isDark
                  ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-blue-500"
                  : "bg-white border-gray-200 text-blue-600 placeholder-gray-500 focus:ring-blue-600"
              }`}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Mobile: Condensed icons */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Headset */}
            <button
              className={`rounded-lg px-2 py-2 transition-colors ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white bg-opacity-20 hover:bg-gray-100"
              }`}
            >
              <Headset
                className={`w-4 h-4 ${
                  isDark ? "text-gray-300" : "text-blue-600"
                }`}
              />
            </button>

            {/* Mobile Notifications */}
            <button
              className={`rounded-lg px-2 py-2 relative transition-colors ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white bg-opacity-20 hover:bg-gray-100"
              }`}
            >
              <Bell
                className={`w-4 h-4 ${
                  isDark ? "text-gray-300" : "text-blue-600"
                }`}
              />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* Desktop: Icons and date picker */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Date Picker */}
            <Space direction="vertical" size={12}>
              <DatePicker
                defaultValue={dayjs()}
                format={dateFormat}
                className={isDark ? "dark-date-picker" : ""}
                style={{
                  backgroundColor: isDark ? "#374151" : "#ffffff",
                  borderColor: isDark ? "#4B5563" : "#D1D5DB",
                  color: isDark ? "#F9FAFB" : "#004a8c",
                }}
              />
            </Space>

            {/* Headset */}
            <button
              className={`rounded-lg px-2 py-2 transition-colors ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white bg-opacity-20 hover:bg-gray-100"
              }`}
            >
              <Headset
                className={`w-4 h-4 ${
                  isDark ? "text-gray-300" : "text-blue-600"
                }`}
              />
            </button>

            {/* Notifications */}
            <button
              className={`rounded-lg px-2 py-2 relative transition-colors ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white bg-opacity-20 hover:bg-gray-100"
              }`}
            >
              <Bell
                className={`w-4 h-4 ${
                  isDark ? "text-gray-300" : "text-blue-600"
                }`}
              />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* User Dropdown - Always visible but responsive */}
          <div
            className={`rounded-lg relative transition-colors ${
              isDark ? "bg-gray-700" : "bg-white bg-opacity-20"
            }`}
            ref={dropdownRef}
          >
            <button
              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                isDark ? "hover:bg-gray-600" : "hover:bg-gray-100"
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isDark ? "bg-blue-600" : "bg-blue-700"
                }`}
              >
                <span className="text-white text-sm font-medium">A</span>
              </div>

              {/* Hide user details on very small screens */}
              <div className="hidden sm:flex flex-col items-start leading-tight">
                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-100" : "text-blue-600"
                  }`}
                >
                  Admin
                </span>
                <span
                  className={`text-xs lg:text-sm ${
                    isDark ? "text-gray-300" : "text-blue-600"
                  }`}
                >
                  admin@gmail.com
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 hidden sm:block ${
                  isDark ? "text-gray-300" : "text-blue-600"
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg border py-1 z-50 transition-colors ${
                  isDark
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <button
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                    isDark
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  Profile
                </button>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                    isDark
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  Settings
                </button>
                <hr
                  className={`my-1 ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                />
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-red-50 text-red-600 transition-colors">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dark mode styles for DatePicker */}
      <style jsx global>{`
        .dark-date-picker .ant-picker {
          background-color: #374151 !important;
          border-color: #4b5563 !important;
        }
        .dark-date-picker .ant-picker-input > input {
          color: #f9fafb !important;
        }
        .dark-date-picker .ant-picker-suffix {
          color: #9ca3af !important;
        }
      `}</style>
    </div>
  );
}
