"use client";

import React from "react";
import { SUB_METRICS_DATA } from "@/data/dashboardData";

export const SubMetricsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-6">
      {SUB_METRICS_DATA.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.id}
            className="bg-white rounded-xl p-4 shadow-xs border border-slate-100 flex flex-col items-center justify-center text-center group hover:border-orange-200 transition-all hover:shadow-sm"
          >
            <div className="w-9 h-9 rounded-full bg-[#FDF2ED] flex items-center justify-center text-[#D97757] mb-2 transition-transform group-hover:scale-110">
              <Icon className="w-4 h-4" />
            </div>
            <p className="text-xs font-semibold text-slate-500">{metric.label}</p>
            <p className="text-xl font-bold text-slate-800 mt-1">{metric.value}</p>
          </div>
        );
      })}
    </div>
  );
};
