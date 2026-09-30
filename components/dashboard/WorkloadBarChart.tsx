"use client";

import React from "react";
import { BAR_CHART_DATA } from "@/data/dashboardData";

export const WorkloadBarChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Tenant Compute & Load Quota
          </h3>
          <p className="text-xs text-slate-400">
            Allocated Compute (k Cores) vs Active Ingest Load
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D97757]"></span>
            <span className="text-slate-600">Active Workloads</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
            <span className="text-slate-600">Buffer Reserve</span>
          </div>
        </div>
      </div>

      <div className="h-64 w-full flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-slate-100">
        {BAR_CHART_DATA.map((bar, i) => (
          <div key={i} className="flex-1 flex items-end justify-center gap-1 h-full group">
            {/* Terracotta Bar */}
            <div
              style={{ height: `${(bar.edura / 20) * 100}%` }}
              className="w-2.5 sm:w-3 bg-[#D97757] rounded-t-sm hover:brightness-110 transition-all cursor-pointer relative"
            >
              <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded shadow whitespace-nowrap z-10 pointer-events-none transition-opacity">
                {bar.edura}k
              </div>
            </div>

            {/* Slate Bar */}
            <div
              style={{ height: `${(bar.dinora / 20) * 100}%` }}
              className="w-2.5 sm:w-3 bg-slate-600 rounded-t-sm hover:brightness-125 transition-all cursor-pointer relative"
            >
              <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded shadow whitespace-nowrap z-10 pointer-events-none transition-opacity">
                {bar.dinora}k
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-[11px] text-slate-400 font-medium px-2 mt-2">
        {BAR_CHART_DATA.map((d) => (
          <span key={d.month}>{d.month}</span>
        ))}
      </div>
    </div>
  );
};
