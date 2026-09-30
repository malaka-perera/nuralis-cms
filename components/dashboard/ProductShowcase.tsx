"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Building, DollarSign } from "lucide-react";
import { PRODUCTS_DATA } from "@/data/dashboardData";
import { ProductType } from "@/types/dashboard";

interface ProductShowcaseProps {
  selectedProduct?: ProductType;
  onSelectProduct?: (product: ProductType) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  selectedProduct = "all",
  onSelectProduct,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
      {PRODUCTS_DATA.map((prod) => {
        const Icon = prod.icon;
        const isDimmed = selectedProduct !== "all" && selectedProduct !== prod.id;

        return (
          <div
            key={prod.id}
            className={`bg-white rounded-xl p-6 shadow-sm border border-slate-100 transition-all duration-200 flex flex-col justify-between hover:shadow-md ${
              isDimmed ? "opacity-50" : "opacity-100"
            }`}
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

              {/* Active Tenants & Monthly Revenue Tiles */}
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
              href={prod.id === "edura" ? "/products/edura" : "/products"}
              onClick={() => onSelectProduct && onSelectProduct(prod.id)}
              className="w-full py-3 px-4 bg-[#FDF2ED] hover:bg-[#fae7de] text-[#D97757] font-bold text-xs rounded-lg border border-orange-100/80 transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
            >
              <span>Manage Product</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
