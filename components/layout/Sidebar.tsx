"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, LayoutDashboard, Globe, Settings } from "lucide-react";

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const isDashboardActive = pathname === "/";
  const isProductsActive = pathname.startsWith("/products");
  const isSettingsActive = pathname.startsWith("/settings");

  return (
    <aside className="w-72 bg-white m-4 mr-0 rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between hidden md:flex shrink-0 sticky top-4 h-[calc(100vh-2rem)] overflow-y-auto">
      <div>
        {/* Brand / Logo Header */}
        <Link href="/" className="flex items-center gap-3 px-2 mb-8 group cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#D97757] to-[#F19A7E] flex items-center justify-center text-white shadow-md shadow-orange-200 transition-transform group-hover:scale-105 overflow-hidden p-1.5">
            <img
              src="/Logos/Nuralis/logo trans.png"
              alt="NuralisLabs"
              className="w-full h-full object-contain brightness-0 invert"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#D97757]">
              NuralisLabs
            </h1>
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              Super Admin Plane
            </p>
          </div>
        </Link>

        {/* Navigation Links: Dashboard, All Products, Global Settings */}
        <div className="space-y-1.5">
          {/* 1. Dashboard */}
          <Link
            href="/"
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              isDashboardActive
                ? "bg-[#FDF2ED] text-[#D97757] shadow-xs"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </div>
            {isDashboardActive && (
              <span className="w-2 h-2 rounded-full bg-[#D97757]"></span>
            )}
          </Link>

          {/* 2. All Products */}
          <Link
            href="/products"
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              isProductsActive
                ? "bg-[#FDF2ED] text-[#D97757] shadow-xs"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4" />
              <span>All Products</span>
            </div>
            <span className="text-xs bg-white text-slate-600 border border-slate-200 px-2 py-0.5 rounded-md font-bold">
              3
            </span>
          </Link>

          {/* 3. Global Settings */}
          <Link
            href="/settings"
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              isSettingsActive
                ? "bg-[#FDF2ED] text-[#D97757] shadow-xs"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <Settings className="w-4 h-4" />
              <span>Global Settings</span>
            </div>
            {isSettingsActive && (
              <span className="w-2 h-2 rounded-full bg-[#D97757]"></span>
            )}
          </Link>
        </div>
      </div>
    </aside>
  );
};
