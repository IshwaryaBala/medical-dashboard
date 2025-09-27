import React, { useState } from "react";
import { Paperclip, Mic, Sparkles, User } from "lucide-react";
import { chatMessages } from "../../data";
import { useTheme } from "../../contexts/ThemeContext";

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const { isDark, colors } = useTheme();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (message.trim()) {
        setMessage("");
      }
    }
  };

  return (
    <div
      className="w-full max-w-sm mx-auto rounded-lg transition-all duration-300"
      style={{
        background: isDark
          ? "linear-gradient(180deg, #1f2937 0%, #111827 100%)"
          : "linear-gradient(180deg, #e8f4f8 0%, #d4edda 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="mx-2 pt-2 pb-2">
        <div
          className="overflow-hidden"
          style={{ minHeight: "calc(100vh - 16px)" }}
        >
          {/* Header */}
          <div
            className={`px-4 py-3 border-b ${
              isDark ? "border-gray-600" : "border-gray-500"
            }`}
          >
            <div className="flex items-center justify-start mb-3">
              <div className="flex items-center space-x-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-lg"
                  style={{ background: colors.gradient }}
                >
                  <Sparkles size={16} className="text-white" />
                </div>
                <span
                  className={`font-medium ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  AI Assistant
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <button
                className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                  isDark
                    ? "text-gray-300 bg-gray-700 hover:bg-gray-600"
                    : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                }`}
              >
                CallTalk
              </button>
              <button
                className={`px-4 py-1.5 text-sm rounded-full shadow-sm transition-colors ${
                  isDark
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-[#004a8c]"
                }`}
              >
                Clarified
              </button>
              <button
                className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                  isDark
                    ? "text-gray-300 bg-gray-700 hover:bg-gray-600"
                    : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                }`}
              >
                CallSearch
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div
            className={`flex-1 p-4 space-y-4 transition-colors ${
              isDark
                ? "bg-gradient-to-b from-gray-800/30 to-gray-900/30"
                : "bg-gradient-to-b from-blue-50/30 to-green-50/30"
            }`}
            style={{ minHeight: "calc(100vh - 180px)" }}
          >
            {chatMessages.map((msg) => (
              <div key={msg.id}>
                <div
                  className={`flex ${
                    msg.type === "sent" ? "justify-end" : "justify-start"
                  } items-start`}
                >
                  {msg.type === "received" && (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-lg"
                      style={{ background: colors.gradient }}
                    >
                      <Sparkles size={14} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm transition-colors ${
                      msg.type === "sent"
                        ? isDark
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-[#004a8c] text-white hover:bg-blue-700"
                        : msg.type === "button"
                        ? isDark
                          ? "bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
                          : "bg-[#004a8c] text-white cursor-pointer hover:bg-blue-700"
                        : isDark
                        ? "bg-gray-700 text-gray-100 border border-gray-600"
                        : "bg-white text-gray-800 border border-gray-100"
                    }`}
                  >
                    <div className="text-sm leading-relaxed whitespace-pre-line">
                      {msg.message}
                    </div>
                  </div>
                  {msg.type === "sent" && (
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ml-3 flex-shrink-0 shadow-lg ${
                        isDark ? "bg-blue-600" : "bg-[#004a8c]"
                      }`}
                    >
                      <User size={14} className="text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-2">
            <div
              className={`flex items-center rounded-lg border px-4 py-3 transition-colors ${
                isDark
                  ? "bg-gray-700 border-gray-600"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <input
                type="text"
                placeholder="Ask me anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className={`flex-1 bg-transparent outline-none text-sm transition-colors ${
                  isDark
                    ? "text-gray-100 placeholder-gray-400"
                    : "text-gray-700 placeholder-gray-500"
                }`}
              />
              <div className="flex items-center space-x-3 ml-3">
                <button
                  className={`p-1 rounded-full transition-colors ${
                    isDark ? "hover:bg-gray-600" : "hover:bg-gray-100"
                  }`}
                >
                  <Paperclip
                    size={18}
                    className={isDark ? "text-gray-400" : "text-gray-500"}
                  />
                </button>
                <button
                  className={`p-1 rounded-full transition-colors ${
                    isDark ? "hover:bg-gray-600" : "hover:bg-gray-100"
                  }`}
                >
                  <Mic
                    size={18}
                    className={isDark ? "text-gray-400" : "text-gray-500"}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
