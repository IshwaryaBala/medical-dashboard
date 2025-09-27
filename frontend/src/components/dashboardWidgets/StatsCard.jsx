import React from "react";
import {
  Calendar,
  Users,
  UserCheck,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

// Icon mapping
const iconMap = {
  Calendar: Calendar,
  Users: Users,
  UserCheck: UserCheck,
};

export default function StatsCard({
  title,
  value,
  comparison,
  icon,
  color = "teal",
}) {
  const { isDark } = useTheme();
  const isPositive = comparison >= 0;
  const IconComponent = iconMap[icon];

  const colorClasses = {
    teal: isDark
      ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white"
      : "bg-gradient-to-r from-teal-400 to-teal-500 text-white",
    blue: isDark
      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
      : "bg-gradient-to-r from-blue-400 to-blue-500 text-white",
    orange: isDark
      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
      : "bg-gradient-to-r from-orange-400 to-orange-500 text-white",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg border shadow-sm transition-all duration-300 ${
        isDark
          ? "border-gray-700 hover:shadow-xl"
          : "border-gray-200 hover:shadow-lg"
      }`}
    >
      <div className={`${colorClasses[color]} p-4`}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-white/90 text-sm font-medium mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-white mb-2">
              {value.toLocaleString()}
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-white/90 text-xs">
                <span>vs last month:</span>
                <div className="flex items-center gap-1">
                  {isPositive ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  <span className="font-medium">
                    {isPositive ? "+" : ""}
                    {comparison}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/20 p-2 rounded-lg">
            <IconComponent className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
