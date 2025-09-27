import React, { useState } from "react";
import Sidenavbar from "../groupComponents/Sidenavbar";
import Topnavbar from "../groupComponents/Topnavbar";
import StatsCard from "../dashboardWidgets/StatsCard";
import ReasonTrendChart from "../dashboardWidgets/ReasonTrendChart";
import AppointmentsSection from "../dashboardWidgets/AppointmentsSection";
import LabReports from "../dashboardWidgets/LabReports";
import PatientVitals from "../dashboardWidgets/PatientVitals";
import ChatInterface from "../dashboardWidgets/ChatView";
import { statsData } from "../../data";
import { useTheme } from "../../contexts/ThemeContext";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDark } = useTheme();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div
      className={`flex h-screen relative transition-colors ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <Sidenavbar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-64 transition-all duration-300">
        {/* Navbar */}
        <Topnavbar onToggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div
          className={`p-4 lg:p-6 flex-1 overflow-auto transition-colors ${
            isDark ? "bg-gray-900" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Main Content Grid - Responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-4 lg:space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
                  {statsData.map((stat) => (
                    <StatsCard
                      key={stat.id}
                      title={stat.title}
                      value={stat.value}
                      comparison={stat.comparison}
                      icon={stat.icon}
                      color={stat.color}
                    />
                  ))}
                </div>

                {/* Charts */}
                <ReasonTrendChart />

                {/* Appointments and Lab Reports */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  {/* Left Column: Appointments + Lab Reports */}
                  <div className="flex flex-col gap-4 lg:gap-6 lg:col-span-1">
                    <AppointmentsSection />
                    <LabReports />
                  </div>

                  {/* Right Column: Patient Vitals */}
                  <div className="lg:col-span-1">
                    <PatientVitals />
                  </div>
                </div>
              </div>

              {/* Right Column - Chat Interface */}
              <div className="space-y-4 lg:space-y-6 order-first lg:order-last">
                <ChatInterface />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
