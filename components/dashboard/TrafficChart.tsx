"use client";

import React from "react";
import { TRAFFIC_MONTHS } from "@/data/dashboardData";

export const TrafficChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Cross-Platform Request Throughput
          </h3>
          <p className="text-xs text-slate-400">
            Monthly aggregate API call volume (in Millions)
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
            <span className="text-slate-600">Edura + Dinora Core</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"></span>
            <span className="text-slate-600">Institute Sync</span>
          </div>
        </div>
      </div>

      {/* SVG Smooth Curves */}
      <div className="h-64 w-full relative pt-4">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
        >
          {[0, 50, 100, 150, 200].map((y, i) => (
            <line
              key={i}
              x1="20"
              y1={y}
              x2="590"
              y2={y}
              stroke="#F1F5F9"
              strokeWidth="1"
            />
          ))}

          {/* Series 1: Green/Emerald Curve */}
          <path
            d="M 20,150 C 70,140 120,120 170,100 C 220,80 270,30 320,20 C 370,15 420,30 470,70 C 520,110 555,130 590,140"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Series 2: Purple Curve */}
          <path
            d="M 20,175 C 70,170 120,155 170,135 C 220,115 270,75 320,65 C 370,60 420,80 470,115 C 520,145 555,160 590,170"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Series 1 Data Points */}
          {[
            { cx: 20, cy: 150 },
            { cx: 70, cy: 140 },
            { cx: 120, cy: 120 },
            { cx: 170, cy: 100 },
            { cx: 220, cy: 80 },
            { cx: 270, cy: 30 },
            { cx: 320, cy: 20 },
            { cx: 370, cy: 15 },
            { cx: 420, cy: 30 },
            { cx: 470, cy: 70 },
            { cx: 520, cy: 110 },
            { cx: 590, cy: 140 },
          ].map((pt, index) => (
            <circle
              key={index}
              cx={pt.cx}
              cy={pt.cy}
              r="4"
              fill="#FFFFFF"
              stroke="#10B981"
              strokeWidth="2.5"
              className="cursor-pointer transition-all hover:r-6"
            />
          ))}

          {/* Series 2 Data Points */}
          {[
            { cx: 20, cy: 175 },
            { cx: 70, cy: 170 },
            { cx: 120, cy: 155 },
            { cx: 170, cy: 135 },
            { cx: 220, cy: 115 },
            { cx: 270, cy: 75 },
            { cx: 320, cy: 65 },
            { cx: 370, cy: 60 },
            { cx: 420, cy: 80 },
            { cx: 470, cy: 115 },
            { cx: 520, cy: 145 },
            { cx: 590, cy: 170 },
          ].map((pt, index) => (
            <circle
              key={index}
              cx={pt.cx}
              cy={pt.cy}
              r="4"
              fill="#FFFFFF"
              stroke="#8B5CF6"
              strokeWidth="2.5"
              className="cursor-pointer transition-all hover:r-6"
            />
          ))}
        </svg>

        <div className="flex justify-between text-[11px] text-slate-400 font-medium px-2 mt-2">
          {TRAFFIC_MONTHS.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
