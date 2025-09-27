import React from "react";
import { Plus } from "lucide-react";
import { appointments, colorMap } from "../../data";
import { useTheme } from "../../contexts/ThemeContext";

export default function AppointmentsSection() {
  const { isDark } = useTheme();
  const today = new Date();
  const endDate = new Date("2025-12-31");

  // Generate days until end of 2025
  const daysArray = [];
  let currentDate = new Date(today);

  while (currentDate <= endDate) {
    daysArray.push({
      fullDate: currentDate.toISOString().split("T")[0],
      date: currentDate.getDate(),
      day: currentDate.toLocaleDateString("en-US", { weekday: "short" }),
      month: currentDate.toLocaleDateString("en-US", { month: "short" }),
      year: currentDate.getFullYear(),
      active: currentDate.toDateString() === today.toDateString(),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2
          className={`text-xl font-semibold ${
            isDark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Appointments
        </h2>
        <button
          className={`flex items-center gap-1 text-sm font-medium p-1 rounded-lg transition-colors ${
            isDark
              ? "text-blue-400 bg-gray-700 hover:bg-gray-600"
              : "text-[#004a8c] bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <Plus size={16} />
          New
        </button>
      </div>

      <div
        className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border max-w-md ${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
        }`}
      >
        {/* Scrollable Calendar Days */}
        <div
          className="flex space-x-3 mb-6 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {daysArray.map((day, index) => {
            const prev = index > 0 ? daysArray[index - 1] : null;
            const showMonth =
              !prev || prev.month !== day.month || prev.year !== day.year;

            return (
              <React.Fragment key={index}>
                {/* Month Separator */}
                {showMonth && (
                  <div
                    className={`flex items-center justify-center min-w-[40px] text-xs font-semibold ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {day.month}{" "}
                    {day.year !== today.getFullYear() ? day.year : ""}
                  </div>
                )}

                {/* Day Cell */}
                <div
                  className={`flex flex-col items-center min-w-[50px] text-xs px-2 py-1 rounded cursor-pointer transition ${
                    day.active
                      ? isDark
                        ? "bg-blue-600 text-white font-medium"
                        : "bg-[#004a8c] text-white font-medium"
                      : isDark
                      ? "text-gray-400 hover:bg-gray-700"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  <div>{day.date}</div>
                  <div className="mt-2">{day.day}</div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Scrollable Appointments Area */}
        <div
          className="h-48 overflow-y-scroll scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="relative">
            {/* Time column background */}
            <div className="space-y-1">
              {[
                "9 AM",
                "10 AM",
                "11 AM",
                "12 PM",
                "1 PM",
                "2 PM",
                "3 PM",
                "4 PM",
                "5 PM",
              ].map((time, index) => (
                <div key={index} className="flex items-center h-12">
                  <div
                    className={`w-12 text-xs pr-2 ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {time}
                  </div>
                  <div
                    className={`flex-1 border-l ml-4 h-full ${
                      isDark ? "border-gray-600" : "border-gray-100"
                    }`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Appointments Rendering */}
            {appointments.map((appt, idx) => (
              <div
                key={idx}
                className={`absolute ${
                  idx === 0 ? "top-12" : "top-36"
                } left-16 right-0`}
              >
                <div
                  className={`border-l-4 rounded-lg p-3 relative ${
                    isDark
                      ? `${colorMap[appt.color].bg.replace(
                          "bg-",
                          "bg-opacity-20 bg-"
                        )} ${colorMap[appt.color].border} bg-gray-700`
                      : `${colorMap[appt.color].bg} ${
                          colorMap[appt.color].border
                        }`
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div
                      className={`text-sm font-medium ${
                        isDark ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      {appt.time}
                    </div>
                    <div
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        appt.status === "Finished"
                          ? "bg-green-100 text-green-700"
                          : isDark
                          ? "bg-blue-100 text-blue-800"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {appt.status}
                    </div>
                  </div>
                  <div
                    className={`text-sm font-medium mb-1 ${
                      isDark ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {appt.title}
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`${
                        colorMap[appt.color].dot
                      } w-2 h-2 rounded-full`}
                    ></div>
                    <div
                      className={`text-xs ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {appt.doctor}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
