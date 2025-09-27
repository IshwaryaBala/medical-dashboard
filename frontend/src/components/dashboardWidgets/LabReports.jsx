import React from "react";
import {
  FileText,
  Download,
  Eye,
  ChevronLeft,
  ChevronRight,
  File,
} from "lucide-react";
import { patientDataLab, labReports } from "../../data";
import { useTheme } from "../../contexts/ThemeContext";

const IconComponent = ({ iconName, className }) => {
  const icons = {
    FileText: FileText,
    FileStack: File,
  };

  const Icon = icons[iconName];
  return Icon ? (
    <Icon className={className} />
  ) : (
    <FileText className={className} />
  );
};

export default function LabReports() {
  const { isDark } = useTheme();

  return (
    <div
      className={`rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border max-w-lg ${
        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-3">
        <h2
          className={`text-lg font-semibold ${
            isDark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Lab Reports
        </h2>
        <div className="flex items-center gap-1">
          <button
            className={`p-1 transition-colors ${
              isDark
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className={`p-1 transition-colors ${
              isDark
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Patient Info */}
      <div
        className={`px-4 pb-4 p-3 m-2 rounded-lg ${
          isDark ? "bg-blue-900/20 border border-blue-800/50" : "bg-blue-50"
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium ${
              isDark ? "bg-blue-600" : "bg-[#004a8c]"
            }`}
          >
            {patientDataLab.avatar}
          </div>
          <div>
            <div
              className={`font-medium ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {patientDataLab.name} | {patientDataLab.age} Age |{" "}
              {patientDataLab.gender}
            </div>
            <div
              className={`text-xs ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              ID: {patientDataLab.id}
            </div>
          </div>
          <div
            className={`ml-auto text-xs ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {patientDataLab.date}
          </div>
        </div>

        {/* Reports */}
        <div className="space-y-3">
          {labReports.map((report) => (
            <div key={report.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${report.iconBg} rounded flex items-center justify-center`}
                >
                  <IconComponent
                    iconName={report.icon}
                    className="w-6 h-6 text-white"
                  />
                </div>
                <div>
                  <div
                    className={`font-medium ${
                      isDark ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {report.title}
                  </div>
                  <div
                    className={`flex items-center gap-4 text-sm mt-1 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <button
                      className={`flex items-center gap-1.5 p-1 rounded-lg transition-colors ${
                        isDark
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View
                    </button>
                    <button
                      className={`flex items-center gap-1.5 p-1 rounded-lg transition-colors ${
                        isDark
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  isDark
                    ? "bg-blue-800/50 text-blue-300"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {report.reportType}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
