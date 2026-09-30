"use client";

import React, { useState } from "react";
import { Bell, ChevronDown } from "lucide-react";
import { ProductType } from "@/types/dashboard";

interface HeaderProps {
  selectedProduct: ProductType;
}

export const Header: React.FC<HeaderProps> = ({ selectedProduct }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const getProductTitle = () => {
    switch (selectedProduct) {
      case "edura":
        return "Edura LMS Control";
      case "dinora":
        return "Dinora POS Control";
      case "institute":
        return "Institute Core Control";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md rounded-xl p-4 px-6 shadow-sm border border-slate-100 flex items-center justify-between mb-6">
      {/* Left: Breadcrumbs navigation */}
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <span className="font-semibold text-slate-800">NuralisLabs</span>
        <span>›</span>
        <span className="text-slate-600 font-medium">Admin</span>
        <span>›</span>
        <span className="text-[#D97757] font-semibold">{getProductTitle()}</span>
      </div>

      {/* Right: Notifications and User Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Bell with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-all relative cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#D97757] rounded-full ring-2 ring-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                <h4 className="text-xs font-bold text-slate-800">System Notifications</h4>
                <span className="text-[10px] bg-orange-100 text-[#D97757] px-2 py-0.5 rounded-full font-bold">
                  2 New
                </span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <p className="font-semibold text-slate-700">Dinora Engine Scaled</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Auto-scaled +2 pods on order traffic surge.
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 inline-block">10m ago</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <p className="font-semibold text-slate-700">New Tenant Provisioned</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Apex Culinary Group onboarded on Dinora.
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 inline-block">12m ago</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-400 to-[#D97757] flex items-center justify-center text-white font-bold text-sm shadow-sm">
            AV
          </div>
          <div className="hidden md:block text-left">
            <p className="text-xs font-bold text-slate-800 leading-tight">Alison V.</p>
            <p className="text-[10px] text-slate-400 font-semibold">Super Admin</p>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </div>
      </div>
    </header>
  );
};
