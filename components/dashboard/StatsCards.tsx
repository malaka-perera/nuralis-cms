"use client";

import React from "react";
import { Building2, Activity, ShieldCheck, DollarSign, Layers, CheckCircle } from "lucide-react";

export const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Card 1: 890 - Active Tenants (Terracotta double-ring badge) */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all">
        {/* Concentric Double-Ring Circular Badge */}
        <div className="w-14 h-14 rounded-full border border-[#D97757]/40 p-1 flex items-center justify-center shrink-0">
          <div className="w-full h-full rounded-full bg-[#CB7A5C] flex items-center justify-center text-white shadow-xs">
            <Building2 className="w-5 h-5 stroke-[2.2]" />
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold text-slate-800 tracking-tight leading-tight">
            890
          </p>
          <p className="text-xs font-medium text-slate-400 mt-0.5">
            Active Tenants
          </p>
        </div>
      </div>

      {/* Card 2: 360 - Live Endpoints (Cyan double-ring badge) */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all">
        {/* Concentric Double-Ring Circular Badge */}
        <div className="w-14 h-14 rounded-full border border-cyan-400/60 p-1 flex items-center justify-center shrink-0">
          <div className="w-full h-full rounded-full bg-[#00B4D8] flex items-center justify-center text-white shadow-xs">
            <Activity className="w-5 h-5 stroke-[2.2]" />
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold text-slate-800 tracking-tight leading-tight">
            360
          </p>
          <p className="text-xs font-medium text-slate-400 mt-0.5">
            Live Endpoints
          </p>
        </div>
      </div>

      {/* Card 3: 272 - Healthy Containers (Emerald double-ring badge) */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all">
        {/* Concentric Double-Ring Circular Badge */}
        <div className="w-14 h-14 rounded-full border border-emerald-400/60 p-1 flex items-center justify-center shrink-0">
          <div className="w-full h-full rounded-full bg-[#00C48C] flex items-center justify-center text-white shadow-xs">
            <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold text-slate-800 tracking-tight leading-tight">
            272
          </p>
          <p className="text-xs font-medium text-slate-400 mt-0.5">
            Healthy Containers
          </p>
        </div>
      </div>

      {/* Card 4: $148,500 - Total Earning (Amber double-ring badge) */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all">
        {/* Concentric Double-Ring Circular Badge */}
        <div className="w-14 h-14 rounded-full border border-amber-400/60 p-1 flex items-center justify-center shrink-0">
          <div className="w-full h-full rounded-full bg-[#FBBF24] flex items-center justify-center text-white shadow-xs">
            <DollarSign className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold text-slate-800 tracking-tight leading-tight">
            $148,500
          </p>
          <p className="text-xs font-medium text-slate-400 mt-0.5">
            Total Revenue
          </p>
        </div>
      </div>
    </div>
  );
};
