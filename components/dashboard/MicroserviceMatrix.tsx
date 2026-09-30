"use client";

import React from "react";
import { Activity, RefreshCw } from "lucide-react";
import { MICROSERVICES_DATA } from "@/data/dashboardData";

export const MicroserviceMatrix: React.FC = () => {
  return (
    <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-[#D97757]">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Microservice Health & Pod Telemetry
            </h3>
            <p className="text-xs text-slate-400">
              Live isolation metrics across Edura, Dinora, Institute & IAM
            </p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-xs font-bold text-[#D97757] hover:underline cursor-pointer">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Sync</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
              <th className="pb-3">Microservice</th>
              <th className="pb-3">Product</th>
              <th className="pb-3">K8s Pods</th>
              <th className="pb-3">Latency</th>
              <th className="pb-3">CPU / Mem</th>
              <th className="pb-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
            {MICROSERVICES_DATA.map((svc, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 font-mono font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  {svc.name}
                </td>
                <td className="py-3">
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                    {svc.product}
                  </span>
                </td>
                <td className="py-3 font-mono text-slate-600">{svc.pods}</td>
                <td className="py-3 font-semibold text-emerald-600">{svc.latency}</td>
                <td className="py-3 text-slate-500 font-mono text-[11px]">
                  {svc.cpu} • {svc.memory}
                </td>
                <td className="py-3 text-right">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px] border border-emerald-200">
                    {svc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
