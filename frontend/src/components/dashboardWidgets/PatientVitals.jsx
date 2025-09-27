import React from "react";
import {
  Search,
  Eye,
  FileText,
  Weight,
  Ruler,
  Heart,
  Droplet,
  Thermometer,
  Activity,
  Sparkles,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { patientData } from "../../data";

const iconMap = { Weight, Ruler, Heart, Droplet, Thermometer, Activity };

export default function PatientVitals() {
  const { isDark, colors } = useTheme();

  return (
    <div
      className={`max-w-md mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="px-4 py-8">
        {/* Header & Search */}
        <div className="flex items-center justify-between mb-6">
          <h1
            className={`text-lg font-semibold ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Patient Vitals
          </h1>
          <div className="relative max-w-md">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isDark ? "text-gray-400" : "text-[#004a8c]"
              }`}
            />
            <input
              placeholder="Search here"
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-sm transition-colors ${
                isDark
                  ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-blue-500"
                  : "bg-white border-gray-200 text-[#004a8c] placeholder-gray-500 focus:ring-blue-600"
              }`}
            />
          </div>
        </div>

        {/* Patient Info */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold ${
              isDark ? "bg-blue-600" : "bg-[#004a8c]"
            }`}
          >
            CP
          </div>
          <div>
            <h2
              className={`text-lg font-semibold ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Cal Patient 1
            </h2>
            <p
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              ID: patient_01
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
              isDark
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-[#004a8c] hover:bg-blue-800 text-white"
            }`}
          >
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </button>
          <button
            className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
              isDark
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-[#004a8c] hover:bg-blue-800 text-white"
            }`}
          >
            <FileText className="w-4 h-4 mr-2" />
            View Reports
          </button>
        </div>

        {/* AI Summary */}
        <div
          className={`border rounded-lg p-4 mb-6 ${
            isDark
              ? "bg-green-900/20 border-green-700"
              : "bg-green-50 border-green-200"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: colors.gradient }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span
              className={`text-sm font-medium ${
                isDark ? "text-green-400" : "text-green-700"
              }`}
            >
              AI Summary
            </span>
          </div>
          <p
            className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Patient's vital signs and lab results are within normal limits,
            indicating good overall health.
          </p>
        </div>

        {/* Vital Summary */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <h3
              className={`text-lg font-semibold ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Vital Summary
            </h3>
            <span
              className={`text-xs ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Updated on: {patientData.lastUpdated}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1">
            {patientData.vitals.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={idx} className="flex items-start gap-2 mb-2">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isDark ? "bg-blue-900/30" : "bg-blue-100"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isDark ? "text-blue-400" : "text-[#004a8c]"
                      }`}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <div
                      className={`text-xs mb-1 ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {item.label}
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        isDark ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Patient Allergies */}
        <div>
          <h3
            className={`text-lg font-semibold mb-4 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Patient Allergies
          </h3>
          <div className="flex flex-wrap gap-2">
            {patientData.allergies.map((allergy, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  isDark
                    ? "bg-blue-900/30 text-blue-400"
                    : "bg-blue-100 text-[#004a8c]"
                }`}
              >
                {allergy}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
