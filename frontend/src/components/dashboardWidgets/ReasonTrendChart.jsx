import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "../../data";
import { CircleDot } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

// Find the global peak across all categories
const findPeak = (data) => {
  let peak = { month: "", value: 0, key: "" };
  data.forEach((d) => {
    ["Fever", "Cold", "Asthma"].forEach((key) => {
      if (d[key] > peak.value) {
        peak = { month: d.month, value: d[key], key };
      }
    });
  });
  return peak;
};

const peakPoint = findPeak(chartData);

// Custom dot for the peak value
const CustomDot = ({ cx, cy, payload }) => {
  if (
    payload.month === peakPoint.month &&
    payload[peakPoint.key] === peakPoint.value
  ) {
    return (
      <g>
        {/* Lucide Icon */}
        <foreignObject x={cx - 10} y={cy - 20} width={24} height={24}>
          <CircleDot size={20} color="#14B8A6" strokeWidth={2.5} />
        </foreignObject>
        {/* Value label */}
        <text
          x={cx}
          y={cy - 25}
          textAnchor="middle"
          fontSize={12}
          fill="#374151"
          fontWeight="600"
        >
          {peakPoint.value / 1000}k
        </text>
      </g>
    );
  }
  return null;
};

export default function ReasonTrendChart() {
  const { isDark } = useTheme();

  return (
    <div
      className={`col-span-full lg:col-span-2 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2
          className={`text-lg font-semibold ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Reason Trend
        </h2>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className={isDark ? "text-gray-300" : "text-gray-600"}>
              Fever
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
            <span className={isDark ? "text-gray-300" : "text-gray-600"}>
              Cold
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className={isDark ? "text-gray-300" : "text-gray-600"}>
              Asthma
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="feverGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="coldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#14B8A6" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="asthmaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              className={isDark ? "stroke-gray-600" : "stroke-gray-200"}
              opacity={0.5}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: isDark ? "#9CA3AF" : "#6B7280",
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: isDark ? "#9CA3AF" : "#6B7280",
              }}
              tickFormatter={(value) => `${value / 1000}k`}
            />

            <Area
              type="monotone"
              dataKey="Cold"
              stroke="#14B8A6"
              strokeWidth={2}
              fill="url(#coldGradient)"
              dot={<CustomDot />}
              activeDot={false}
            />

            <Area
              type="monotone"
              dataKey="Fever"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#feverGradient)"
              dot={false}
              activeDot={false}
            />

            <Area
              type="monotone"
              dataKey="Asthma"
              stroke="#8B5CF6"
              strokeWidth={2}
              fill="url(#asthmaGradient)"
              dot={false}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
