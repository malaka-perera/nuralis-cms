"use client";

import React, { useState } from "react";
import { ProductType } from "@/types/dashboard";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { SubMetricsGrid } from "@/components/dashboard/SubMetricsGrid";
import { ProductShowcase } from "@/components/dashboard/ProductShowcase";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { WorkloadBarChart } from "@/components/dashboard/WorkloadBarChart";
import { MicroserviceMatrix } from "@/components/dashboard/MicroserviceMatrix";
import { ProvisioningStream } from "@/components/dashboard/ProvisioningStream";
import { TenantProvisionModal } from "@/components/modals/TenantProvisionModal";

export default function SuperAdminDashboard() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>("all");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isProvisionModalOpen, setIsProvisionModalOpen] = useState(false);

  return (
    <div className="h-screen bg-[#F4F6FA] text-slate-800 flex font-sans antialiased overflow-hidden">
      {/* 1. Left Modular Sidebar */}
      <Sidebar />

      {/* 2. Main Scrollable Dashboard View */}
      <main className="flex-1 p-4 lg:p-6 overflow-y-auto h-screen">
        {/* Top Navbar Component */}
        <Header selectedProduct={selectedProduct} />

        {/* Dashboard Title & Ecosystem Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Control Plane Dashboard
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Multi-tenant overview & real-time telemetry across Edura, Dinora & Institute.
            </p>
          </div>

          {/* Product switcher filter pills */}
          <div className="bg-white p-1.5 rounded-lg shadow-xs border border-slate-200 flex items-center gap-1 self-start sm:self-auto">
            <button
              onClick={() => setSelectedProduct("all")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                selectedProduct === "all"
                  ? "bg-[#D97757] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedProduct("edura")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                selectedProduct === "edura"
                  ? "bg-cyan-500 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Edura (LMS)
            </button>
            <button
              onClick={() => setSelectedProduct("dinora")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                selectedProduct === "dinora"
                  ? "bg-[#D97757] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Dinora (POS)
            </button>
            <button
              onClick={() => setSelectedProduct("institute")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                selectedProduct === "institute"
                  ? "bg-purple-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Institute Platform
            </button>
          </div>
        </div>

        {/* 3. Top 4 Executive KPI Stat Cards */}
        <StatsCards />

        {/* 4. Middle 6 Sub-metric Quick Telemetry Cards */}
        <SubMetricsGrid />

        {/* 5. Core Ecosystem Product Cards Showcase */}
        <ProductShowcase
          selectedProduct={selectedProduct}
          onSelectProduct={setSelectedProduct}
        />

        {/* 6. Dual Diagnostic Charts (Curved Line Chart & Bar Chart) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TrafficChart />
          <WorkloadBarChart />
        </div>

        {/* 7. Microservice Diagnostic Matrix & Recent Provisioning Stream */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <MicroserviceMatrix />
          <ProvisioningStream
            onOpenProvisionModal={() => setIsProvisionModalOpen(true)}
          />
        </div>
      </main>

      {/* 8. Modular Provisioning Wizard Modal */}
      <TenantProvisionModal
        isOpen={isProvisionModalOpen}
        onClose={() => setIsProvisionModalOpen(false)}
      />
    </div>
  );
}
