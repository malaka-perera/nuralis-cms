"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  GraduationCap,
  Utensils,
  Building,
  Server,
  Database,
  Activity,
  ArrowUpRight,
  PlusCircle,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Radio,
  Search,
  CheckCircle2,
  SlidersHorizontal,
  RefreshCw,
  Box,
  Terminal,
  DollarSign,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { TenantProvisionModal } from "@/components/modals/TenantProvisionModal";
import { PRODUCTS_DATA, MICROSERVICES_DATA } from "@/data/dashboardData";

export default function AllProductsPage() {
  const [isProvisionModalOpen, setIsProvisionModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "healthy" | "lms" | "pos" | "institute">("all");

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()));

    if (selectedFilter === "lms") return matchesSearch && p.id === "edura";
    if (selectedFilter === "pos") return matchesSearch && p.id === "dinora";
    if (selectedFilter === "institute") return matchesSearch && p.id === "institute";
    return matchesSearch;
  });

  return (
    <div className="h-screen bg-[#F4F6FA] text-slate-800 flex font-sans antialiased overflow-hidden">
      {/* 1. Left Navigation Sidebar */}
      <Sidebar />

      {/* 2. Main Scrollable Products View */}
      <main className="flex-1 p-4 lg:p-6 overflow-y-auto h-screen">
        {/* Sticky Top Navbar */}
        <Header selectedProduct="all" />

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              All SaaS Products & Microservices
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Unified command layer for isolated microservice environments across Edura, Dinora & Institute Platform.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsProvisionModalOpen(true)}
              className="flex items-center gap-2 bg-[#D97757] hover:bg-[#C86A4B] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm shadow-orange-200 transition-all active:scale-95 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Provision New Instance</span>
            </button>
          </div>
        </div>

        {/* Top Aggregate Summary Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-full border border-[#D97757]/40 p-1 flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full bg-[#CB7A5C] flex items-center justify-center text-white shadow-xs">
                <Box className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800 tracking-tight leading-tight">3 Suites</p>
              <p className="text-xs font-medium text-slate-400 mt-0.5">Supported Ecosystem</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-full border border-cyan-400/60 p-1 flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full bg-[#00B4D8] flex items-center justify-center text-white shadow-xs">
                <Building className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800 tracking-tight leading-tight">890</p>
              <p className="text-xs font-medium text-slate-400 mt-0.5">Active Tenants</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-full border border-emerald-400/60 p-1 flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full bg-[#00C48C] flex items-center justify-center text-white shadow-xs">
                <Activity className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800 tracking-tight leading-tight">124.6k</p>
              <p className="text-xs font-medium text-slate-400 mt-0.5">Global Users</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-full border border-amber-400/60 p-1 flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full bg-[#FBBF24] flex items-center justify-center text-white shadow-xs">
                <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800 tracking-tight leading-tight">99.98%</p>
              <p className="text-xs font-medium text-slate-400 mt-0.5">Cluster Health</p>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-xl p-3 px-4 shadow-xs border border-slate-100 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === "all"
                  ? "bg-[#D97757] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Products (3)
            </button>
            <button
              onClick={() => setSelectedFilter("lms")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === "lms"
                  ? "bg-cyan-500 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Edura (LMS)
            </button>
            <button
              onClick={() => setSelectedFilter("pos")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === "pos"
                  ? "bg-[#D97757] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Dinora (POS)
            </button>
            <button
              onClick={() => setSelectedFilter("institute")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === "institute"
                  ? "bg-purple-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Institute Core
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search product, module, database..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F4F6FA] border-0 text-xs text-slate-700 pl-9 pr-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97757]/30 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Re-created Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {filteredProducts.map((prod) => {
            const Icon = prod.icon;

            return (
              <div
                key={prod.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Centered Large Logo & Title */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="h-16 w-full flex items-center justify-center mb-3">
                      {prod.logoUrl ? (
                        <img
                          src={prod.logoUrl}
                          alt={prod.name}
                          className="max-h-14 max-w-[180px] w-auto object-contain"
                        />
                      ) : (
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center ${prod.bgLight} ${prod.textColor}`}
                        >
                          <Icon className="w-8 h-8 stroke-[2.2]" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {prod.name}
                    </h3>
                    <span className="text-xs font-medium text-slate-400 mt-0.5">
                      {prod.type}
                    </span>
                  </div>

                  {/* Active Tenants & Monthly Revenue */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {/* Active Tenants */}
                    <div className="bg-[#F8FAFC] rounded-lg p-4 border border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <Building className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-semibold">Active Tenants</span>
                      </div>
                      <p className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        {prod.tenants}
                      </p>
                    </div>

                    {/* Monthly Revenue */}
                    <div className="bg-[#F8FAFC] rounded-lg p-4 border border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <DollarSign className="w-3.5 h-3.5 text-[#D97757]" />
                        <span className="text-[11px] font-semibold">Monthly Revenue</span>
                      </div>
                      <p className="text-2xl font-extrabold text-[#D97757] tracking-tight">
                        {prod.mrr}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Manage Button */}
                <Link
                  href={prod.id === "edura" ? "/products/edura" : `/products?manage=${prod.id}`}
                  className="w-full py-3 px-4 bg-[#FDF2ED] hover:bg-[#fae7de] text-[#D97757] font-bold text-xs rounded-lg border border-orange-100/80 transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-98 text-center"
                >
                  <span>Manage Product</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            );
          })}
        </div>

      </main>

      {/* Tenant Provision Modal */}
      <TenantProvisionModal
        isOpen={isProvisionModalOpen}
        onClose={() => setIsProvisionModalOpen(false)}
      />
    </div>
  );
}
