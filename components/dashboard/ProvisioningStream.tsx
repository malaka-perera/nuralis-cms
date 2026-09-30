"use client";

import React from "react";
import { PlusCircle } from "lucide-react";
import { RECENT_PROVISIONS_DATA } from "@/data/dashboardData";

interface ProvisioningStreamProps {
  onOpenProvisionModal: () => void;
}

export const ProvisioningStream: React.FC<ProvisioningStreamProps> = ({
  onOpenProvisionModal,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-900">
            Tenant Provision Stream
          </h3>
          <span className="text-xs font-bold text-[#D97757]">Live</span>
        </div>
        <p className="text-xs text-slate-400 mb-4">
          Automated database sharding and isolated domain routing.
        </p>

        <div className="space-y-3">
          {RECENT_PROVISIONS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-slate-50/80 border border-slate-100 flex items-start justify-between"
            >
              <div>
                <p className="font-bold text-xs text-slate-900">{item.tenant}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[11px] font-semibold text-[#D97757]">
                    {item.product}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[10px] text-slate-500 font-mono">{item.region}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                  {item.status}
                </span>
                <p className="text-[10px] text-slate-400 mt-1">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onOpenProvisionModal}
        className="mt-6 w-full py-2.5 bg-[#FDF2ED] hover:bg-[#fae7de] text-[#D97757] font-bold text-xs rounded-lg border border-orange-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        <PlusCircle className="w-4 h-4" />
        <span>Launch Provisioning Wizard</span>
      </button>
    </div>
  );
};
